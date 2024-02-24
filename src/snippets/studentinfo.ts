import { ClubRecord, FirestoreCollection, IDUtil, Mutators, DMap } from "@lib";
import type {
  Debugger,
  UserDataCollectionType,
  EvaluateCollectionType,
  IUserData,
  ReferableMapEntity,
  EvaluateType
} from "@lib";

// config query
const query = "วรนน จุธากรณ์";


async function fetchDataFromFirestore() {
  const evalCol = new FirestoreCollection<EvaluateCollectionType>(
    "evaluate"
  ).setDefaultMutator(
    Mutators.SpecificKeyFieldKVMutator((doc) => doc.get("student_id"))
  );

  const users = new FirestoreCollection<UserDataCollectionType>(
    "data"
  ).setDefaultMutator(
    Mutators.SpecificKeyFieldKVMutator((doc) => doc.get("student_id"))
  );

  const [evalData, userData] = await Promise.all([
    evalCol.readFromCache(true),
    users.readFromCache(true),
  ]);

  return { evalData, userData };
}

function getStudentInfo(
  userData: DMap<string, ReferableMapEntity<IUserData>>,
  evalRecords: DMap<string,  ReferableMapEntity<EvaluateType>>,
  key: string
) {
  const student = userData.findValues(
    (userDataItem) =>
      `${userDataItem.get("firstname")} ${userDataItem.get("lastname")}` === key
  );

  
  const _student = student[0];
  const oldclub = _student?.get("old_club");
  const club = _student?.get("club");
  
  let clubName, oldclubName, eval_result;
  if (oldclub !== undefined) oldclubName = IDUtil.translateToClubName(oldclub);  
  if (club !== undefined) clubName = IDUtil.translateToClubName(club);

  evalRecords.map((key, val) => {
    if (key === _student?.get("club")) {
      new DMap(val.data()).map((k, v) => {
        if (k === _student?.get("student_id")) {
          eval_result = v.action;
        }
      })
    }
  });

  // TODO: Categorize information
  return {
    cardID: _student?.get("cardID"),
    studentID: _student?.get("student_id"),
    title: _student?.get("title"),
    firstname: _student?.get("firstname"),
    lastname: _student?.get("lastname"),
    room: _student?.get("room"),
    level: _student?.get("level"),
    number: _student?.get("number"),
    club: _student?.get("club"),
    clubname: clubName,
    // audition: `${_student?.get("audition")}`,
    position: _student?.get("position"),
    old_club: _student?.get("old_club"),
    old_clubname: oldclubName,
    evaluationResult: eval_result
  };
}


export const StudentInfoSnippet = async (debug: Debugger) => {
  const {evalData, userData} = await fetchDataFromFirestore();
  if (!userData || !evalData) return;
  
  const evalRecords = new ClubRecord(evalData.getRecord());
  const studentInfo = getStudentInfo(userData, evalRecords, query);
  console.table(studentInfo);
};
