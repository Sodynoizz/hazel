import { ClubRecord, FirestoreCollection, IDUtil, Mutators, DMap } from '@lib'
import type {
	Debugger,
	UserDataCollectionType,
	EvaluateCollectionType,
	IUserData,
	ReferableMapEntity,
	EvaluateType,
} from '@lib'

enum SearchOption {
	ID = 0,
	NAME = 1,
}

interface StudentInfo {
	cardID: string | undefined
	studentID: string | undefined
	title: string | undefined
	firstname: string | undefined
	lastname: string | undefined
	room: string | undefined
	level: string | undefined
	number: string | undefined
	club: string | undefined
	clubname: string | undefined
	old_club: string | undefined
	old_clubname: string | undefined
	evaluation_result: string | undefined
}

async function fetchDataFromFirestore() {
	const evalCol = new FirestoreCollection<EvaluateCollectionType>('evaluate').setDefaultMutator(
		Mutators.SpecificKeyFieldKVMutator((doc) => doc.get('student_id'))
	)
	const users = new FirestoreCollection<UserDataCollectionType>('data').setDefaultMutator(
		Mutators.SpecificKeyFieldKVMutator((doc) => doc.get('student_id'))
	)
	const [evalData, userData] = await Promise.all([evalCol.readFromCache(true), users.readFromCache(true)])
	return { evalData, userData }
}

function getStudentInfo(
	userData: DMap<string, ReferableMapEntity<IUserData>>,
	evalRecords: DMap<string, ReferableMapEntity<EvaluateType>>,
	key: string,
	searchOption: SearchOption
): StudentInfo | undefined {
	const student = userData.findValues((userDataItem) =>
		searchOption === SearchOption.ID
			? `${userDataItem.get('student_id')}` === key
			: `${userDataItem.get('firstname')} ${userDataItem.get('lastname')}` === key
	)

	const _student = student[0]
	if (!_student) return undefined

	const oldclub = _student.get('old_club')
	const club = _student.get('club')
	const clubName = club !== undefined ? IDUtil.translateToClubName(club) : undefined
	const oldclubName = oldclub !== undefined ? IDUtil.translateToClubName(oldclub) : undefined

	let eval_result: string | undefined
	evalRecords.map((key, val) => {
		if (key === _student.get('club')) {
			new DMap(val.data()).map((k, v) => {
				if (k === _student.get('student_id')) {
					eval_result = v.action
				}
			})
		}
	})

	return {
		cardID: _student.get('cardID'),
		studentID: _student.get('student_id'),
		title: _student.get('title'),
		firstname: _student.get('firstname'),
		lastname: _student.get('lastname'),
		room: _student.get('room'),
		level: _student.get('level'),
		number: _student.get('number'),
		club: _student.get('club'),
		clubname: clubName,
		old_club: oldclub,
		old_clubname: oldclubName,
		evaluation_result: eval_result,
	}
}

function getStudentMatchName(userData: DMap<string, ReferableMapEntity<IUserData>>, key: string): string[][] {
	const students = userData.findValues((userDataItem) => `${userDataItem.get('firstname')}` === key)
	return students.map((student) => [
		`${student.get('student_id')}`,
		`${student.get('firstname')} ${student.get('lastname')}`,
	])
}

export const StudentInfoSnippet = async (debug: Debugger) => {
	try {
		const { evalData, userData } = await fetchDataFromFirestore()

		if (!userData || !evalData) {
			debug.err('Failed to fetch data from Firestore.')
			return
		}

		debug.info('Search Option')
		debug.table([['Student ID'], ['Student Name']])
		debug.warn(
      "To utilize the studentInfo snippet effectively, ensure you're operating on a Linux system.\n\
      Otherwise, the readline - sync package may encounter compatibility issues with UTF-8 encoding"
		)
		let searchOption: string = debug.pauseForQuestion('Select Option (0 or 1)')

		switch (parseInt(searchOption)) {
			case SearchOption.NAME:
				if (process.platform === 'win32') {
					debug.err('This feature is not supported for WIN32 system')
					return
				}

        debug.info(`Running on ${process.platform.toUpperCase()} System`)
				let name: string = debug.pauseForQuestion('Enter Name')
				if (!name.includes(' ')) {
					const matchingData: string[][] = getStudentMatchName(userData, name)
					if (matchingData.length > 1) {
						debug.table(matchingData)
						let response = debug.pauseForQuestion(`Select Index (0-${matchingData.length - 1})`)
						const selectedIndex: number = parseInt(response)
						if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < matchingData.length) {
							const searchFor = matchingData[selectedIndex] || []
							name = searchFor[1] || ''
						} else {
							debug.err('Index is out of range.')
							return
						}
					} else {
						const searchFor = matchingData[0] || []
						name = searchFor[1] || ''
					}
				}

				debug.info(`Student Info: ${name}`)

				const evalRecords = new ClubRecord(evalData.getRecord())
				const studentInfo = getStudentInfo(userData, evalRecords, name, SearchOption.NAME)

				debug.table(studentInfo)
				break

			case SearchOption.ID:
				let id: string = debug.pauseForQuestion('Enter ID')
				debug.info(`Student Info ID: ${id}`)

				const _evalRecords = new ClubRecord(evalData.getRecord())
				const _studentInfo = getStudentInfo(userData, _evalRecords, id, SearchOption.ID)

				debug.table(_studentInfo)
				break

			default:
				return
		}
	} catch (error: any) {
		debug.err(`An error occurred: ${error.message}`)
		return
	}
}
