import { ClubRecord, FirestoreCollection, IDUtil, Mutators, DMap } from '@lib'
import type {
	Debugger,
	UserDataCollectionType,
	EvaluateCollectionType,
	IUserData,
	ReferableMapEntity,
	EvaluateType,
} from '@lib'

async function fetchDataFromFirestore() {
	const users = new FirestoreCollection<UserDataCollectionType>('data')
	return users.readFromCache(true)
}

// function getStudentInfo(
// 	userData: DMap<string, ReferableMapEntity<IUserData>>,
// ): ClearPanel | undefined {

// }

export const ClearPanelSnippet = async (debug: Debugger) => {
	try {
		const users = new FirestoreCollection<UserDataCollectionType>('data')
		const userData = await users.readFromCache(true)
		if (!userData) return

		const students = userData?.findValues(
			(userDataItem) => `${userDataItem?.get('level')}` !== '9'
		)

		for (let i = 0; i < students.length; i++) {
			// todo
		}
	} catch (error: any) {
		debug.err(`An error occurred: ${error.message}`)
		return
	}
}
