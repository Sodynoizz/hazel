import { Runtime } from '@lib'
import { ClubsListsSnippet } from 'snippets/clubsLists'
import { ReportPDFSnippet } from 'snippets/reportPDF'
import { ReportExcelSnippet } from 'snippets/reportExcel'
import { StudentInfoSnippet } from 'snippets/studentInfo'
import { ReportLogsSnippet } from 'snippets/reportLogs'
import { ClearPanelSnippet } from 'snippets/clear'
import { CheckAuditionSnippet } from 'snippets/checkAudition'
import { TeacherListsSnippet } from 'snippets/teacherList'
import { TempBruhSnippets } from 'snippets/temp'

enum RunOption {
	DEV = 'DEV',
	PROD = 'PROD',
}

enum SnippetMode {
	REPORTEXCEL = 1,
	STUDENTINFO = 2,
	CLUBSLISTS = 3,
	REPORTPDF = 4,
	REPORTLOGS = 5,
	CLEARPANEL = 6,
	AUDITION = 7,
	TEACHER_LIST = 8,
	TEMP = 9
}

// TODO: Support for SnippetMode via terminal
const mode: SnippetMode = SnippetMode.TEMP
const runtime: Runtime = new Runtime(RunOption.PROD)

switch (mode) {
	case SnippetMode.REPORTEXCEL as number:
		runtime.runSnippet(ReportExcelSnippet)
		break
	case SnippetMode.STUDENTINFO as number:
		runtime.runSnippet(StudentInfoSnippet)
		break
	case SnippetMode.CLUBSLISTS as number:
		runtime.runSnippet(ClubsListsSnippet)
		break
	case SnippetMode.REPORTPDF as number:
		runtime.runSnippet(ReportPDFSnippet)
		break
	case SnippetMode.REPORTLOGS as number:
		runtime.runSnippet(ReportLogsSnippet)
		break
	case SnippetMode.CLEARPANEL as number:
		runtime.runSnippet(ClearPanelSnippet)
		break
	case SnippetMode.AUDITION as number:
		runtime.runSnippet(CheckAuditionSnippet)
		break
	case SnippetMode.TEACHER_LIST as number:
		runtime.runSnippet(TeacherListsSnippet)
		break
	case SnippetMode.TEMP as number:
		runtime.runSnippet(TempBruhSnippets)
		break
	default:
		console.log('Invalid mode')
		break
}
