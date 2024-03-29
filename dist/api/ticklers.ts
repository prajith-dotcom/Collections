import {puts} from "util";

// Process
// getProcesses
// /api/tp/processes/v1
export const getProcessesBody = [
  {
    "Id": 1,
    "ProcessCd": "SPOC",
    "ProcessNm": "SPOC name",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-15T12:19:46.637"
  },


  {
    "Id": 2,
    "ProcessCd": "SPAC",
    "ProcessNm": "SPAC name",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-15T12:19:46.637"
  },

  {
    "Id": 3,
    "ProcessCd": "SPUC",
    "ProcessNm": "SPUC name",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-15T12:19:46.637"
  },

  {
    "Id": 4,
    "ProcessCd": "SPIC",
    "ProcessNm": "SPIC name",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-15T12:19:46.637"
  },


  {
    "Id": 5,
    "ProcessCd": "SPEC",
    "ProcessNm": "SPEC name",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-15T12:19:46.637"
  },
  {
    "Id": 6,
    "ProcessCd": "EXTENSION",
    "ProcessNm": "EXTENSION name",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-15T12:19:46.637"
  }
];

// TicklerType
// Tickler types
// /api/tp/tickler_types/v1?ProcessId=2
export const getTicklerTypes = [
  {
    "Id": 2,
    "TicklerCd": "SPOC CONTACT WITH CUSTOMER",
    "TicklerNm": "SPOC contact with customer",
    "TicklerDesc": null,
    "ActiveFlg": "Y",
    "ProcessId": 1,
    "FollowUpDays": 0,
    "ActionRequiredFlg": "Y",
    "CoreFlg": "N",
    "BaseFlg": "N",
    "CloseableFlg": "N",
    "OrderByCd": 1,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-04-21T10:00:19.323",
    "ModifiedBy": null,
    "ModifiedDt": null
  },
  {
    "Id": 3,
    "TicklerCd": "LOSS MIT PKG SENT",
    "TicklerNm": "Loss mitigation package sent",
    "TicklerDesc": null,
    "ActiveFlg": "N",
    "ProcessId": 1,
    "FollowUpDays": 5,
    "ActionRequiredFlg": "Y",
    "CoreFlg": "Y",
    "BaseFlg": "N",
    "CloseableFlg": "N",
    "OrderByCd": 2,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-21T14:28:59.717",
    "ModifiedBy": null,
    "ModifiedDt": null
  },
  {
    "Id": 4,
    "TicklerCd": "LOSS MIT PKG REC COMPLETE",
    "TicklerNm": "loss mit pkg rec complete",
    "TicklerDesc": null,
    "ActiveFlg": "Y",
    "ProcessId": 1,
    "FollowUpDays": 2,
    "ActionRequiredFlg": "Y",
    "CoreFlg": "Y",
    "BaseFlg": "N",
    "CloseableFlg": "Y",
    "OrderByCd": 3,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-21T14:29:16.523",
    "ModifiedBy": null,
    "ModifiedDt": null
  },
  {
    "Id": 5,
    "TicklerCd": "LOSS MIT PKG INCOMPLETE",
    "TicklerNm": "loss mit pkg incomplete",
    "TicklerDesc": null,
    "ActiveFlg": "Y",
    "ProcessId": 1,
    "FollowUpDays": 3,
    "ActionRequiredFlg": "Y",
    "CoreFlg": "Y",
    "BaseFlg": "N",
    "CloseableFlg": "Y",
    "OrderByCd": 4,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-21T14:29:16.523",
    "ModifiedBy": null,
    "ModifiedDt": null
  },
  {
    "Id": 6,
    "TicklerCd": "LOSS MIT PKG INFO RECEIVED",
    "TicklerNm": "loss mit pkg info received",
    "TicklerDesc": null,
    "ActiveFlg": "Y",
    "ProcessId": 1,
    "FollowUpDays": 3,
    "ActionRequiredFlg": "Y",
    "CoreFlg": "Y",
    "BaseFlg": "Y",
    "CloseableFlg": "N",
    "OrderByCd": 5,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-21T14:29:16.523",
    "ModifiedBy": null,
    "ModifiedDt": null
  },
  {
    "Id": 7,
    "TicklerCd": "TEST",
    "TicklerNm": "test",
    "TicklerDesc": "test",
    "ActiveFlg": "N",
    "ProcessId": 1,
    "FollowUpDays": 2,
    "ActionRequiredFlg": "Y",
    "CoreFlg": "Y",
    "BaseFlg": "N",
    "CloseableFlg": "Y",
    "OrderByCd": 6,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-28T13:38:06.917",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-28T13:38:19.153"
  },


  {
    "Id": 8,
    "TicklerCd": "TEST2",
    "TicklerNm": "test2",
    "TicklerDesc": "test",
    "ActiveFlg": "N",
    "ProcessId": 1,
    "FollowUpDays": 2,
    "ActionRequiredFlg": "Y",
    "CoreFlg": "N",
    "BaseFlg": "N",
    "CloseableFlg": "N",
    "OrderByCd": 7,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-28T13:38:06.917",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-28T13:38:19.153"
  },


  {
    "Id": 9,
    "TicklerCd": "TEST3",
    "TicklerNm": "test3",
    "TicklerDesc": "test",
    "ActiveFlg": "N",
    "ProcessId": 1,
    "FollowUpDays": 2,
    "ActionRequiredFlg": "Y",
    "CoreFlg": "N",
    "BaseFlg": "N",
    "CloseableFlg": "Y",
    "OrderByCd": 8,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-28T13:38:06.917",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-28T13:38:19.153"
  }
  // {
  //     "Id": 16,
  //     "TicklerCd": "TEST2",
  //     "TicklerNm": "test",
  //     "TicklerDesc": "test",
  //     "ActiveFlg": "N",
  //     "ProcessId": 1,
  //     "FollowUpDays": 2,
  //     "ActionRequiredFlg": "Y",
  //     "CreatedBy": "vsharapo",
  //     "CreatedDt": "2018-03-29T17:14:32.853",
  //     "ModifiedBy": "vsharapo",
  //     "ModifiedDt": "2018-03-29T17:15:31.98"
  // }
];
// ADD type: POST
// body:
// {
//     "ProcessId": 1,
//     "TicklerCd": "test2",
//     "TicklerNm": "test",
//     "TicklerDesc":"test",
//     "ActionRequiredFlg":"Y",
//     "FollowUpDays": 1,
//     "CreatedBy": "vsharapo"
// }
// UPDATE type : PUT
// body:
// {
//     "TicklerId": 16,
//     "TicklerNm": "test",
//     "TicklerDesc":"test",
//     "ActiveFlg":"N",
//     "ActionRequiredFlg":"Y",
//     "FollowUpDays": 2,
//     "ModifiedBy": "vsharapo"
// }


// processCase
// getCases
// /api/tp/cases/v1?Id=7&AccountId=100023420545&CifId=HCC0897&ProcessCd=SPOC&StatusCd=NEW&PageNr=0&PageSize=5
export const getCasesBody = [
  {
    "Id": 15,
    "AccountId": "6300104605",
    "AccountType": "L",
    "CifId": "JAA1223",
    "CaseDesc": "sdfgsdfg",
    "ProcessCd": "SPOC",
    "StatusCd": "NEW",
    "FollowUpDueDt": "2018-03-27T11:23:15.303",
    "AssignedUser": "mlambert",
    "AssignedGroup": null,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-23T11:23:15.303",
    "FirstName": "First15",
    "LastName": "Last15"
  },
  {
    "Id": 16,
    "AccountId": "7343338",
    "AccountType": "D",
    "CifId": "DAJ2332",
    "CaseDesc": "another test from UI",
    "ProcessCd": "SPOC",
    "StatusCd": "NEW",
    "FollowUpDueDt": "2018-03-28T11:13:59.41",
    "AssignedUser": "Navarre",
    "AssignedGroup": null,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-24T11:13:59.41",
    "FirstName": "First16",
    "LastName": "Last16"
  },
  {
    "Id": 13,
    "AccountId": "6900299733",
    "AccountType": "L",
    "CifId": "CCB4430",
    "CaseDesc": "test from UI",
    "ProcessCd": "SPAC",
    "StatusCd": "NEW",
    "FollowUpDueDt": "2018-03-29T11:12:06.283",
    "AssignedUser": "Isabeau",
    "AssignedGroup": null,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-25T11:12:06.283",
    "FirstName": "FirstN",
    "LastName": "LastN"
  },
  {
    "Id": 11,
    "AccountId": "7347198",
    "AccountType": "D",
    "CifId": "LAJ0601",
    "CaseDesc": "LAJ0601 73..198",
    "ProcessCd": "SPIC",
    "StatusCd": "NEW",
    "FollowUpDueDt": "2018-03-30T11:06:35.49",
    "AssignedUser": "Falkor",
    "AssignedGroup": null,
    "CreatedBy": "pblanco",
    "CreatedDt": "2018-03-26T11:06:35.49",
    "FirstName": "FirstN",
    "LastName": "LastN"
  },
  {
    "Id": 12,
    "AccountId": "6900578185",
    "AccountType": "L",
    "CifId": "AAA0207",
    "CaseDesc": "S 185 AAA",
    "ProcessCd": "SPEC",
    "StatusCd": "NEW",
    "FollowUpDueDt": "2018-03-31T11:03:24.013",
    "AssignedUser": "Fassbender",
    "AssignedGroup": null,
    "CreatedBy": "pblanco",
    "CreatedDt": "2018-03-27T11:03:24.013",
    "FirstName": "FirstN",
    "LastName": "LastN"
  },
  {
    "Id": 10,
    "AccountId": "6900391506",
    "AccountType": "L",
    "CifId": "JAA1223",
    "CaseDesc": "SPOC WAE4863  6900391506 ",
    "ProcessCd": "SPOC",
    "StatusCd": "NEW",
    "FollowUpDueDt": "2018-04-01T11:00:51.763",
    "AssignedUser": "Robert",
    "AssignedGroup": null,
    "CreatedBy": "pblanco",
    "CreatedDt": "2018-03-28T11:00:51.763",
    "FirstName": "FirstN",
    "LastName": "LastN"
  },
  {
    "Id": 8,
    "AccountId": "6300104605",
    "AccountType": "D",
    "CifId": "JAA1223",
    "CaseDesc": "Extension and JAA1223  6300104605 ",
    "ProcessCd": "EXTENSION",
    "StatusCd": "NEW",
    "FollowUpDueDt": "2018-04-02T11:00:08.603",
    "AssignedUser": "Griffith",
    "AssignedGroup": null,
    "CreatedBy": "pblanco",
    "CreatedDt": "2018-03-29T11:00:08.603",
    "FirstName": "FirstN",
    "LastName": "LastN"
  },
  {
    "Id": 6,
    "AccountId": "6900536068",
    "AccountType": "L",
    "CifId": "F322613",
    "CaseDesc": "SPOC comment for 6900536068 / F322613 ",
    "ProcessCd": "SPOC",
    "StatusCd": "NEW",
    "FollowUpDueDt": "2018-04-03T10:59:00.64",
    "AssignedUser": "Arslan",
    "AssignedGroup": null,
    "CreatedBy": "pblanco",
    "CreatedDt": "2018-03-30T10:59:00.64",
    "FirstName": "FirstN",
    "LastName": "LastN"
  },
  {
    "Id": 14,
    "AccountId": "6900538585",
    "AccountType": "D",
    "CifId": "JAE2890",
    "CaseDesc": "My first case ",
    "ProcessCd": "SPOC",
    "StatusCd": "NEW",
    "FollowUpDueDt": "2018-04-04T07:16:16.303",
    "AssignedUser": "Andragoras",
    "AssignedGroup": null,
    "CreatedBy": "pblanco",
    "CreatedDt": "2018-03-31T07:16:16.303",
    "FirstName": "FirstN",
    "LastName": "LastN"
  },
  {
    "Id": 7,
    "AccountId": "100023420545",
    "AccountType": "D",
    "CifId": "HCC0897",
    "CaseDesc": "test",
    "ProcessCd": "SPOC",
    "StatusCd": "NEW",
    "FollowUpDueDt": "2018-04-05T15:01:50.747",
    "AssignedUser": "Daryun",
    "AssignedGroup": null,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-04-01T15:01:50.747",
    "FirstName": "FirstN",
    "LastName": "LastN"
  },
  {
    "Id": 2,
    "AccountId": "100023420545",
    "AccountType": "D",
    "CifId": "HCC0897",
    "CaseDesc": "Test tickler case",
    "ProcessCd": "SPOC",
    "StatusCd": "CLOSED",
    "FollowUpDueDt": "2018-04-05T15:01:50.747",
    "AssignedUser": "Chris",
    "AssignedGroup": null,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-04-02T15:01:50.747",
    "FirstName": "FirstN",
    "LastName": "LastN"
  }
];

// Create case
// POST /api/tp/cases/v1
// {
//     "AccountId": "100023420545",
//     "CifId": "HCC0897",
//     "ProcessCd":"SPOC",
//     "CaseDesc":"test",
//     "CreatedBy": "vsharapo"
// }
// return 200

// processCaseTickler
// getCaseTicklers
// /api/tp/case_ticklers/v1
export const getCaseTicklersBody = [
  {
    "Id": 1,
    "CaseId": 16,
    "TicklerNm": "SPOC contact with customer",
    "TicklerTypeCd": "SPOC CONTACT WITH CUSTOMER",
    "TicklerDesc": "test",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-04-19T16:24:15.987",
    "Attributes": "{\"TEST2\":[\"Val1\",\"Val2\",\"Val3\"],\"TEST3\":[\"111\",\"222\"],\"TEST4\":[\"04/25/2018 12:39\"]}"
  },
  {
    "Id": 2,
    "CaseId": 15,
    "TicklerNm": "Loss mitigation package sent",
    "TicklerTypeCd": "LOSS MIT PKG SENT",
    "TicklerDesc": "testtesttesttesttesttesttesttesttesttesttest",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-02-19T16:24:15.987",
    "Attributes": "{\"TEST2\":[\"Val1\"],\"TEST3\":[\"111\",\"222\"],\"TEST4\":[\"04/25/2018 12:39\"]}"
  },
  {
    "Id": 3,
    "CaseId": 14,
    "TicklerNm": "loss mit pkg rec complete",
    "TicklerTypeCd": "LOSS MIT PKG REC COMPLETE",
    "TicklerDesc": "test",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-01-19T16:24:15.987",
    "Attributes": "{\"TEST3\":[\"111\"],\"TEST4\":[\"04/25/2018 12:39\"]}"
  },
  {
    "Id": 4,
    "CaseId": 13,
    "TicklerNm": "loss mit pkg incomplete",
    "TicklerTypeCd": "LOSS MIT PKG INCOMPLETE",
    "TicklerDesc": "test",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2017-12-19T16:24:15.987",
    "Attributes": "{}"
  },
  {
    "Id": 5,
    "CaseId": 12,
    "TicklerNm": "loss mit pkg info received",
    "TicklerTypeCd": "LOSS MIT PKG INFO RECEIVED",
    "TicklerDesc": "test",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-04-12T16:24:15.987",
    "Attributes": null,
    "Document": "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yAn1guyHXJKHhdhtp4+hbBTvgem41VJuWtVU5ef97PTejBc9lSuaNL2cBdoPura59Hy1+1FEsfPJszxAlAzKxTwcZW8nvEHpi6pZFGqyyelm9I2TJLnqb0RO/qxMZvdZf4Xy2Zn98mBLmZ46wQfPhcTHiVN/MBo6JNOtjhZLpCBdW7V1e6Ibl6sYgq50kd+RxKSGAy3Gn/wW4NRP3KCQGl0Yq+8/oIjH1f8XyG+MaQplbmRzdHJlYW0KZW5kb2JqCjEyIDAgb2JqCihQREZLaXQpCmVuZG9iagoxMyAwIG9iagooUERGS2l0KQplbmRvYmoKMTQgMCBvYmoKKEQ6MjAxOTEyMTkwOTQyMTFaKQplbmRvYmoKMTEgMCBvYmoKPDwKL1Byb2R1Y2VyIDEyIDAgUgovQ3JlYXRvciAxMyAwIFIKL0NyZWF0aW9uRGF0ZSAxNCAwIFIKPj4KZW5kb2JqCjggMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0Jhc2VGb250IC9IZWx2ZXRpY2EKL1N1YnR5cGUgL1R5cGUxCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCj4+CmVuZG9iago5IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9CYXNlRm9udCAvVGltZXMtUm9tYW4KL1N1YnR5cGUgL1R5cGUxCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCj4+CmVuZG9iagoxMCAwIG9iago8PAovVHlwZSAvRm9udAovQmFzZUZvbnQgL1RpbWVzLUJvbGQKL1N1YnR5cGUgL1R5cGUxCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCj4+CmVuZG9iago0IDAgb2JqCjw8Cj4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAxIDAgUgovTmFtZXMgMiAwIFIKPj4KZW5kb2JqCjEgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9Db3VudCAxCi9LaWRzIFs3IDAgUl0KPj4KZW5kb2JqCjIgMCBvYmoKPDwKL0Rlc3RzIDw8CiAgL05hbWVzIFsKXQo+Pgo+PgplbmRvYmoKeHJlZgowIDE1CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMzQzMyAwMDAwMCBuIAowMDAwMDAzNDkwIDAwMDAwIG4gCjAwMDAwMDMzNzEgMDAwMDAgbiAKMDAwMDAwMzM1MCAwMDAwMCBuIAowMDAwMDAwMjI5IDAwMDAwIG4gCjAwMDAwMDAxMTkgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAzMDU1IDAwMDAwIG4gCjAwMDAwMDMxNTIgMDAwMDAgbiAKMDAwMDAwMzI1MSAwMDAwMCBuIAowMDAwMDAyOTc5IDAwMDAwIG4gCjAwMDAwMDI4OTMgMDAwMDAgbiAKMDAwMDAwMjkxOCAwMDAwMCBuIAowMDAwMDAyOTQzIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgMTUKL1Jvb3QgMyAwIFIKL0luZm8gMTEgMCBSCi9JRCBbPDFlMTAzMTRhODdkYjVmMDMxZGY4MmU1NGNmNmI1ZDFjPiA8MWUxMDMxNGE4N2RiNWYwMzFkZjgyZTU0Y2Y2YjVkMWM+XQo+PgpzdGFydHhyZWYKMzUzNwolJUVPRgo="
  },

  {
    "Id": 6,
    "CaseId": 14,
    "TicklerNm": "test",
    "TicklerTypeCd": "TEST",
    "TicklerDesc": "test",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-19T16:24:15.987",
    "Attributes": null
  },
  {
    "Id": 7,
    "CaseId": 14,
    "TicklerNm": "test",
    "TicklerTypeCd": "TEST",
    "TicklerDesc": "test",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-19T16:24:15.987",
    "Attributes": null
  },
  {
    "Id": 8,
    "CaseId": 14,
    "TicklerNm": "test",
    "TicklerTypeCd": "TEST",
    "TicklerDesc": "test",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-19T16:24:15.987",
    "Attributes": null
  },
  {
    "Id": 9,
    "CaseId": 14,
    "TicklerNm": "test",
    "TicklerTypeCd": "TEST",
    "TicklerDesc": "test",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-19T16:24:15.987",
    "Attributes": null
  },
  {
    "Id": 10,
    "CaseId": 14,
    "TicklerNm": "test",
    "TicklerTypeCd": "TEST",
    "TicklerDesc": "test",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-19T16:24:15.987",
    "Attributes": null
  },
  {
    "Id": 11,
    "CaseId": 14,
    "TicklerNm": "test",
    "TicklerTypeCd": "TEST",
    "TicklerDesc": "test",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-19T16:24:15.987",
    "Attributes": null
  }
];

// addCaseTickler
// POST /api/tp/case_ticklers/v1
// {
//     "CaseId": 1,
//     "TicklerTypeCd": "SPOC CONTACT WITH CUSTOMER",
//     "TicklerDesc":"test",
//     "CreatedBy": "vsharapo"
// }

// TicklerTypeMap
// /api/tp/ticklers_map/v1
export const ticklerTypeMapBody = [
  {
    "Id": 1,
    "TicklerFromId": 2,
    "TicklerFromCd": "SPOC CONTACT WITH CUSTOMER",
    "TicklerFromNm": "SPOC contact with customer",
    "TicklerToId": 3,
    "TicklerToCd": "LOSS MIT PKG SENT",
    "TicklerToNm": "Loss mitigation package sent",
    "ActiveFlg": "Y",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-23T10:52:54.66",
    "ModifiedBy": null,
    "ModifiedDt": null
  },
  {
    "Id": 2,
    "TicklerFromId": 3,
    "TicklerFromCd": "LOSS MIT PKG SENT",
    "TicklerFromNm": "Loss mitigation package sent",
    "TicklerToId": 6,
    "TicklerToCd": "LOSS MIT PKG INFO RECEIVED",
    "TicklerToNm": "loss mit pkg info received",
    "ActiveFlg": "Y",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-23T10:58:33.667",
    "ModifiedBy": null,
    "ModifiedDt": null
  },
  {
    "Id": 3,
    "TicklerFromId": 6,
    "TicklerFromCd": "LOSS MIT PKG INFO RECEIVED",
    "TicklerFromNm": "loss mit pkg info received",
    "TicklerToId": 5,
    "TicklerToCd": "LOSS MIT PKG INCOMPLETE",
    "TicklerToNm": "loss mit pkg incomplete",
    "ActiveFlg": "Y",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-23T10:58:36.393",
    "ModifiedBy": null,
    "ModifiedDt": null
  },


  {
    "Id": 4,
    "TicklerFromId": 6,
    "TicklerFromCd": "LOSS MIT PKG INFO RECEIVED",
    "TicklerFromNm": "loss mit pkg info received",
    "TicklerToId": 7,
    "TicklerToCd": "TEST",
    "TicklerToNm": "test",
    "ActiveFlg": "Y",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-23T10:58:36.393",
    "ModifiedBy": null,
    "ModifiedDt": null
  },


  {
    "Id": 5,
    "TicklerFromId": 6,
    "TicklerFromCd": "LOSS MIT PKG INFO RECEIVED",
    "TicklerFromNm": "loss mit pkg info received",
    "TicklerToId": 9,
    "TicklerToCd": "TEST3",
    "TicklerToNm": "test3",
    "ActiveFlg": "Y",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-23T10:58:36.393",
    "ModifiedBy": null,
    "ModifiedDt": null
  },


  {
    "Id": 6,
    "TicklerFromId": 2,
    "TicklerFromCd": "SPOC CONTACT WITH CUSTOMER",
    "TicklerFromNm": "SPOC contact with customer",
    "TicklerToId": 8,
    "TicklerToCd": "TEST2",
    "TicklerToNm": "test2",
    "ActiveFlg": "Y",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-23T10:58:36.393",
    "ModifiedBy": null,
    "ModifiedDt": null
  },
  // {
  //     "Id": 4,
  //     "TicklerFromId": 6,
  //     "TicklerFromCd": "LOSS MIT PKG INFO RECIEVED",
  //     "TicklerFromNm": "loss mit pkg info received",
  //     "TicklerToId": 4,
  //     "TicklerToCd": "LOSS MIT PKG REC COMPLETE",
  //     "TicklerToNm": "loss mit pkg rec complete",
  //     "ActiveFlg": "Y",
  //     "CreatedBy": "vsharapo",
  //     "CreatedDt": "2018-03-23T10:58:36.427",
  //     "ModifiedBy": null,
  //     "ModifiedDt": null
  //   },


];


/*
* GET /api/tp/tickler_attribute_types/v1
*
* POST (addAttributeType) /api/tp/tickler_attribute_types/v1
*
* {
    "AttributeCd": "TEST2",
    "AttributeNm": "test",
    "AttributeDesc": "test",
    "ActiveFlg": "Y",
    "ArrayFlg": "Y",
    "DataType": "STRING",
    "CreatedBy": "vsharapo",
  },
*
*
* PUT (edit)  /api/tp/tickler_attribute_types/v1
*
*
*
* {
*   "Id": 1,
    "AttributeNm": "test",
    "AttributeDesc": "test",
    "ActiveFlg": "Y",
    "ArrayFlg": "N",
    "DataType": "STRING",
    "ModifiedBy": "vsharapo",
  },
*
*
*
* */


export const ticklerAttributeBody = [
  {
    "Id": 1,
    "AttributeCd": "TEST2",
    "AttributeNm": "Test2",
    "AttributeDesc": "test",
    "DataType": "STRING",
    "ActiveFlg": "Y",
    "ArrayFlg": "N",
    "MandatoryFlg": "N",
    "LovCd": "",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-30T15:00:36.913"
  },

  {
    "Id": 2,
    "AttributeCd": "TEST3",
    "AttributeNm": "Test3",
    "AttributeDesc": "test",
    "DataType": "LOV",
    "ActiveFlg": "Y",
    "ArrayFlg": "N",
    "MandatoryFlg": "N",
    "LovCd": "CLOSE_CASE3",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-30T15:00:36.913"
  },


  {
    "Id": 6,
    "AttributeCd": "TEST9",
    "AttributeNm": "Test9",
    "AttributeDesc": "test",
    "DataType": "DATETIME",
    "ActiveFlg": "Y",
    "ArrayFlg": "N",
    "MandatoryFlg": "N",
    "LovCd": "",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-30T15:00:36.913"
  },


  {
    "Id": 5,
    "AttributeCd": "TEST5",
    "AttributeNm": "Test5",
    "AttributeDesc": "test",
    "DataType": "DATE",
    "ActiveFlg": "Y",
    "ArrayFlg": "Y",
    "MandatoryFlg": "N",
    "LovCd": "",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-30T15:00:36.913"
  },


  {
    "Id": 4,
    "AttributeCd": "TEST4",
    "AttributeNm": "Test4",
    "AttributeDesc": "test",
    "DataType": "LOV",
    "ActiveFlg": "Y",
    "ArrayFlg": "Y",
    "MandatoryFlg": "N",
    "LovCd": "CLOSE_CASE4",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-30T15:00:36.913"
  },


  {
    "Id": 7,
    "AttributeCd": "TEST6",
    "AttributeNm": "Test6",
    "AttributeDesc": "test",
    "DataType": "NUMBER",
    "ActiveFlg": "Y",
    "ArrayFlg": "Y",
    "MandatoryFlg": "N",
    "LovCd": "",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-30T15:00:36.913"
  },


  {
    "Id": 8,
    "AttributeCd": "TEST7",
    "AttributeNm": "Test7",
    "AttributeDesc": "test",
    "DataType": "LOV",
    "ActiveFlg": "Y",
    "ArrayFlg": "Y",
    "MandatoryFlg": "N",
    "LovCd": "CLOSE_CASE1",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-30T15:00:36.913"
  },


  {
    "Id": 9,
    "AttributeCd": "TEST8",
    "AttributeNm": "Test8",
    "AttributeDesc": "test",
    "DataType": "LOV",
    "ActiveFlg": "Y",
    "ArrayFlg": "Y",
    "MandatoryFlg": "N",
    "LovCd": "CLOSE_CASE6",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-30T15:00:36.913"
  },


  {
    "Id": 10,
    "AttributeCd": "TEST10",
    "AttributeNm": "Test10",
    "AttributeDesc": "test",
    "DataType": "DATETIME",
    "ActiveFlg": "N",
    "ArrayFlg": "Y",
    "MandatoryFlg": "N",
    "LovCd": "",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "ModifiedBy": "vsharapo",
    "ModifiedDt": "2018-03-30T15:00:36.913"
  },


];


/*
* GET /api/tp/ticklers_atb_map/v1?TicklerTypeId=2
*
* POST (addTicklerAttributeMap) /api/tp/ticklers_atb_map/v1
*
* {
    TicklerTypeId": 2,
    "AttributeTypeId": 1,
    "CreatedBy": "vsharapo",
  },
*
*
* DELETE (deleteTicklerAttributeMap) /api/tp/ticklers_atb_map/v1?Id=1
*
* */


export const ticklerAttributeMapBody = [
  {
    "Id": 1,
    "TicklerTypeId": 2,
    "AttributeTypeId": 1,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "TicklerCd": "SPOC CONTACT WITH CUSTOMER",
    "TicklerNm": "SPOC contact with customer",
    "AttributeCd": "TEST2",
    "AttributeNm": "test2",
    "DataType": "STRING",
    "ArrayFlg": "Y",
    "MandatoryFlg": "N"
  },

  {
    "Id": 2,
    "TicklerTypeId": 1,
    "AttributeTypeId": 2,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "TicklerCd": "SPOC CONTACT WITH CUSTOMER",
    "TicklerNm": "SPOC contact with customer",
    "AttributeCd": "TEST3",
    "AttributeNm": "test3",
    "DataType": "DATE",
    "ArrayFlg": "N",
    "MandatoryFlg": "N"
  },


  {
    "Id": 3,
    "TicklerTypeId": 3,
    "AttributeTypeId": 3,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "TicklerCd": "SPOC CONTACT WITH CUSTOMER",
    "TicklerNm": "SPOC contact with customer",
    "AttributeCd": "TEST4",
    "AttributeNm": "test4",
    "DataType": "DATETIME",
    "ArrayFlg": "Y",
    "MandatoryFlg": "N"
  },


  {
    "Id": 4,
    "TicklerTypeId": 4,
    "AttributeTypeId": 4,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "TicklerCd": "SPOC CONTACT WITH CUSTOMER",
    "TicklerNm": "SPOC contact with customer",
    "AttributeCd": "TEST5",
    "AttributeNm": "test5",
    "DataType": "LOV",
    "ArrayFlg": "Y",
    "MandatoryFlg": "N"
  },


  {
    "Id": 5,
    "TicklerTypeId": 5,
    "AttributeTypeId": 5,
    "CreatedBy": "vsharapo",
    "CreatedDt": "2018-03-30T14:54:01.507",
    "TicklerCd": "SPOC CONTACT WITH CUSTOMER",
    "TicklerNm": "SPOC contact with customer",
    "AttributeCd": "TEST8",
    "AttributeNm": "test8",
    "DataType": "LOV",
    "ArrayFlg": "Y",
    "MandatoryFlg": "N"
  },


  //
  //
  //
  // {
  //   "Id": 6,
  //   "TicklerTypeId": 6,
  //   "AttributeTypeId": 5,
  //   "CreatedBy": "vsharapo",
  //   "CreatedDt": "2018-03-30T14:54:01.507",
  //   "TicklerCd": "SPOC CONTACT WITH CUSTOMER",
  //   "TicklerNm": "SPOC contact with customer",
  //   "AttributeCd": "TEST4",
  //   "AttributeNm": "test4",
  //   "DataType": "STRING",
  //   "ArrayFlg": "Y"
  // },
  //
  //
  // {
  //   "Id": 6,
  //   "TicklerTypeId": 13,
  //   "AttributeTypeId": 5,
  //   "CreatedBy": "vsharapo",
  //   "CreatedDt": "2018-03-30T14:54:01.507",
  //   "TicklerCd": "SPOC CONTACT WITH CUSTOMER",
  //   "TicklerNm": "SPOC contact with customer",
  //   "AttributeCd": "TEST4",
  //   "AttributeNm": "test4",
  //   "DataType": "STRING",
  //   "ArrayFlg": "Y"
  // },
  //

  // {
  //   "Id": 5,
  //   "TicklerTypeId": 16,
  //   "AttributeTypeId": 6,
  //   "CreatedBy": "vsharapo",
  //   "CreatedDt": "2018-03-30T14:54:01.507",
  //   "TicklerCd": "SPOC CONTACT WITH CUSTOMER",
  //   "TicklerNm": "SPOC contact with customer",
  //   "AttributeCd": "TEST4",
  //   "AttributeNm": "test4",
  //   "DataType": "STRING",
  //   "ArrayFlg": "Y"
  // },


];
