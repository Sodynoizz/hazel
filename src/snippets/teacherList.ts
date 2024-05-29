import { ClubRecord, FirestoreCollection, IDUtil } from '@lib'
import type { Debugger, EvaluateCollectionType } from '@lib'
import Excel from 'exceljs'
import path from 'path'

interface Data {
    firstname: string,
    lastname: string,
    panelID: string
}

async function fetchClubData(): Promise<Data[]> {
	const evalCol = new FirestoreCollection<EvaluateCollectionType>('data')
	const evalData = await evalCol.readFromCache(true)

	if (!evalData) return []
	
    const teachers = evalData?.findValues((userDataItem) => `${userDataItem?.get('level')}` === '9')

    return teachers.map((v) => {
        return {
            firstname: v.get('firstname').toString(),
            lastname: v.get('lastname').toString(),
            panelID: v.get('panelID').toString()
        }
    })    
}

async function generateExcelFile(data: Data[]): Promise<void> {
	const workbook = new Excel.Workbook()
	const worksheet = workbook.addWorksheet('รายชื่อชมรม')

	worksheet.columns = [
		{ key: 'firstname', header: 'ชื่อจริง' },
        { key: 'lastname', header: 'นามสกุล' },
        { key: 'panelID', header: 'panel' }
	]

	data.forEach((item) => {
		worksheet.addRow(item)
	})

	const exportPath = path.resolve(__dirname, 'teacherlists.xlsx')
	await workbook.xlsx.writeFile(exportPath)
}

export const TeacherListsSnippet = async (debug: Debugger) => {
	try {
		const clubData = await fetchClubData()

		if (clubData.length === 0) {
			console.log('No club data found.')
			return
		}

		await generateExcelFile(clubData)
		console.log('Excel file generated successfully.')
	} catch (error) {
		console.error('An error occurred:', error)
	}
}
