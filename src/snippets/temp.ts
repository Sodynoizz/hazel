import { ClubRecord, FirestoreCollection, IDUtil, Mutators, DMap } from '@lib'
import type {
	Debugger,
	UserDataCollectionType,
	EvaluateCollectionType,
	IUserData,
	ReferableMapEntity,
	EvaluateType,
} from '@lib'
import * as XLSX from 'xlsx'

export const TempBruhSnippets = async (debug: Debugger) => {
	const users = new FirestoreCollection<UserDataCollectionType>('data')
	const userData = await users.readFromCache(true)
	if (!userData) return

	const clubID = 'ก30934'
	const students = userData?.findValues((userDataItem) => `${userDataItem?.get('level')}` !== '9')

	const data = students
		.map((v) => {
			const audition = v.get('audition')
			if (audition && Object.keys(audition).length > 0) {
                const keyIncludesClubID = Object.keys(audition).some((key) => key.includes(clubID))
				if (keyIncludesClubID) {
					return [v.get("student_id"), audition]
				}
			}
			return undefined
		})
		.filter((item): item is [IUserData, any] => item !== undefined) // Type guard to filter out undefined values
    
    const worksheetData = data.map(([student_id, audition]) => ({
		student_id,
		...audition,
	}))

	// Create a new workbook and worksheet
	const workbook = XLSX.utils.book_new()
	const worksheet = XLSX.utils.json_to_sheet(worksheetData)

	// Append the worksheet to the workbook
	XLSX.utils.book_append_sheet(workbook, worksheet, 'Evaluation')

	// Write the workbook to a file
	XLSX.writeFile(workbook, 'eval.xlsx')
}  
