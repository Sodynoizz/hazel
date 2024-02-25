import type { Debugger, EvaluateCollectionType } from '@lib'
import { ClubRecord, DMap, FirestoreCollection } from '@lib'

export const ReportLogsSnippet = async (debug: Debugger) => {

  const evalColl = new FirestoreCollection<EvaluateCollectionType>('evaluate')
  const evalData = await evalColl.readFromCache(true)
  if (!evalData) return

  const evalMap = new ClubRecord(evalData.getRecord())

  const allCountMap = evalMap.map((k, v) => {
    const groupedByAction = new DMap(v.data()).groupBy((d) => d.action)
    const countMap = groupedByAction.map((gk, gv) => ({
      [gk]: gv?.length
    }))

    return {
      club: k,
      ...new DMap(countMap).getRecord()
    }
  })

  debug.pauseForAnyKey('Press any key to get table result.')
  debug.table(allCountMap)
}
