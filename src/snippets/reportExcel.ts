import type { Debugger, EvaluateCollectionType } from '@lib'
import { ClubRecord, DMap, FirestoreCollection } from '@lib'

import { Workbook } from '../lib/builtin/data/Workbook'
import { Worksheet } from '../lib/builtin/data/Worksheet'

export const ReportExcelSnippet = async (debug: Debugger) => {
	const evalColl = new FirestoreCollection<EvaluateCollectionType>('evaluate')

	const evalData = await evalColl.readFromCache(true)
	if (!evalData) return

	const evalRecords = new ClubRecord(evalData.getRecord())

	const book = evalRecords.map((clubId, v) => {
		const sheetData = new DMap(v.data()).map((k, v) => ({
			ID: k,
			report: v.action,
		}))

		return new Worksheet(sheetData).setName(clubId)
	})

	const workbook = new Workbook(book)

	workbook.setStyle((l, cell) => {
		cell.border = {
			top: { style: 'thin' },
			left: { style: 'thin' },
			bottom: { style: 'thin' },
			right: { style: 'thin' },
		}

		if (l.r === 1) {
			cell.font = { bold: true }
			cell.alignment = { horizontal: 'center' }
		}

		if (l.c === 2) {
			cell.alignment = { horizontal: 'center' }
		}
	})

	workbook.save('evals.xlsx')
}
