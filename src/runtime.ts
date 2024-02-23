import { Runtime } from '@lib'
import { ClubsListsSnippet } from 'snippets/clubsLists'
import { ReportPDFSnippet } from 'snippets/reportPDF'
import { ReportExcelSnippet } from 'snippets/reportExcel'
import { StudentInfoSnippet } from 'snippets/studentinfo'
import { ReportLogsSnippet } from 'snippets/reportLogs' 

enum SnippetMode {
  REPORTEXCEL = 1,
  STUDENTINFO = 2,
  CLUBSLISTS = 3,
  REPORTPDF = 4,
  REPORTLOGS = 5
}

const mode: SnippetMode = SnippetMode.STUDENTINFO;

switch (mode) {
  case SnippetMode.REPORTEXCEL as number:
    new Runtime('PROD').runSnippet(ReportExcelSnippet);
    break;
  case SnippetMode.STUDENTINFO as number:
    new Runtime('PROD').runSnippet(StudentInfoSnippet);
    break;
  case SnippetMode.CLUBSLISTS as number:
    new Runtime('PROD').runSnippet(ClubsListsSnippet);
    break;
  case SnippetMode.REPORTPDF as number:
    new Runtime('PROD').runSnippet(ReportPDFSnippet);
    break;
  case SnippetMode.REPORTLOGS as number:
    new Runtime('PROD').runSnippet(ReportLogsSnippet);
    break;
  default:
    console.log('Invalid mode');
}
