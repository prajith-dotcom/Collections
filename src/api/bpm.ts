// Get process instances
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.1/processes/instances/
export const bpm_procinst = {
  "process-instance": [
    {
      "process-instance-id": 10125,
      "process-id": "SPOC.SPOC",
      "process-name": "SPOC",
      "process-version": "2.1",
      "process-instance-state": 1,
      "container-id": "SPOC_1.2.1",
      "initiator": "pamadmin",
      "start-date": {
        "java.util.Date": 1552943407783
      },
      "process-instance-desc": "SPOC",
      "correlation-key": "10057",
      "parent-instance-id": -1,
      "sla-compliance": 0,
      "sla-due-date": null,
      "active-user-tasks": null,
      "process-instance-variables": null
    },
    {
      "process-instance-id": 10058,
      "process-id": "SPOC.SPOC",
      "process-name": "SPOC",
      "process-version": "2.1",
      "process-instance-state": 2,
      "container-id": "SPOC_1.2.1",
      "initiator": "coin",
      "start-date": {
        "java.util.Date": 1552943481787
      },
      "process-instance-desc": "SPOC",
      "correlation-key": "10058",
      "parent-instance-id": -1,
      "sla-compliance": 0,
      "sla-due-date": null,
      "active-user-tasks": null,
      "process-instance-variables": null
    },
    {
      "process-instance-id": 10059,
      "process-id": "SPOC.SPOC",
      "process-name": "SPOC",
      "process-version": "2.1",
      "process-instance-state": 1,
      "container-id": "SPOC_1.2.1",
      "initiator": "pamadmin",
      "start-date": {
        "java.util.Date": 1553003896230
      },
      "process-instance-desc": "SPOC",
      "correlation-key": "10059",
      "parent-instance-id": -1,
      "sla-compliance": 0,
      "sla-due-date": null,
      "active-user-tasks": null,
      "process-instance-variables": null
    },
    {
      "process-instance-id": 10060,
      "process-id": "SPOC.SPOC",
      "process-name": "SPOC",
      "process-version": "2.1",
      "process-instance-state": 3,
      "container-id": "SPOC_1.2.1",
      "initiator": "pamadmin",
      "start-date": {
        "java.util.Date": 1553009408507
      },
      "process-instance-desc": "SPOC",
      "correlation-key": "10060",
      "parent-instance-id": -1,
      "sla-compliance": 0,
      "sla-due-date": null,
      "active-user-tasks": null,
      "process-instance-variables": null
    },
    {
      "process-instance-id": 10061,
      "process-id": "SPOC.SPOC",
      "process-name": "SPOC",
      "process-version": "2.1",
      "process-instance-state": 3,
      "container-id": "SPOC_1.2.1",
      "initiator": "pamadmin",
      "start-date": {
        "java.util.Date": 1553010632107
      },
      "process-instance-desc": "SPOC",
      "correlation-key": "10061",
      "parent-instance-id": -1,
      "sla-compliance": 0,
      "sla-due-date": null,
      "active-user-tasks": null,
      "process-instance-variables": null
    },
    {
      "process-instance-id": 10062,
      "process-id": "SPOC.SPOC",
      "process-name": "SPOC",
      "process-version": "2.1",
      "process-instance-state": 2,
      "container-id": "SPOC_1.2.1",
      "initiator": "pamadmin",
      "start-date": {
        "java.util.Date": 1553010740087
      },
      "process-instance-desc": "SPOC",
      "correlation-key": "10062",
      "parent-instance-id": -1,
      "sla-compliance": 0,
      "sla-due-date": null,
      "active-user-tasks": null,
      "process-instance-variables": null
    },
    {
      "process-instance-id": 10063,
      "process-id": "SPOC.SPOC",
      "process-name": "SPOC",
      "process-version": "2.1",
      "process-instance-state": 1,
      "container-id": "SPOC_1.2.1",
      "initiator": "pamadmin",
      "start-date": {
        "java.util.Date": 1553074465590
      },
      "process-instance-desc": "SPOC",
      "correlation-key": "10063",
      "parent-instance-id": -1,
      "sla-compliance": 0,
      "sla-due-date": null,
      "active-user-tasks": null,
      "process-instance-variables": null
    },
    {
      "process-instance-id": 10064,
      "process-id": "SPOC.SPOC",
      "process-name": "SPOC",
      "process-version": "2.1",
      "process-instance-state": 1,
      "container-id": "SPOC_1.2.1",
      "initiator": "coin",
      "start-date": {
        "java.util.Date": 1553077817987
      },
      "process-instance-desc": "SPOC",
      "correlation-key": "10064",
      "parent-instance-id": -1,
      "sla-compliance": 0,
      "sla-due-date": null,
      "active-user-tasks": null,
      "process-instance-variables": null
    }
  ]
};

// Start process
// POST: https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.1/processes/SPOC.SPOC/instances
// {"testVal":"Pau Test from Postman"}

// Get process tasks
export const bpm_instance_tasks = {
  "task-summary": [
    {
      "task-id": 10103,
      "task-name": "Validate loss mitigation package",
      "task-subject": "",
      "task-description": "",
      "task-status": "Reserved",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "vsharapo",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553075115067
      },
      "task-activation-time": {
        "java.util.Date": 1553075115067
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10063,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.1",
      "task-parent-id": -1
    }
  ]
};

// Task by Id
export const bpm_one_tasks = {
  "task-id": 10103,
  "task-name": "Validate loss mitigation package",
  "task-subject": "",
  "task-description": "",
  "task-status": "Reserved",
  "task-priority": 1,
  "task-is-skipable": true,
  "task-actual-owner": "vsharapo",
  "task-created-by": null,
  "task-created-on": {
    "java.util.Date": 1553075115067
  },
  "task-activation-time": {
    "java.util.Date": 1553075115067
  },
  "task-expiration-time": {
    "java.util.Date": 1553075115067
  },
  "task-proc-inst-id": 10063,
  "task-proc-def-id": "SPOC.SPOC",
  "task-container-id": "SPOC_1.2.1",
  "task-parent-id": -1
};

// Complete task
// PUT: https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.1/tasks/10105/states/completed?user=pblanco&auto-progress=true

// Task status with variables
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.1/processes/instances/10063?withVars=true
export const bpm_instance_status = {
  "process-instance-id": 10063,
  "process-id": "SPOC.SPOC",
  "process-name": "SPOC",
  "process-version": "2.1",
  "process-instance-state": 1,
  "container-id": "SPOC_1.2.1",
  "initiator": "pamadmin",
  "start-date": {
    "java.util.Date": 1553074465590
  },
  "process-instance-desc": "SPOC",
  "correlation-key": "10063",
  "parent-instance-id": -1,
  "sla-compliance": 0,
  "sla-due-date": null,
  "active-user-tasks": {
    "task-summary": [
      {
        "task-id": 10103,
        "task-name": "Validate loss mitigation package",
        "task-subject": null,
        "task-description": "",
        "task-status": "Reserved",
        "task-priority": 1,
        "task-is-skipable": null,
        "task-actual-owner": "vsharapo",
        "task-created-by": "",
        "task-created-on": {
          "java.util.Date": 1553075115067
        },
        "task-activation-time": {
          "java.util.Date": 1553075115067
        },
        "task-expiration-time": null,
        "task-proc-inst-id": 10063,
        "task-proc-def-id": "SPOC.SPOC",
        "task-container-id": "SPOC_1.2.1",
        "task-parent-id": null
      }
    ]
  },
  "process-instance-variables": {
    "initiator": "pamadmin",
    "isValid": true,
    "testVal": "Pau Modified again"
  }
};

// Get all tasks
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/queries/tasks/instances/process/10063?status=Completed&status=Reserved
export const bpm_instance_all_tasks = {
  "task-summary": [
    {
      "task-id": 10101,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Completed",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "vsharapo",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553074465723
      },
      "task-activation-time": {
        "java.util.Date": 1553074465723
      },
      "task-expiration-time": {
        "java.util.Date" : 1554073200000
      },
      "task-proc-inst-id": 10063,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.1",
      "task-parent-id": -1
    },
    {
      "task-id": 10102,
      "task-name": "Send loss mitigation package",
      "task-subject": "",
      "task-description": "",
      "task-status": "Completed",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "vsharapo",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553074925597
      },
      "task-activation-time": {
        "java.util.Date": 1553074925597
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10063,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.1",
      "task-parent-id": -1
    },
    {
      "task-id": 10103,
      "task-name": "Validate loss mitigation package",
      "task-subject": "",
      "task-description": "",
      "task-status": "Reserved",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "vsharapo",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553075115067
      },
      "task-activation-time": {
        "java.util.Date": 1553075115067
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10063,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.1",
      "task-parent-id": -1
    }
  ]
};

// Get signals
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.1/processes/instances/10064/signals
export const bpm_signals = [
  "LMPR"
];

// Signal process
// POST; https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.1/processes/instances/10063/signal/LMPR
// body: true ¿?

// Process variables
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.4/processes/instances/10108/variables/instances
export const bpm_instance_variables = {
  "variable-instance": [
    {
        "name": "initiator",
        "old-value": "",
        "value": "coin",
        "process-instance-id": 10108,
        "modification-date": {
            "java.util.Date": 1553778066697
        }
    },
    {
        "name": "taskDueDate",
        "old-value": "",
        "value": "2019-04-02T23:00:00Z",
        "process-instance-id": 10108,
        "modification-date": {
            "java.util.Date": 1553778066713
        }
    },
    {
        "name": "xvIsValid",
        "old-value": "",
        "value": "false",
        "process-instance-id": 10108,
        "modification-date": {
            "java.util.Date": 1554728680123
        }
    },
    {
        "name": "xvIsApproved",
        "old-value": "",
        "value": "true",
        "process-instance-id": 10108,
        "modification-date": {
            "java.util.Date": 1554728698057
        }
    },
    {
        "name": "xvIsAccepted",
        "old-value": "",
        "value": "true",
        "process-instance-id": 10108,
        "modification-date": {
            "java.util.Date": 1554738378340
        }
    }
  ]
};

// Get status of instance with variables
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.1/processes/instances/10063?withVars=true
export const bpm_complete_instance_status = {
  "process-instance-id": 10063,
  "process-id": "SPOC.SPOC",
  "process-name": "SPOC",
  "process-version": "2.1",
  "process-instance-state": 1,
  "container-id": "SPOC_1.2.1",
  "initiator": "pamadmin",
  "start-date": {
    "java.util.Date": 1553074465590
  },
  "process-instance-desc": "SPOC",
  "correlation-key": "10063",
  "parent-instance-id": -1,
  "sla-compliance": 0,
  "sla-due-date": null,
  "active-user-tasks": {
    "task-summary": [
      {
        "task-id": 10107,
        "task-name": "Get customer decision",
        "task-subject": null,
        "task-description": "",
        "task-status": "InProgress",
        "task-priority": 0,
        "task-is-skipable": null,
        "task-actual-owner": "vsharapo",
        "task-created-by": "",
        "task-created-on": {
          "java.util.Date": 1553164551990
        },
        "task-activation-time": {
          "java.util.Date": 1553164551990
        },
        "task-expiration-time": null,
        "task-proc-inst-id": 10063,
        "task-proc-def-id": "SPOC.SPOC",
        "task-container-id": "SPOC_1.2.1",
        "task-parent-id": null
      }
    ]
  },
  "process-instance-variables": {
    "initiator": "pamadmin",
    "xvIsValid": false,
    "xvOther": true,
    "xvTaskName": "Pau Modified again",
    "isApproved": true
  }
};

export const bpm_cases = [
  {
    Id: 1,
    AccountId: "AccId1",
    AccountType: "L",
    CifId: "CifId1",
    ProcessInstanceId: 10125,
    ContainerId: "SPOC_1.2.1",
    ProcessId: "SPOC.SPOC",
    ProcessName: "SPOC",
    ProcessVersion: "2.1",
    Note: "The notes of the process",
    AbortNote: "Note when aborting",
    CreatedBy: "vsharapo",
    CreatedDt: "2019-03-19T15:22:53.997"
  },
  {
    Id: 2,
    AccountId: "AccId2",
    AccountType: "L",
    CifId: "CifId2",
    ProcessInstanceId: 10063,
    ContainerId: "SPOC_1.2.1",
    ProcessId: "SPOC.SPOC",
    ProcessName: "SPOC",
    ProcessVersion: "2.1",
    Note: "The notes of the process 2",
    CreatedBy: "pblanco",
    CreatedDt: "2019-05-19T15:22:00.000"
  }
];

export const bpm_process_types = [
  {
    "Id": 1,
    "ProcessId": "SPOC.SPOC",
    "ProcessName": "SPOC",
    "ProcessVersion": "2.2",
    "ContainerId": "SPOC_1.2.3",
    "ActiveFlg": "Y",
    "CreatedBy": "vsharapo",
    "CreatedDt": "2019-03-26T09:45:47.277",
    "ModifiedBy": null,
    "ModifiedDt": null
  }
];

// Get input parameters for task
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.1/processes/definitions/SPOC.SPOC/tasks/users/Validate%20loss%20mitigation%20package/inputs
export const bpm_task_variables = {
  "taskInputs": {
    "xvTaskName": "Object",
    "xvPriority": "String",
    "xvIsValid": "Boolean",
    "xvIsApproved": "Boolean",
    "xvIsAccepted": "Boolean",
    "xvOther": "Boolean",
    "isBusiness": "Boolean",
    "xvTopic": "Number",
  }
};

// Tasks by owner (inbox)
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/queries/tasks/instances/owners?user=coin&page=0&pageSize=10&status=Reserved&sort=expirationTime
export const bpm_tasks_by_owner = {
  "task-summary": [
    {
      "task-id": 10238,
      "task-name": "Send loss mitigation package",
      "task-subject": "",
      "task-description": "",
      "task-status": "Reserved",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "coin",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553693261150
      },
      "task-activation-time": {
        "java.util.Date": 1553693261150
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10099,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10265,
      "task-name": "Send loss mitigation package",
      "task-subject": "",
      "task-description": "",
      "task-status": "Reserved",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "coin",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553772250827
      },
      "task-activation-time": {
        "java.util.Date": 1553772250827
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10103,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10287,
      "task-name": "Send loss mitigation package",
      "task-subject": "",
      "task-description": "",
      "task-status": "Reserved",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "coin",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553778057357
      },
      "task-activation-time": {
        "java.util.Date": 1553778057357
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10107,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10305,
      "task-name": "Send loss mitigation package",
      "task-subject": "",
      "task-description": "",
      "task-status": "Reserved",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "coin",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553780025147
      },
      "task-activation-time": {
        "java.util.Date": 1553780025147
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10111,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10327,
      "task-name": "Send loss mitigation package",
      "task-subject": "",
      "task-description": "",
      "task-status": "Reserved",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "coin",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553785535077
      },
      "task-activation-time": {
        "java.util.Date": 1553785535077
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10118,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10342,
      "task-name": "Send loss mitigation package",
      "task-subject": "",
      "task-description": "",
      "task-status": "Reserved",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "coin",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553786446280
      },
      "task-activation-time": {
        "java.util.Date": 1553786446280
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10120,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10344,
      "task-name": "Send loss mitigation package",
      "task-subject": "",
      "task-description": "",
      "task-status": "Reserved",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "coin",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553786691713
      },
      "task-activation-time": {
        "java.util.Date": 1553786691713
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10121,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10368,
      "task-name": "Send to underwriting",
      "task-subject": "test",
      "task-description": "test",
      "task-status": "Reserved",
      "task-priority": 1,
      "task-is-skipable": true,
      "task-actual-owner": "coin",
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1554133930940
      },
      "task-activation-time": {
        "java.util.Date": 1554133930940
      },
      "task-expiration-time": null,
      "task-proc-inst-id": 10125,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    }
  ]
};

// Task details (at Coin)
// {{spaceURL}}/api/pam/account_processes_details/v1?ProcessInstanceId=10125
export const bpm_task_coin_detail = [
    {
        "Id": 47,
        "AccountId": "6900156024",
        "AccountType": "L",
        "CifId": "V002066",
        "ProcessInstanceId": 10125,
        "ContainerId": "SPOC_1.2.3",
        "ProcessId": "SPOC.SPOC",
        "ProcessName": "SPOC",
        "ProcessVersion": "2.2",
        "Note": "",
        "CustomerName": "TOMAS  ARCEMONT",
        "CreatedBy": "vsharapo",
        "CreatedDt": "2019-04-01T10:51:53.417"
    }
];

// Tasks by group
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/queries/tasks/instances/pot-owners?groups=bpm-all&status=Ready&page=0&pageSize=10&sort=expirationTime
export const bpm_tasks_by_group = {
  "task-summary": [
    {
      "task-id": 10212,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Ready",
      "task-priority": 1,
      "task-is-skipable": false,
      "task-actual-owner": null,
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553548351273
      },
      "task-activation-time": {
        "java.util.Date": 1553548351273
      },
      "task-expiration-time": {
        "java.util.Date": 1553986800000
      },
      "task-proc-inst-id": 10092,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10254,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Ready",
      "task-priority": 1,
      "task-is-skipable": false,
      "task-actual-owner": null,
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553700115277
      },
      "task-activation-time": {
        "java.util.Date": 1553700115277
      },
      "task-expiration-time": {
        "java.util.Date": 1554159600000
      },
      "task-proc-inst-id": 10101,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10255,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Ready",
      "task-priority": 1,
      "task-is-skipable": false,
      "task-actual-owner": null,
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553700478217
      },
      "task-activation-time": {
        "java.util.Date": 1553700478217
      },
      "task-expiration-time": {
        "java.util.Date": 1554159600000
      },
      "task-proc-inst-id": 10102,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10288,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Ready",
      "task-priority": 1,
      "task-is-skipable": false,
      "task-actual-owner": null,
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553778066713
      },
      "task-activation-time": {
        "java.util.Date": 1553778066713
      },
      "task-expiration-time": {
        "java.util.Date": 1554246000000
      },
      "task-proc-inst-id": 10108,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10306,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Ready",
      "task-priority": 1,
      "task-is-skipable": false,
      "task-actual-owner": null,
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553780369867
      },
      "task-activation-time": {
        "java.util.Date": 1553780369867
      },
      "task-expiration-time": {
        "java.util.Date": 1554246000000
      },
      "task-proc-inst-id": 10112,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10323,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Ready",
      "task-priority": 1,
      "task-is-skipable": false,
      "task-actual-owner": null,
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553785435527
      },
      "task-activation-time": {
        "java.util.Date": 1553785435527
      },
      "task-expiration-time": {
        "java.util.Date": 1554246000000
      },
      "task-proc-inst-id": 10115,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10324,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Ready",
      "task-priority": 1,
      "task-is-skipable": false,
      "task-actual-owner": null,
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553785459920
      },
      "task-activation-time": {
        "java.util.Date": 1553785459920
      },
      "task-expiration-time": {
        "java.util.Date": 1554246000000
      },
      "task-proc-inst-id": 10116,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10325,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Ready",
      "task-priority": 1,
      "task-is-skipable": false,
      "task-actual-owner": null,
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1553785466460
      },
      "task-activation-time": {
        "java.util.Date": 1553785466460
      },
      "task-expiration-time": {
        "java.util.Date": 1554246000000
      },
      "task-proc-inst-id": 10117,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10369,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Ready",
      "task-priority": 1,
      "task-is-skipable": false,
      "task-actual-owner": null,
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1554135574690
      },
      "task-activation-time": {
        "java.util.Date": 1554135574690
      },
      "task-expiration-time": {
        "java.util.Date": 1554591600000
      },
      "task-proc-inst-id": 10126,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    },
    {
      "task-id": 10370,
      "task-name": "Contact with customer",
      "task-subject": "",
      "task-description": "",
      "task-status": "Ready",
      "task-priority": 1,
      "task-is-skipable": false,
      "task-actual-owner": null,
      "task-created-by": null,
      "task-created-on": {
        "java.util.Date": 1554135942260
      },
      "task-activation-time": {
        "java.util.Date": 1554135942260
      },
      "task-expiration-time": {
        "java.util.Date": 1554591600000
      },
      "task-proc-inst-id": 10127,
      "task-proc-def-id": "SPOC.SPOC",
      "task-container-id": "SPOC_1.2.3",
      "task-parent-id": -1
    }
  ]
};


// Procesds intance history (tasks, signals and others)
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.4/processes/instances/10108/nodes/instances?page=0&pageSize=100
export const bpm_instance_history = {
    "node-instance": [
        {
            "node-instance-id": 22,
            "node-name": "PR2",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738583630
            },
            "node-id": "_606D3DF0-25CE-413B-976B-07E0C201FE15",
            "node-type": "EventNode",
            "node-connection": "_50D3714C-7D87-4568-A5D7-D93E2C844097",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 23,
            "node-name": null,
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738583630
            },
            "node-id": "_B28C14ED-25CB-4361-AE20-DCADBB0FEA71",
            "node-type": "Join",
            "node-connection": "_57DA8102-FEC9-4010-82F5-94DA8F7B08C5",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 24,
            "node-name": "End Event 1",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738583630
            },
            "node-id": "EndEvent_1",
            "node-type": "EndNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 24,
            "node-name": "End Event 1",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738583177
            },
            "node-id": "EndEvent_1",
            "node-type": "EndNode",
            "node-connection": "_57DA8102-FEC9-4010-82F5-94DA8F7B08C5",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 23,
            "node-name": null,
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738583177
            },
            "node-id": "_B28C14ED-25CB-4361-AE20-DCADBB0FEA71",
            "node-type": "Join",
            "node-connection": "_50D3714C-7D87-4568-A5D7-D93E2C844097",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 21,
            "node-name": "PR1",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738581493
            },
            "node-id": "_6FDFAF68-8B55-4CC8-841C-8E88154BC98A",
            "node-type": "EventNode",
            "node-connection": "_20F92C44-8C3C-49A4-8E94-8445183C889D",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 22,
            "node-name": "PR2",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738581493
            },
            "node-id": "_606D3DF0-25CE-413B-976B-07E0C201FE15",
            "node-type": "EventNode",
            "node-connection": "_20F92C44-8C3C-49A4-8E94-8445183C889D",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 20,
            "node-name": "Book loss mit to system",
            "process-instance-id": 10108,
            "work-item-id": 10485,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738578517
            },
            "node-id": "_A0565F0E-4B4E-4C8B-9C2D-46C171140D95",
            "node-type": "HumanTaskNode",
            "node-connection": "_E8BEB86E-E295-4544-914A-B4E19984FD7D",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 21,
            "node-name": "PR1",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738578517
            },
            "node-id": "_6FDFAF68-8B55-4CC8-841C-8E88154BC98A",
            "node-type": "EventNode",
            "node-connection": "_E8BEB86E-E295-4544-914A-B4E19984FD7D",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 19,
            "node-name": "Send loss mit signed docs to Booking",
            "process-instance-id": 10108,
            "work-item-id": 10484,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738563103
            },
            "node-id": "_30F470D3-28CF-4433-95B6-D4F7684595BD",
            "node-type": "HumanTaskNode",
            "node-connection": "_871FF1BA-6D56-4879-9755-D15B75DFC04B",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 20,
            "node-name": "Book loss mit to system",
            "process-instance-id": 10108,
            "work-item-id": 10485,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738563087
            },
            "node-id": "_A0565F0E-4B4E-4C8B-9C2D-46C171140D95",
            "node-type": "HumanTaskNode",
            "node-connection": "_871FF1BA-6D56-4879-9755-D15B75DFC04B",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 18,
            "node-name": "Send loss mit agreement",
            "process-instance-id": 10108,
            "work-item-id": 10483,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738559450
            },
            "node-id": "_64FB4BDE-01F7-442D-A854-15373B8206A3",
            "node-type": "HumanTaskNode",
            "node-connection": "_7FFCCAAA-76F6-4273-9681-21E645FF7D2E",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 19,
            "node-name": "Send loss mit signed docs to Booking",
            "process-instance-id": 10108,
            "work-item-id": 10484,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738559437
            },
            "node-id": "_30F470D3-28CF-4433-95B6-D4F7684595BD",
            "node-type": "HumanTaskNode",
            "node-connection": "_7FFCCAAA-76F6-4273-9681-21E645FF7D2E",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 17,
            "node-name": "Set loss mit closing date",
            "process-instance-id": 10108,
            "work-item-id": 10482,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738555843
            },
            "node-id": "_F5812F42-5153-4055-BB25-ED0AD151CC37",
            "node-type": "HumanTaskNode",
            "node-connection": "_059C8927-C9ED-4A49-AC68-9FFDCAD5B9F7",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 18,
            "node-name": "Send loss mit agreement",
            "process-instance-id": 10108,
            "work-item-id": 10483,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738555827
            },
            "node-id": "_64FB4BDE-01F7-442D-A854-15373B8206A3",
            "node-type": "HumanTaskNode",
            "node-connection": "_059C8927-C9ED-4A49-AC68-9FFDCAD5B9F7",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 16,
            "node-name": "LMTP3",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738553620
            },
            "node-id": "_835F454B-1A08-4878-8AE5-43E841316689",
            "node-type": "EventNode",
            "node-connection": "_02D9EC0F-7417-4BED-8F3E-45CF81B8C2E5",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 17,
            "node-name": "Set loss mit closing date",
            "process-instance-id": 10108,
            "work-item-id": 10482,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738553573
            },
            "node-id": "_F5812F42-5153-4055-BB25-ED0AD151CC37",
            "node-type": "HumanTaskNode",
            "node-connection": "_02D9EC0F-7417-4BED-8F3E-45CF81B8C2E5",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 15,
            "node-name": "LMTP2",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738552027
            },
            "node-id": "_45D74F06-B593-4B51-9EC4-68444B37B46B",
            "node-type": "EventNode",
            "node-connection": "_C86BBC78-D208-439E-85D4-D2AC34A7337B",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 16,
            "node-name": "LMTP3",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738552027
            },
            "node-id": "_835F454B-1A08-4878-8AE5-43E841316689",
            "node-type": "EventNode",
            "node-connection": "_C86BBC78-D208-439E-85D4-D2AC34A7337B",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 14,
            "node-name": "LMTP1",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738549930
            },
            "node-id": "_9E98052A-6BB7-420B-B9C1-090F9A9FA52B",
            "node-type": "EventNode",
            "node-connection": "_66A41B73-FCEE-49DD-8550-F04611C5B4F4",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 15,
            "node-name": "LMTP2",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738549930
            },
            "node-id": "_45D74F06-B593-4B51-9EC4-68444B37B46B",
            "node-type": "EventNode",
            "node-connection": "_66A41B73-FCEE-49DD-8550-F04611C5B4F4",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 13,
            "node-name": "Setup payment plan",
            "process-instance-id": 10108,
            "work-item-id": 10481,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738508830
            },
            "node-id": "_D4A5DBCA-DF91-4777-BED1-DB313DE2FBD9",
            "node-type": "HumanTaskNode",
            "node-connection": "_5AD02297-929E-452F-9C84-5FCDBEA09BA5",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 14,
            "node-name": "LMTP1",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738508830
            },
            "node-id": "_9E98052A-6BB7-420B-B9C1-090F9A9FA52B",
            "node-type": "EventNode",
            "node-connection": "_5AD02297-929E-452F-9C84-5FCDBEA09BA5",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 11,
            "node-name": "Get customer decision",
            "process-instance-id": 10108,
            "work-item-id": 10476,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738378373
            },
            "node-id": "_E49565DF-17CE-4301-BBA6-D9DB3BD521C6",
            "node-type": "HumanTaskNode",
            "node-connection": "_BFC309D1-EA5F-4900-AF30-F2745C5FBC8B",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 12,
            "node-name": null,
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738378373
            },
            "node-id": "_3A5EA5D8-CEB6-4AF7-B8B2-2CB0D471FB73",
            "node-type": "Split",
            "node-connection": "_F5336B5D-1DFF-42C2-8540-60CB6F8671C5",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 13,
            "node-name": "Setup payment plan",
            "process-instance-id": 10108,
            "work-item-id": 10481,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738378340
            },
            "node-id": "_D4A5DBCA-DF91-4777-BED1-DB313DE2FBD9",
            "node-type": "HumanTaskNode",
            "node-connection": "_F5336B5D-1DFF-42C2-8540-60CB6F8671C5",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 12,
            "node-name": null,
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554738378340
            },
            "node-id": "_3A5EA5D8-CEB6-4AF7-B8B2-2CB0D471FB73",
            "node-type": "Split",
            "node-connection": "_BFC309D1-EA5F-4900-AF30-F2745C5FBC8B",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 9,
            "node-name": "Process underwriting result",
            "process-instance-id": 10108,
            "work-item-id": 10475,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728698073
            },
            "node-id": "_2DCF31AB-F59A-4DCC-88DD-15689DB5CF4C",
            "node-type": "HumanTaskNode",
            "node-connection": "_441E4264-DB83-42EE-ABC2-1658612F9866",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 10,
            "node-name": null,
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728698073
            },
            "node-id": "_9376C7A4-4EFF-4EF2-9F10-69EC7DF69CC6",
            "node-type": "Split",
            "node-connection": "_FB510139-F490-483B-8719-8C7BE4B0534E",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 11,
            "node-name": "Get customer decision",
            "process-instance-id": 10108,
            "work-item-id": 10476,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728698057
            },
            "node-id": "_E49565DF-17CE-4301-BBA6-D9DB3BD521C6",
            "node-type": "HumanTaskNode",
            "node-connection": "_FB510139-F490-483B-8719-8C7BE4B0534E",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 10,
            "node-name": null,
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728698057
            },
            "node-id": "_9376C7A4-4EFF-4EF2-9F10-69EC7DF69CC6",
            "node-type": "Split",
            "node-connection": "_441E4264-DB83-42EE-ABC2-1658612F9866",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 8,
            "node-name": "UWRSLT",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728691553
            },
            "node-id": "_B704C88F-904E-43E8-9AFC-64005D0B2217",
            "node-type": "EventNode",
            "node-connection": "_17F5C30D-5F7D-45F2-887D-866A68B0130F",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 9,
            "node-name": "Process underwriting result",
            "process-instance-id": 10108,
            "work-item-id": 10475,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728691523
            },
            "node-id": "_2DCF31AB-F59A-4DCC-88DD-15689DB5CF4C",
            "node-type": "HumanTaskNode",
            "node-connection": "_17F5C30D-5F7D-45F2-887D-866A68B0130F",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 7,
            "node-name": "Send to underwriting",
            "process-instance-id": 10108,
            "work-item-id": 10474,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728689740
            },
            "node-id": "UserTask_5",
            "node-type": "HumanTaskNode",
            "node-connection": "_28235F7C-E57C-46B4-B9F4-B188814FEAEB",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 8,
            "node-name": "UWRSLT",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728689740
            },
            "node-id": "_B704C88F-904E-43E8-9AFC-64005D0B2217",
            "node-type": "EventNode",
            "node-connection": "_28235F7C-E57C-46B4-B9F4-B188814FEAEB",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 5,
            "node-name": "Validate loss mitigation package",
            "process-instance-id": 10108,
            "work-item-id": 10473,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728680157
            },
            "node-id": "UserTask_4",
            "node-type": "HumanTaskNode",
            "node-connection": "SequenceFlow_10",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 6,
            "node-name": "Valid?",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728680157
            },
            "node-id": "ParallelGateway_1",
            "node-type": "Split",
            "node-connection": "SequenceFlow_11",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 7,
            "node-name": "Send to underwriting",
            "process-instance-id": 10108,
            "work-item-id": 10474,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728680140
            },
            "node-id": "UserTask_5",
            "node-type": "HumanTaskNode",
            "node-connection": "SequenceFlow_11",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 6,
            "node-name": "Valid?",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728680140
            },
            "node-id": "ParallelGateway_1",
            "node-type": "Split",
            "node-connection": "SequenceFlow_10",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 4,
            "node-name": "LMPR",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728676230
            },
            "node-id": "IntermediateCatchEvent_1",
            "node-type": "EventNode",
            "node-connection": "SequenceFlow_8",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 5,
            "node-name": "Validate loss mitigation package",
            "process-instance-id": 10108,
            "work-item-id": 10473,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728676153
            },
            "node-id": "UserTask_4",
            "node-type": "HumanTaskNode",
            "node-connection": "SequenceFlow_8",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 3,
            "node-name": "Send loss mitigation package",
            "process-instance-id": 10108,
            "work-item-id": 10460,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728673887
            },
            "node-id": "UserTask_2",
            "node-type": "HumanTaskNode",
            "node-connection": "SequenceFlow_7",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 4,
            "node-name": "LMPR",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554728673887
            },
            "node-id": "IntermediateCatchEvent_1",
            "node-type": "EventNode",
            "node-connection": "SequenceFlow_7",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 1,
            "node-name": "Contact with customer",
            "process-instance-id": 10108,
            "work-item-id": 10290,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554380140053
            },
            "node-id": "UserTask_1",
            "node-type": "HumanTaskNode",
            "node-connection": "SequenceFlow_13",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 2,
            "node-name": "Inclusive Gateway 1",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554380140053
            },
            "node-id": "InclusiveGateway_1",
            "node-type": "Join",
            "node-connection": "SequenceFlow_14",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 3,
            "node-name": "Send loss mitigation package",
            "process-instance-id": 10108,
            "work-item-id": 10460,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554380140040
            },
            "node-id": "UserTask_2",
            "node-type": "HumanTaskNode",
            "node-connection": "SequenceFlow_14",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 2,
            "node-name": "Inclusive Gateway 1",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1554380140040
            },
            "node-id": "InclusiveGateway_1",
            "node-type": "Join",
            "node-connection": "SequenceFlow_13",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 0,
            "node-name": "v1",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1553778066727
            },
            "node-id": "_3CB8C9FF-8F98-4B51-A2B6-61FFA1C8893B",
            "node-type": "StartNode",
            "node-connection": "SequenceFlow_1",
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 1,
            "node-name": "Contact with customer",
            "process-instance-id": 10108,
            "work-item-id": 10290,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1553778066713
            },
            "node-id": "UserTask_1",
            "node-type": "HumanTaskNode",
            "node-connection": "SequenceFlow_1",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 0,
            "node-name": "v1",
            "process-instance-id": 10108,
            "work-item-id": null,
            "container-id": "SPOC_1.2.3",
            "start-date": {
                "java.util.Date": 1553778066713
            },
            "node-id": "_3CB8C9FF-8F98-4B51-A2B6-61FFA1C8893B",
            "node-type": "StartNode",
            "node-connection": null,
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        }
    ]
};

// Process diagram
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.2.3/images/processes/instances/10098
// <?xml version="1.0" encoding="UTF-8"?>
export const bpm_task_image = `
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentScriptType="text/ecmascript" width="2815" zoomAndPan="magnify" contentStyleType="text/css" height="1415" preserveAspectRatio="xMidYMid meet" version="1.1">
    <defs/>
    <g transform="matrix(1,0,0,1,0,0)">
        <g>
            <g>
                <path fill="none" stroke-dasharray="" paint-order="fill stroke markers" d=" M 0 0 L 2800 0 L 2800 1400 L 0 1400 L 0 0 Z Z" stroke="#d3d3d3" stroke-opacity="0.8" stroke-miterlimit="10"/>
            </g>
            <g id="Lane_1" transform="matrix(1,0,0,1,37,40)" bpmn2nodeid="Lane_1">
                <g>
                    <path fill="none" stroke="none"/>
                </g>
                <g transform="matrix(1,0,0,1,0,0)">
                    <path fill="#f2f2f2" d=" M 0 0 L 2738 0 L 2738 561 L 0 561 L 0 0 Z Z" paint-order="stroke fill markers" id="Lane_1?shapeType=BACKGROUND" stroke="none"/>
                </g>
                <g transform="matrix(1,0,0,1,0,0)">
                    <path fill="none" stroke-dasharray="" id="Lane_1?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 0 0 L 2738 0 L 2738 561 L 0 561 L 0 0 Z Z" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10"/>
                </g>
                <g id="_9376C7A4-4EFF-4EF2-9F10-69EC7DF69CC6" transform="matrix(1,0,0,1,1523,40)" bpmn2nodeid="_9376C7A4-4EFF-4EF2-9F10-69EC7DF69CC6">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.125,0,0,0.125,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fef4ea" d=" M 0 0 M 224.4 4.3 C 216.4 4.3 208.4 7.3 202.3 13.399999999999999 L 13.5 202.2 C 1.3000000000000007 214.39999999999998 1.3000000000000007 234.2 13.5 246.39999999999998 L 202.2 435.09999999999997 C 208.29999999999998 441.2 216.39999999999998 444.2 224.29999999999998 444.2 C 232.2 444.2 240.29999999999998 441.2 246.39999999999998 435.09999999999997 L 435.09999999999997 246.39999999999998 C 447.29999999999995 234.2 447.29999999999995 214.39999999999998 435.09999999999997 202.2 L 246.5 13.4 C 240.4 7.3 232.4 4.3 224.4 4.3 L 224.4 4.3 Z" paint-order="stroke fill markers" id="_9376C7A4-4EFF-4EF2-9F10-69EC7DF69CC6?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#ec7a08" d=" M 0 0 M 20.8 212.7 L 213.3 20.2 C 219.60000000000002 13.899999999999999 229.70000000000002 13.899999999999999 235.9 20.2 L 428.4 212.7 C 434.7 219 434.7 229.1 428.4 235.29999999999998 L 235.9 427.8 C 229.6 434.1 219.5 434.1 213.3 427.8 L 20.8 235.3 C 14.5 229.1 14.5 218.9 20.8 212.7 L 20.8 212.7 Z M 0 0 M 0 224 C 0 232.1 3.1 240.3 9.3 246.5 L 201.5 438.7 C 213.9 451.09999999999997 234.1 451.09999999999997 246.5 438.7 L 438.7 246.5 C 444.9 240.3 448 232.1 448 224 C 448 215.9 444.9 207.7 438.7 201.5 L 246.5 9.3 C 234.1 -3.0999999999999996 213.9 -3.0999999999999996 201.5 9.3 L 9.3 201.5 C 3.1 207.7 0 215.9 0 224 L 0 224 Z" paint-order="stroke fill markers" id="_9376C7A4-4EFF-4EF2-9F10-69EC7DF69CC6?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#ec7a08" d=" M 0 0 M 298.2 269.2 C 298.2 272.59999999999997 297.09999999999997 275.3 294.7 277.7 L 277.7 294.7 C 275.3 297.09999999999997 272.59999999999997 298.2 269.2 298.2 C 265.8 298.2 263.09999999999997 297.09999999999997 260.7 294.7 L 224 258 L 187.2 294.8 C 184.79999999999998 297.2 182.1 298.3 178.7 298.3 C 175.29999999999998 298.3 172.6 297.2 170.2 294.8 L 153.2 277.8 C 150.79999999999998 275.40000000000003 149.7 272.7 149.7 269.3 C 149.7 265.90000000000003 150.79999999999998 263.2 153.2 260.8 L 190 224 L 153.2 187.2 C 150.79999999999998 184.79999999999998 149.7 182 149.7 178.7 C 149.7 175.29999999999998 150.79999999999998 172.5 153.2 170.2 L 170.2 153.2 C 172.6 150.79999999999998 175.29999999999998 149.7 178.7 149.7 C 182.1 149.7 184.79999999999998 150.79999999999998 187.2 153.2 L 224 190 L 260.8 153.2 C 263.2 150.79999999999998 265.90000000000003 149.7 269.3 149.7 C 272.7 149.7 275.40000000000003 150.79999999999998 277.8 153.2 L 294.8 170.2 C 297.2 172.5 298.3 175.29999999999998 298.3 178.7 C 298.3 182 297.2 184.79999999999998 294.8 187.2 L 258 224 L 294.8 260.8 C 297.1 263.1 298.2 265.9 298.2 269.2 Z" paint-order="stroke fill markers" id="_9376C7A4-4EFF-4EF2-9F10-69EC7DF69CC6undefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,28,28)">
                        <g/></g>
                </g>
                <g id="_9E98052A-6BB7-420B-B9C1-090F9A9FA52B" transform="matrix(1,0,0,1,2223,326)" bpmn2nodeid="_9E98052A-6BB7-420B-B9C1-090F9A9FA52B">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.125,0,0,0.125,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fbefcf" d=" M 0 0 M 444 224 C 444 263.9 434.2 300.8 414.4 334.5 C 394.7 368.2 368 394.9 334.4 414.5 C 300.79999999999995 434.1 263.9 444 224 444 C 184.10000000000002 444 147.2 434.2 113.5 414.4 C 79.8 394.7 53.1 368 33.5 334.4 C 13.899999999999999 300.79999999999995 4 263.9 4 224 C 4 184.10000000000002 13.8 147.2 33.6 113.5 C 53.400000000000006 79.80000000000001 80.1 53.1 113.6 33.5 C 147.1 13.899999999999999 184.1 4 224 4 C 263.9 4 300.8 13.8 334.5 33.6 C 368.2 53.400000000000006 394.9 80.1 414.5 113.6 C 434.1 147.1 444 184.1 444 224 Z" paint-order="stroke fill markers" id="_9E98052A-6BB7-420B-B9C1-090F9A9FA52B?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224 408 C 122.5 408 40 325.5 40 224 C 40 122.5 122.5 40 224 40 C 325.5 40 408 122.5 408 224 C 408 325.5 325.5 408 224 408 Z M 0 0 M 224 56 C 131.4 56 56 131.4 56 224 C 56 316.6 131.4 392 224 392 C 316.6 392 392 316.6 392 224 C 392 131.39999999999998 316.6 56 224 56 Z M 0 0 M 224 16 C 252.1 16 279.3 21.5 305 32.3 C 329.8 42.8 352 57.8 371.1 76.9 C 390.20000000000005 96.00000000000001 405.20000000000005 118.30000000000001 415.70000000000005 143 C 426.50000000000006 168.6 432.00000000000006 195.9 432.00000000000006 224 C 432.00000000000006 252.1 426.50000000000006 279.3 415.70000000000005 305 C 405.20000000000005 329.8 390.20000000000005 352 371.1 371.1 C 352 390.20000000000005 329.70000000000005 405.20000000000005 305 415.70000000000005 C 279.4 426.50000000000006 252.1 432.00000000000006 224 432.00000000000006 C 195.9 432.00000000000006 168.7 426.50000000000006 143 415.70000000000005 C 118.2 405.20000000000005 96 390.20000000000005 76.9 371.1 C 57.80000000000001 352 42.8 329.7 32.3 305 C 21.5 279.3 16 252.1 16 224 C 16 195.9 21.5 168.7 32.3 143 C 42.8 118.2 57.8 96 76.9 76.9 C 96.00000000000001 57.80000000000001 118.30000000000001 42.800000000000004 143 32.300000000000004 C 168.7 21.5 195.9 16 224 16 M 224 0 C 100.3 0 0 100.3 0 224 C 0 347.7 100.3 448 224 448 C 347.7 448 448 347.7 448 224 C 448 100.30000000000001 347.7 0 224 0 L 224 0 Z" paint-order="stroke fill markers" id="_9E98052A-6BB7-420B-B9C1-090F9A9FA52B?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224.6 124.8 L 320.5 300.7 L 128.8 300.7 L 224.6 124.8 M 224.6 108.7 C 221.7 108.7 219 109.5 216.5 110.9 C 214 112.30000000000001 212.1 114.5 210.6 117 L 114.69999999999999 293 C 111.79999999999998 298.2 111.89999999999999 303.5 114.89999999999999 308.8 C 116.3 311.2 118.19999999999999 313.2 120.69999999999999 314.6 C 123.1 316 125.79999999999998 316.70000000000005 128.7 316.70000000000005 L 320.5 316.70000000000005 C 323.4 316.70000000000005 325.9 316.00000000000006 328.4 314.6 C 330.9 313.20000000000005 332.79999999999995 311.3 334.2 308.8 C 337.3 303.6 337.3 298.3 334.4 293 L 238.49999999999997 117 C 237.09999999999997 114.4 235.19999999999996 112.4 232.69999999999996 110.9 C 230.2 109.4 227.5 108.7 224.6 108.7 L 224.6 108.7 Z" paint-order="stroke fill markers" id="_9E98052A-6BB7-420B-B9C1-090F9A9FA52Bundefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,28,41)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_9E98052A-6BB7-420B-B9C1-090F9A9FA52Bundefined" stroke="none" font-weight="normal">LMTP1</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">LMTP1</text>
                        </g>
                    </g>
                </g>
                <g id="ParallelGateway_1" transform="matrix(1,0,0,1,892,43)" bpmn2nodeid="ParallelGateway_1">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.11160714285714286,0,0,0.11160714285714286,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fef4ea" d=" M 0 0 M 224.4 4.3 C 216.4 4.3 208.4 7.3 202.3 13.399999999999999 L 13.5 202.2 C 1.3000000000000007 214.39999999999998 1.3000000000000007 234.2 13.5 246.39999999999998 L 202.2 435.09999999999997 C 208.29999999999998 441.2 216.39999999999998 444.2 224.29999999999998 444.2 C 232.2 444.2 240.29999999999998 441.2 246.39999999999998 435.09999999999997 L 435.09999999999997 246.39999999999998 C 447.29999999999995 234.2 447.29999999999995 214.39999999999998 435.09999999999997 202.2 L 246.5 13.4 C 240.4 7.3 232.4 4.3 224.4 4.3 L 224.4 4.3 Z" paint-order="stroke fill markers" id="ParallelGateway_1?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#ec7a08" d=" M 0 0 M 20.8 212.7 L 213.3 20.2 C 219.60000000000002 13.899999999999999 229.70000000000002 13.899999999999999 235.9 20.2 L 428.4 212.7 C 434.7 219 434.7 229.1 428.4 235.29999999999998 L 235.9 427.8 C 229.6 434.1 219.5 434.1 213.3 427.8 L 20.8 235.3 C 14.5 229.1 14.5 218.9 20.8 212.7 L 20.8 212.7 Z M 0 0 M 0 224 C 0 232.1 3.1 240.3 9.3 246.5 L 201.5 438.7 C 213.9 451.09999999999997 234.1 451.09999999999997 246.5 438.7 L 438.7 246.5 C 444.9 240.3 448 232.1 448 224 C 448 215.9 444.9 207.7 438.7 201.5 L 246.5 9.3 C 234.1 -3.0999999999999996 213.9 -3.0999999999999996 201.5 9.3 L 9.3 201.5 C 3.1 207.7 0 215.9 0 224 L 0 224 Z" paint-order="stroke fill markers" id="ParallelGateway_1?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#ec7a08" d=" M 0 0 M 298.2 269.2 C 298.2 272.59999999999997 297.09999999999997 275.3 294.7 277.7 L 277.7 294.7 C 275.3 297.09999999999997 272.59999999999997 298.2 269.2 298.2 C 265.8 298.2 263.09999999999997 297.09999999999997 260.7 294.7 L 224 258 L 187.2 294.8 C 184.79999999999998 297.2 182.1 298.3 178.7 298.3 C 175.29999999999998 298.3 172.6 297.2 170.2 294.8 L 153.2 277.8 C 150.79999999999998 275.40000000000003 149.7 272.7 149.7 269.3 C 149.7 265.90000000000003 150.79999999999998 263.2 153.2 260.8 L 190 224 L 153.2 187.2 C 150.79999999999998 184.79999999999998 149.7 182 149.7 178.7 C 149.7 175.29999999999998 150.79999999999998 172.5 153.2 170.2 L 170.2 153.2 C 172.6 150.79999999999998 175.29999999999998 149.7 178.7 149.7 C 182.1 149.7 184.79999999999998 150.79999999999998 187.2 153.2 L 224 190 L 260.8 153.2 C 263.2 150.79999999999998 265.90000000000003 149.7 269.3 149.7 C 272.7 149.7 275.40000000000003 150.79999999999998 277.8 153.2 L 294.8 170.2 C 297.2 172.5 298.3 175.29999999999998 298.3 178.7 C 298.3 182 297.2 184.79999999999998 294.8 187.2 L 258 224 L 294.8 260.8 C 297.1 263.1 298.2 265.9 298.2 269.2 Z" paint-order="stroke fill markers" id="ParallelGateway_1undefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,25,17.5)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="ParallelGateway_1undefined" stroke="none" font-weight="normal">Valid?</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Valid?</text>
                        </g>
                    </g>
                </g>
                <g id="InclusiveGateway_1" transform="matrix(1,0,0,1,268,43)" bpmn2nodeid="InclusiveGateway_1">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.11160714285714286,0,0,0.11160714285714286,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#C0C0C0" d=" M 0 0 M 224.4 4.3 C 216.4 4.3 208.4 7.3 202.3 13.399999999999999 L 13.5 202.2 C 1.3000000000000007 214.39999999999998 1.3000000000000007 234.2 13.5 246.39999999999998 L 202.2 435.09999999999997 C 208.29999999999998 441.2 216.39999999999998 444.2 224.29999999999998 444.2 C 232.2 444.2 240.29999999999998 441.2 246.39999999999998 435.09999999999997 L 435.09999999999997 246.39999999999998 C 447.29999999999995 234.2 447.29999999999995 214.39999999999998 435.09999999999997 202.2 L 246.5 13.4 C 240.4 7.3 232.4 4.3 224.4 4.3 L 224.4 4.3 Z" paint-order="stroke fill markers" id="InclusiveGateway_1?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#030303" d=" M 0 0 M 20.8 212.7 L 213.3 20.2 C 219.60000000000002 13.899999999999999 229.70000000000002 13.899999999999999 235.9 20.2 L 428.4 212.7 C 434.7 219 434.7 229.1 428.4 235.29999999999998 L 235.9 427.8 C 229.6 434.1 219.5 434.1 213.3 427.8 L 20.8 235.3 C 14.5 229.1 14.5 218.9 20.8 212.7 L 20.8 212.7 Z M 0 0 M 0 224 C 0 232.1 3.1 240.3 9.3 246.5 L 201.5 438.7 C 213.9 451.09999999999997 234.1 451.09999999999997 246.5 438.7 L 438.7 246.5 C 444.9 240.3 448 232.1 448 224 C 448 215.9 444.9 207.7 438.7 201.5 L 246.5 9.3 C 234.1 -3.0999999999999996 213.9 -3.0999999999999996 201.5 9.3 L 9.3 201.5 C 3.1 207.7 0 215.9 0 224 L 0 224 Z" paint-order="stroke fill markers" id="InclusiveGateway_1?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#ec7a08" d=" M 0 0 M 224 127.9 C 249.6 127.9 273.8 137.9 291.9 156 C 310 174.2 320 198.3 320 223.9 C 320 249.5 310 273.6 291.9 291.8 C 273.79999999999995 309.90000000000003 249.7 319.90000000000003 223.99999999999997 319.90000000000003 C 198.29999999999995 319.90000000000003 174.2 309.90000000000003 156.09999999999997 291.8 C 138 273.7 128 249.6 128 223.9 C 128 198.20000000000002 138 174.10000000000002 156.1 156 C 174.2 137.89999999999998 198.4 127.9 224 127.9 M 224 111.9 C 162.1 111.9 112 162 112 223.9 C 112 285.8 162.1 335.9 224 335.9 C 285.9 335.9 336 285.79999999999995 336 223.89999999999998 C 336 162 285.9 111.9 224 111.9 L 224 111.9 Z" paint-order="stroke fill markers" id="InclusiveGateway_1undefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,25,2.5)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Inclusive</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Gateway</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="InclusiveGateway_1undefined" stroke="none" font-weight="normal">1</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Inclusive</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">Gateway</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">1</text>
                        </g>
                    </g>
                </g>
                <g id="_F5812F42-5153-4055-BB25-ED0AD151CC37" transform="matrix(1,0,0,1,1664,323)" bpmn2nodeid="_F5812F42-5153-4055-BB25-ED0AD151CC37">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#ffffff" d=" M 2 0 L 154 0 L 154 0 A 2 2 0 0 1 156 2 L 156 67 L 156 67 A 2 2 0 0 1 154 69 L 2 69 L 2 69 A 2 2 0 0 1 0 67 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="_F5812F42-5153-4055-BB25-ED0AD151CC37?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="_F5812F42-5153-4055-BB25-ED0AD151CC37?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 154 0 L 154 0 A 2 2 0 0 1 156 2 L 156 67 L 156 67 A 2 2 0 0 1 154 69 L 2 69 L 2 69 A 2 2 0 0 1 0 67 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="_F5812F42-5153-4055-BB25-ED0AD151CC37undefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,78,-3)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Set</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">loss</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">mit</text>
                            <text x="0" font-size="12pt" y="57" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">closing</text>
                            <text x="0" font-size="12pt" y="72" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_F5812F42-5153-4055-BB25-ED0AD151CC37undefined" stroke="none" font-weight="normal">date</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Set</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">loss</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">mit</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="57" font-size="12pt">closing</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="72" font-size="12pt">date</text>
                        </g>
                    </g>
                </g>
                <g id="_D4A5DBCA-DF91-4777-BED1-DB313DE2FBD9" transform="matrix(1,0,0,1,2083,206)" bpmn2nodeid="_D4A5DBCA-DF91-4777-BED1-DB313DE2FBD9">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#ffffff" d=" M 2 0 L 154 0 L 154 0 A 2 2 0 0 1 156 2 L 156 67 L 156 67 A 2 2 0 0 1 154 69 L 2 69 L 2 69 A 2 2 0 0 1 0 67 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="_D4A5DBCA-DF91-4777-BED1-DB313DE2FBD9?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="_D4A5DBCA-DF91-4777-BED1-DB313DE2FBD9?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 154 0 L 154 0 A 2 2 0 0 1 156 2 L 156 67 L 156 67 A 2 2 0 0 1 154 69 L 2 69 L 2 69 A 2 2 0 0 1 0 67 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="_D4A5DBCA-DF91-4777-BED1-DB313DE2FBD9undefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,78,12)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Setup</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">payment</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_D4A5DBCA-DF91-4777-BED1-DB313DE2FBD9undefined" stroke="none" font-weight="normal">plan</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Setup</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">payment</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">plan</text>
                        </g>
                    </g>
                </g>
                <g id="_E49565DF-17CE-4301-BBA6-D9DB3BD521C6" transform="matrix(1,0,0,1,1623,149)" bpmn2nodeid="_E49565DF-17CE-4301-BBA6-D9DB3BD521C6">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#ffffff" d=" M 2 0 L 152 0 L 152 0 A 2 2 0 0 1 154 2 L 154 100 L 154 100 A 2 2 0 0 1 152 102 L 2 102 L 2 102 A 2 2 0 0 1 0 100 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="_E49565DF-17CE-4301-BBA6-D9DB3BD521C6?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="_E49565DF-17CE-4301-BBA6-D9DB3BD521C6?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 152 0 L 152 0 A 2 2 0 0 1 154 2 L 154 100 L 154 100 A 2 2 0 0 1 152 102 L 2 102 L 2 102 A 2 2 0 0 1 0 100 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="_E49565DF-17CE-4301-BBA6-D9DB3BD521C6undefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,77,28.5)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Get</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">customer</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_E49565DF-17CE-4301-BBA6-D9DB3BD521C6undefined" stroke="none" font-weight="normal">decision</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Get</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">customer</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">decision</text>
                        </g>
                    </g>
                </g>
                <g id="UserTask_5" transform="matrix(1,0,0,1,1002,43)" bpmn2nodeid="UserTask_5">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#ffffff" d=" M 2 0 L 108 0 L 108 0 A 2 2 0 0 1 110 2 L 110 48 L 110 48 A 2 2 0 0 1 108 50 L 2 50 L 2 50 A 2 2 0 0 1 0 48 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="UserTask_5?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="UserTask_5?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 108 0 L 108 0 A 2 2 0 0 1 110 2 L 110 48 L 110 48 A 2 2 0 0 1 108 50 L 2 50 L 2 50 A 2 2 0 0 1 0 48 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="UserTask_5undefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,55,2.5)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Send</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">to</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="UserTask_5undefined" stroke="none" font-weight="normal">underwriting</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Send</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">to</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">underwriting</text>
                        </g>
                    </g>
                </g>
                <g id="IntermediateCatchEvent_1" transform="matrix(1,0,0,1,602,50)" bpmn2nodeid="IntermediateCatchEvent_1">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.08035714285714286,0,0,0.08035714285714286,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fbefcf" d=" M 0 0 M 444 224 C 444 263.9 434.2 300.8 414.4 334.5 C 394.7 368.2 368 394.9 334.4 414.5 C 300.79999999999995 434.1 263.9 444 224 444 C 184.10000000000002 444 147.2 434.2 113.5 414.4 C 79.8 394.7 53.1 368 33.5 334.4 C 13.899999999999999 300.79999999999995 4 263.9 4 224 C 4 184.10000000000002 13.8 147.2 33.6 113.5 C 53.400000000000006 79.80000000000001 80.1 53.1 113.6 33.5 C 147.1 13.899999999999999 184.1 4 224 4 C 263.9 4 300.8 13.8 334.5 33.6 C 368.2 53.400000000000006 394.9 80.1 414.5 113.6 C 434.1 147.1 444 184.1 444 224 Z" paint-order="stroke fill markers" id="IntermediateCatchEvent_1?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224 408 C 122.5 408 40 325.5 40 224 C 40 122.5 122.5 40 224 40 C 325.5 40 408 122.5 408 224 C 408 325.5 325.5 408 224 408 Z M 0 0 M 224 56 C 131.4 56 56 131.4 56 224 C 56 316.6 131.4 392 224 392 C 316.6 392 392 316.6 392 224 C 392 131.39999999999998 316.6 56 224 56 Z M 0 0 M 224 16 C 252.1 16 279.3 21.5 305 32.3 C 329.8 42.8 352 57.8 371.1 76.9 C 390.20000000000005 96.00000000000001 405.20000000000005 118.30000000000001 415.70000000000005 143 C 426.50000000000006 168.6 432.00000000000006 195.9 432.00000000000006 224 C 432.00000000000006 252.1 426.50000000000006 279.3 415.70000000000005 305 C 405.20000000000005 329.8 390.20000000000005 352 371.1 371.1 C 352 390.20000000000005 329.70000000000005 405.20000000000005 305 415.70000000000005 C 279.4 426.50000000000006 252.1 432.00000000000006 224 432.00000000000006 C 195.9 432.00000000000006 168.7 426.50000000000006 143 415.70000000000005 C 118.2 405.20000000000005 96 390.20000000000005 76.9 371.1 C 57.80000000000001 352 42.8 329.7 32.3 305 C 21.5 279.3 16 252.1 16 224 C 16 195.9 21.5 168.7 32.3 143 C 42.8 118.2 57.8 96 76.9 76.9 C 96.00000000000001 57.80000000000001 118.30000000000001 42.800000000000004 143 32.300000000000004 C 168.7 21.5 195.9 16 224 16 M 224 0 C 100.3 0 0 100.3 0 224 C 0 347.7 100.3 448 224 448 C 347.7 448 448 347.7 448 224 C 448 100.30000000000001 347.7 0 224 0 L 224 0 Z" paint-order="stroke fill markers" id="IntermediateCatchEvent_1?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224.6 124.8 L 320.5 300.7 L 128.8 300.7 L 224.6 124.8 M 224.6 108.7 C 221.7 108.7 219 109.5 216.5 110.9 C 214 112.30000000000001 212.1 114.5 210.6 117 L 114.69999999999999 293 C 111.79999999999998 298.2 111.89999999999999 303.5 114.89999999999999 308.8 C 116.3 311.2 118.19999999999999 313.2 120.69999999999999 314.6 C 123.1 316 125.79999999999998 316.70000000000005 128.7 316.70000000000005 L 320.5 316.70000000000005 C 323.4 316.70000000000005 325.9 316.00000000000006 328.4 314.6 C 330.9 313.20000000000005 332.79999999999995 311.3 334.2 308.8 C 337.3 303.6 337.3 298.3 334.4 293 L 238.49999999999997 117 C 237.09999999999997 114.4 235.19999999999996 112.4 232.69999999999996 110.9 C 230.2 109.4 227.5 108.7 224.6 108.7 L 224.6 108.7 Z" paint-order="stroke fill markers" id="IntermediateCatchEvent_1undefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,18,21)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="IntermediateCatchEvent_1undefined" stroke="none" font-weight="normal">LMPR</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">LMPR</text>
                        </g>
                    </g>
                </g>
                <g id="UserTask_4" transform="matrix(1,0,0,1,692,33)" bpmn2nodeid="UserTask_4">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#ffffff" d=" M 2 0 L 134 0 L 134 0 A 2 2 0 0 1 136 2 L 136 67 L 136 67 A 2 2 0 0 1 134 69 L 2 69 L 2 69 A 2 2 0 0 1 0 67 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="UserTask_4?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="UserTask_4?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 134 0 L 134 0 A 2 2 0 0 1 136 2 L 136 67 L 136 67 A 2 2 0 0 1 134 69 L 2 69 L 2 69 A 2 2 0 0 1 0 67 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="UserTask_4undefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,68,4.5)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Validate</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">loss</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">mitigation</text>
                            <text x="0" font-size="12pt" y="57" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="UserTask_4undefined" stroke="none" font-weight="normal">package</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Validate</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">loss</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">mitigation</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="57" font-size="12pt">package</text>
                        </g>
                    </g>
                </g>
                <g id="UserTask_1" transform="matrix(1,0,0,1,118,43)" bpmn2nodeid="UserTask_1">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#C0C0C0" d=" M 2 0 L 108 0 L 108 0 A 2 2 0 0 1 110 2 L 110 48 L 110 48 A 2 2 0 0 1 108 50 L 2 50 L 2 50 A 2 2 0 0 1 0 48 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="UserTask_1?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="UserTask_1?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 108 0 L 108 0 A 2 2 0 0 1 110 2 L 110 48 L 110 48 A 2 2 0 0 1 108 50 L 2 50 L 2 50 A 2 2 0 0 1 0 48 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#030303" stroke-width="2" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="UserTask_1undefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,55,2.5)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Contact</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">with</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="UserTask_1undefined" stroke="none" font-weight="normal">customer</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Contact</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">with</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">customer</text>
                        </g>
                    </g>
                </g>
                <g id="UserTask_2" transform="matrix(1,0,0,1,388,34)" bpmn2nodeid="UserTask_2">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#ffffff" d=" M 2 0 L 134 0 L 134 0 A 2 2 0 0 1 136 2 L 136 66 L 136 66 A 2 2 0 0 1 134 68 L 2 68 L 2 68 A 2 2 0 0 1 0 66 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="UserTask_2?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="UserTask_2?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 134 0 L 134 0 A 2 2 0 0 1 136 2 L 136 66 L 136 66 A 2 2 0 0 1 134 68 L 2 68 L 2 68 A 2 2 0 0 1 0 66 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#FF0000" stroke-width="2" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="UserTask_2undefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,68,4)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Send</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">loss</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">mitigation</text>
                            <text x="0" font-size="12pt" y="57" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="UserTask_2undefined" stroke="none" font-weight="normal">package</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Send</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">loss</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">mitigation</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="57" font-size="12pt">package</text>
                        </g>
                    </g>
                </g>
                <g id="_606D3DF0-25CE-413B-976B-07E0C201FE15" transform="matrix(1,0,0,1,2377,461)" bpmn2nodeid="_606D3DF0-25CE-413B-976B-07E0C201FE15">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.125,0,0,0.125,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fbefcf" d=" M 0 0 M 444 224 C 444 263.9 434.2 300.8 414.4 334.5 C 394.7 368.2 368 394.9 334.4 414.5 C 300.79999999999995 434.1 263.9 444 224 444 C 184.10000000000002 444 147.2 434.2 113.5 414.4 C 79.8 394.7 53.1 368 33.5 334.4 C 13.899999999999999 300.79999999999995 4 263.9 4 224 C 4 184.10000000000002 13.8 147.2 33.6 113.5 C 53.400000000000006 79.80000000000001 80.1 53.1 113.6 33.5 C 147.1 13.899999999999999 184.1 4 224 4 C 263.9 4 300.8 13.8 334.5 33.6 C 368.2 53.400000000000006 394.9 80.1 414.5 113.6 C 434.1 147.1 444 184.1 444 224 Z" paint-order="stroke fill markers" id="_606D3DF0-25CE-413B-976B-07E0C201FE15?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224 408 C 122.5 408 40 325.5 40 224 C 40 122.5 122.5 40 224 40 C 325.5 40 408 122.5 408 224 C 408 325.5 325.5 408 224 408 Z M 0 0 M 224 56 C 131.4 56 56 131.4 56 224 C 56 316.6 131.4 392 224 392 C 316.6 392 392 316.6 392 224 C 392 131.39999999999998 316.6 56 224 56 Z M 0 0 M 224 16 C 252.1 16 279.3 21.5 305 32.3 C 329.8 42.8 352 57.8 371.1 76.9 C 390.20000000000005 96.00000000000001 405.20000000000005 118.30000000000001 415.70000000000005 143 C 426.50000000000006 168.6 432.00000000000006 195.9 432.00000000000006 224 C 432.00000000000006 252.1 426.50000000000006 279.3 415.70000000000005 305 C 405.20000000000005 329.8 390.20000000000005 352 371.1 371.1 C 352 390.20000000000005 329.70000000000005 405.20000000000005 305 415.70000000000005 C 279.4 426.50000000000006 252.1 432.00000000000006 224 432.00000000000006 C 195.9 432.00000000000006 168.7 426.50000000000006 143 415.70000000000005 C 118.2 405.20000000000005 96 390.20000000000005 76.9 371.1 C 57.80000000000001 352 42.8 329.7 32.3 305 C 21.5 279.3 16 252.1 16 224 C 16 195.9 21.5 168.7 32.3 143 C 42.8 118.2 57.8 96 76.9 76.9 C 96.00000000000001 57.80000000000001 118.30000000000001 42.800000000000004 143 32.300000000000004 C 168.7 21.5 195.9 16 224 16 M 224 0 C 100.3 0 0 100.3 0 224 C 0 347.7 100.3 448 224 448 C 347.7 448 448 347.7 448 224 C 448 100.30000000000001 347.7 0 224 0 L 224 0 Z" paint-order="stroke fill markers" id="_606D3DF0-25CE-413B-976B-07E0C201FE15?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224.6 124.8 L 320.5 300.7 L 128.8 300.7 L 224.6 124.8 M 224.6 108.7 C 221.7 108.7 219 109.5 216.5 110.9 C 214 112.30000000000001 212.1 114.5 210.6 117 L 114.69999999999999 293 C 111.79999999999998 298.2 111.89999999999999 303.5 114.89999999999999 308.8 C 116.3 311.2 118.19999999999999 313.2 120.69999999999999 314.6 C 123.1 316 125.79999999999998 316.70000000000005 128.7 316.70000000000005 L 320.5 316.70000000000005 C 323.4 316.70000000000005 325.9 316.00000000000006 328.4 314.6 C 330.9 313.20000000000005 332.79999999999995 311.3 334.2 308.8 C 337.3 303.6 337.3 298.3 334.4 293 L 238.49999999999997 117 C 237.09999999999997 114.4 235.19999999999996 112.4 232.69999999999996 110.9 C 230.2 109.4 227.5 108.7 224.6 108.7 L 224.6 108.7 Z" paint-order="stroke fill markers" id="_606D3DF0-25CE-413B-976B-07E0C201FE15undefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,28,41)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_606D3DF0-25CE-413B-976B-07E0C201FE15undefined" stroke="none" font-weight="normal">PR2</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">PR2</text>
                        </g>
                    </g>
                </g>
                <g id="_B704C88F-904E-43E8-9AFC-64005D0B2217" transform="matrix(1,0,0,1,1182,40)" bpmn2nodeid="_B704C88F-904E-43E8-9AFC-64005D0B2217">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.125,0,0,0.125,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fbefcf" d=" M 0 0 M 444 224 C 444 263.9 434.2 300.8 414.4 334.5 C 394.7 368.2 368 394.9 334.4 414.5 C 300.79999999999995 434.1 263.9 444 224 444 C 184.10000000000002 444 147.2 434.2 113.5 414.4 C 79.8 394.7 53.1 368 33.5 334.4 C 13.899999999999999 300.79999999999995 4 263.9 4 224 C 4 184.10000000000002 13.8 147.2 33.6 113.5 C 53.400000000000006 79.80000000000001 80.1 53.1 113.6 33.5 C 147.1 13.899999999999999 184.1 4 224 4 C 263.9 4 300.8 13.8 334.5 33.6 C 368.2 53.400000000000006 394.9 80.1 414.5 113.6 C 434.1 147.1 444 184.1 444 224 Z" paint-order="stroke fill markers" id="_B704C88F-904E-43E8-9AFC-64005D0B2217?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224 408 C 122.5 408 40 325.5 40 224 C 40 122.5 122.5 40 224 40 C 325.5 40 408 122.5 408 224 C 408 325.5 325.5 408 224 408 Z M 0 0 M 224 56 C 131.4 56 56 131.4 56 224 C 56 316.6 131.4 392 224 392 C 316.6 392 392 316.6 392 224 C 392 131.39999999999998 316.6 56 224 56 Z M 0 0 M 224 16 C 252.1 16 279.3 21.5 305 32.3 C 329.8 42.8 352 57.8 371.1 76.9 C 390.20000000000005 96.00000000000001 405.20000000000005 118.30000000000001 415.70000000000005 143 C 426.50000000000006 168.6 432.00000000000006 195.9 432.00000000000006 224 C 432.00000000000006 252.1 426.50000000000006 279.3 415.70000000000005 305 C 405.20000000000005 329.8 390.20000000000005 352 371.1 371.1 C 352 390.20000000000005 329.70000000000005 405.20000000000005 305 415.70000000000005 C 279.4 426.50000000000006 252.1 432.00000000000006 224 432.00000000000006 C 195.9 432.00000000000006 168.7 426.50000000000006 143 415.70000000000005 C 118.2 405.20000000000005 96 390.20000000000005 76.9 371.1 C 57.80000000000001 352 42.8 329.7 32.3 305 C 21.5 279.3 16 252.1 16 224 C 16 195.9 21.5 168.7 32.3 143 C 42.8 118.2 57.8 96 76.9 76.9 C 96.00000000000001 57.80000000000001 118.30000000000001 42.800000000000004 143 32.300000000000004 C 168.7 21.5 195.9 16 224 16 M 224 0 C 100.3 0 0 100.3 0 224 C 0 347.7 100.3 448 224 448 C 347.7 448 448 347.7 448 224 C 448 100.30000000000001 347.7 0 224 0 L 224 0 Z" paint-order="stroke fill markers" id="_B704C88F-904E-43E8-9AFC-64005D0B2217?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224.6 124.8 L 320.5 300.7 L 128.8 300.7 L 224.6 124.8 M 224.6 108.7 C 221.7 108.7 219 109.5 216.5 110.9 C 214 112.30000000000001 212.1 114.5 210.6 117 L 114.69999999999999 293 C 111.79999999999998 298.2 111.89999999999999 303.5 114.89999999999999 308.8 C 116.3 311.2 118.19999999999999 313.2 120.69999999999999 314.6 C 123.1 316 125.79999999999998 316.70000000000005 128.7 316.70000000000005 L 320.5 316.70000000000005 C 323.4 316.70000000000005 325.9 316.00000000000006 328.4 314.6 C 330.9 313.20000000000005 332.79999999999995 311.3 334.2 308.8 C 337.3 303.6 337.3 298.3 334.4 293 L 238.49999999999997 117 C 237.09999999999997 114.4 235.19999999999996 112.4 232.69999999999996 110.9 C 230.2 109.4 227.5 108.7 224.6 108.7 L 224.6 108.7 Z" paint-order="stroke fill markers" id="_B704C88F-904E-43E8-9AFC-64005D0B2217undefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,28,41)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_B704C88F-904E-43E8-9AFC-64005D0B2217undefined" stroke="none" font-weight="normal">UWRSLT</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">UWRSLT</text>
                        </g>
                    </g>
                </g>
                <g id="_A0565F0E-4B4E-4C8B-9C2D-46C171140D95" transform="matrix(1,0,0,1,874.5,314)" bpmn2nodeid="_A0565F0E-4B4E-4C8B-9C2D-46C171140D95">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#ffffff" d=" M 2 0 L 181 0 L 181 0 A 2 2 0 0 1 183 2 L 183 84 L 183 84 A 2 2 0 0 1 181 86 L 2 86 L 2 86 A 2 2 0 0 1 0 84 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="_A0565F0E-4B4E-4C8B-9C2D-46C171140D95?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="_A0565F0E-4B4E-4C8B-9C2D-46C171140D95?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 181 0 L 181 0 A 2 2 0 0 1 183 2 L 183 84 L 183 84 A 2 2 0 0 1 181 86 L 2 86 L 2 86 A 2 2 0 0 1 0 84 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="_A0565F0E-4B4E-4C8B-9C2D-46C171140D95undefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,91.5,5.5)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Book</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">loss</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">mit</text>
                            <text x="0" font-size="12pt" y="57" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">to</text>
                            <text x="0" font-size="12pt" y="72" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_A0565F0E-4B4E-4C8B-9C2D-46C171140D95undefined" stroke="none" font-weight="normal">system</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Book</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">loss</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">mit</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="57" font-size="12pt">to</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="72" font-size="12pt">system</text>
                        </g>
                    </g>
                </g>
                <g id="_64FB4BDE-01F7-442D-A854-15373B8206A3" transform="matrix(1,0,0,1,1414,323)" bpmn2nodeid="_64FB4BDE-01F7-442D-A854-15373B8206A3">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#ffffff" d=" M 2 0 L 154 0 L 154 0 A 2 2 0 0 1 156 2 L 156 67 L 156 67 A 2 2 0 0 1 154 69 L 2 69 L 2 69 A 2 2 0 0 1 0 67 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="_64FB4BDE-01F7-442D-A854-15373B8206A3?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="_64FB4BDE-01F7-442D-A854-15373B8206A3?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 154 0 L 154 0 A 2 2 0 0 1 156 2 L 156 67 L 156 67 A 2 2 0 0 1 154 69 L 2 69 L 2 69 A 2 2 0 0 1 0 67 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="_64FB4BDE-01F7-442D-A854-15373B8206A3undefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,78,4.5)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Send</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">loss</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">mit</text>
                            <text x="0" font-size="12pt" y="57" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_64FB4BDE-01F7-442D-A854-15373B8206A3undefined" stroke="none" font-weight="normal">agreement</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Send</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">loss</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">mit</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="57" font-size="12pt">agreement</text>
                        </g>
                    </g>
                </g>
                <g id="_2DCF31AB-F59A-4DCC-88DD-15689DB5CF4C" transform="matrix(1,0,0,1,1319,17)" bpmn2nodeid="_2DCF31AB-F59A-4DCC-88DD-15689DB5CF4C">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#ffffff" d=" M 2 0 L 152 0 L 152 0 A 2 2 0 0 1 154 2 L 154 100 L 154 100 A 2 2 0 0 1 152 102 L 2 102 L 2 102 A 2 2 0 0 1 0 100 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="_2DCF31AB-F59A-4DCC-88DD-15689DB5CF4C?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="_2DCF31AB-F59A-4DCC-88DD-15689DB5CF4C?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 152 0 L 152 0 A 2 2 0 0 1 154 2 L 154 100 L 154 100 A 2 2 0 0 1 152 102 L 2 102 L 2 102 A 2 2 0 0 1 0 100 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="_2DCF31AB-F59A-4DCC-88DD-15689DB5CF4Cundefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,77,28.5)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Process</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">underwriting</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_2DCF31AB-F59A-4DCC-88DD-15689DB5CF4Cundefined" stroke="none" font-weight="normal">result</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Process</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">underwriting</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">result</text>
                        </g>
                    </g>
                </g>
                <g id="_3A5EA5D8-CEB6-4AF7-B8B2-2CB0D471FB73" transform="matrix(1,0,0,1,1923,66)" bpmn2nodeid="_3A5EA5D8-CEB6-4AF7-B8B2-2CB0D471FB73">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.125,0,0,0.125,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fef4ea" d=" M 0 0 M 224.4 4.3 C 216.4 4.3 208.4 7.3 202.3 13.399999999999999 L 13.5 202.2 C 1.3000000000000007 214.39999999999998 1.3000000000000007 234.2 13.5 246.39999999999998 L 202.2 435.09999999999997 C 208.29999999999998 441.2 216.39999999999998 444.2 224.29999999999998 444.2 C 232.2 444.2 240.29999999999998 441.2 246.39999999999998 435.09999999999997 L 435.09999999999997 246.39999999999998 C 447.29999999999995 234.2 447.29999999999995 214.39999999999998 435.09999999999997 202.2 L 246.5 13.4 C 240.4 7.3 232.4 4.3 224.4 4.3 L 224.4 4.3 Z" paint-order="stroke fill markers" id="_3A5EA5D8-CEB6-4AF7-B8B2-2CB0D471FB73?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#ec7a08" d=" M 0 0 M 20.8 212.7 L 213.3 20.2 C 219.60000000000002 13.899999999999999 229.70000000000002 13.899999999999999 235.9 20.2 L 428.4 212.7 C 434.7 219 434.7 229.1 428.4 235.29999999999998 L 235.9 427.8 C 229.6 434.1 219.5 434.1 213.3 427.8 L 20.8 235.3 C 14.5 229.1 14.5 218.9 20.8 212.7 L 20.8 212.7 Z M 0 0 M 0 224 C 0 232.1 3.1 240.3 9.3 246.5 L 201.5 438.7 C 213.9 451.09999999999997 234.1 451.09999999999997 246.5 438.7 L 438.7 246.5 C 444.9 240.3 448 232.1 448 224 C 448 215.9 444.9 207.7 438.7 201.5 L 246.5 9.3 C 234.1 -3.0999999999999996 213.9 -3.0999999999999996 201.5 9.3 L 9.3 201.5 C 3.1 207.7 0 215.9 0 224 L 0 224 Z" paint-order="stroke fill markers" id="_3A5EA5D8-CEB6-4AF7-B8B2-2CB0D471FB73?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#ec7a08" d=" M 0 0 M 298.2 269.2 C 298.2 272.59999999999997 297.09999999999997 275.3 294.7 277.7 L 277.7 294.7 C 275.3 297.09999999999997 272.59999999999997 298.2 269.2 298.2 C 265.8 298.2 263.09999999999997 297.09999999999997 260.7 294.7 L 224 258 L 187.2 294.8 C 184.79999999999998 297.2 182.1 298.3 178.7 298.3 C 175.29999999999998 298.3 172.6 297.2 170.2 294.8 L 153.2 277.8 C 150.79999999999998 275.40000000000003 149.7 272.7 149.7 269.3 C 149.7 265.90000000000003 150.79999999999998 263.2 153.2 260.8 L 190 224 L 153.2 187.2 C 150.79999999999998 184.79999999999998 149.7 182 149.7 178.7 C 149.7 175.29999999999998 150.79999999999998 172.5 153.2 170.2 L 170.2 153.2 C 172.6 150.79999999999998 175.29999999999998 149.7 178.7 149.7 C 182.1 149.7 184.79999999999998 150.79999999999998 187.2 153.2 L 224 190 L 260.8 153.2 C 263.2 150.79999999999998 265.90000000000003 149.7 269.3 149.7 C 272.7 149.7 275.40000000000003 150.79999999999998 277.8 153.2 L 294.8 170.2 C 297.2 172.5 298.3 175.29999999999998 298.3 178.7 C 298.3 182 297.2 184.79999999999998 294.8 187.2 L 258 224 L 294.8 260.8 C 297.1 263.1 298.2 265.9 298.2 269.2 Z" paint-order="stroke fill markers" id="_3A5EA5D8-CEB6-4AF7-B8B2-2CB0D471FB73undefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,28,28)">
                        <g/></g>
                </g>
                <g id="_B28C14ED-25CB-4361-AE20-DCADBB0FEA71" transform="matrix(1,0,0,1,2223,66)" bpmn2nodeid="_B28C14ED-25CB-4361-AE20-DCADBB0FEA71">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.125,0,0,0.125,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fef4ea" d=" M 0 0 M 224.4 4.3 C 216.4 4.3 208.4 7.3 202.3 13.399999999999999 L 13.5 202.2 C 1.3000000000000007 214.39999999999998 1.3000000000000007 234.2 13.5 246.39999999999998 L 202.2 435.09999999999997 C 208.29999999999998 441.2 216.39999999999998 444.2 224.29999999999998 444.2 C 232.2 444.2 240.29999999999998 441.2 246.39999999999998 435.09999999999997 L 435.09999999999997 246.39999999999998 C 447.29999999999995 234.2 447.29999999999995 214.39999999999998 435.09999999999997 202.2 L 246.5 13.4 C 240.4 7.3 232.4 4.3 224.4 4.3 L 224.4 4.3 Z" paint-order="stroke fill markers" id="_B28C14ED-25CB-4361-AE20-DCADBB0FEA71?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#ec7a08" d=" M 0 0 M 20.8 212.7 L 213.3 20.2 C 219.60000000000002 13.899999999999999 229.70000000000002 13.899999999999999 235.9 20.2 L 428.4 212.7 C 434.7 219 434.7 229.1 428.4 235.29999999999998 L 235.9 427.8 C 229.6 434.1 219.5 434.1 213.3 427.8 L 20.8 235.3 C 14.5 229.1 14.5 218.9 20.8 212.7 L 20.8 212.7 Z M 0 0 M 0 224 C 0 232.1 3.1 240.3 9.3 246.5 L 201.5 438.7 C 213.9 451.09999999999997 234.1 451.09999999999997 246.5 438.7 L 438.7 246.5 C 444.9 240.3 448 232.1 448 224 C 448 215.9 444.9 207.7 438.7 201.5 L 246.5 9.3 C 234.1 -3.0999999999999996 213.9 -3.0999999999999996 201.5 9.3 L 9.3 201.5 C 3.1 207.7 0 215.9 0 224 L 0 224 Z" paint-order="stroke fill markers" id="_B28C14ED-25CB-4361-AE20-DCADBB0FEA71?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#ec7a08" d=" M 0 0 M 224 127.9 C 249.6 127.9 273.8 137.9 291.9 156 C 310 174.2 320 198.3 320 223.9 C 320 249.5 310 273.6 291.9 291.8 C 273.79999999999995 309.90000000000003 249.7 319.90000000000003 223.99999999999997 319.90000000000003 C 198.29999999999995 319.90000000000003 174.2 309.90000000000003 156.09999999999997 291.8 C 138 273.7 128 249.6 128 223.9 C 128 198.20000000000002 138 174.10000000000002 156.1 156 C 174.2 137.89999999999998 198.4 127.9 224 127.9 M 224 111.9 C 162.1 111.9 112 162 112 223.9 C 112 285.8 162.1 335.9 224 335.9 C 285.9 335.9 336 285.79999999999995 336 223.89999999999998 C 336 162 285.9 111.9 224 111.9 L 224 111.9 Z" paint-order="stroke fill markers" id="_B28C14ED-25CB-4361-AE20-DCADBB0FEA71undefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,28,28)">
                        <g/></g>
                </g>
                <g id="_835F454B-1A08-4878-8AE5-43E841316689" transform="matrix(1,0,0,1,1910,329)" bpmn2nodeid="_835F454B-1A08-4878-8AE5-43E841316689">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.125,0,0,0.125,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fbefcf" d=" M 0 0 M 444 224 C 444 263.9 434.2 300.8 414.4 334.5 C 394.7 368.2 368 394.9 334.4 414.5 C 300.79999999999995 434.1 263.9 444 224 444 C 184.10000000000002 444 147.2 434.2 113.5 414.4 C 79.8 394.7 53.1 368 33.5 334.4 C 13.899999999999999 300.79999999999995 4 263.9 4 224 C 4 184.10000000000002 13.8 147.2 33.6 113.5 C 53.400000000000006 79.80000000000001 80.1 53.1 113.6 33.5 C 147.1 13.899999999999999 184.1 4 224 4 C 263.9 4 300.8 13.8 334.5 33.6 C 368.2 53.400000000000006 394.9 80.1 414.5 113.6 C 434.1 147.1 444 184.1 444 224 Z" paint-order="stroke fill markers" id="_835F454B-1A08-4878-8AE5-43E841316689?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224 408 C 122.5 408 40 325.5 40 224 C 40 122.5 122.5 40 224 40 C 325.5 40 408 122.5 408 224 C 408 325.5 325.5 408 224 408 Z M 0 0 M 224 56 C 131.4 56 56 131.4 56 224 C 56 316.6 131.4 392 224 392 C 316.6 392 392 316.6 392 224 C 392 131.39999999999998 316.6 56 224 56 Z M 0 0 M 224 16 C 252.1 16 279.3 21.5 305 32.3 C 329.8 42.8 352 57.8 371.1 76.9 C 390.20000000000005 96.00000000000001 405.20000000000005 118.30000000000001 415.70000000000005 143 C 426.50000000000006 168.6 432.00000000000006 195.9 432.00000000000006 224 C 432.00000000000006 252.1 426.50000000000006 279.3 415.70000000000005 305 C 405.20000000000005 329.8 390.20000000000005 352 371.1 371.1 C 352 390.20000000000005 329.70000000000005 405.20000000000005 305 415.70000000000005 C 279.4 426.50000000000006 252.1 432.00000000000006 224 432.00000000000006 C 195.9 432.00000000000006 168.7 426.50000000000006 143 415.70000000000005 C 118.2 405.20000000000005 96 390.20000000000005 76.9 371.1 C 57.80000000000001 352 42.8 329.7 32.3 305 C 21.5 279.3 16 252.1 16 224 C 16 195.9 21.5 168.7 32.3 143 C 42.8 118.2 57.8 96 76.9 76.9 C 96.00000000000001 57.80000000000001 118.30000000000001 42.800000000000004 143 32.300000000000004 C 168.7 21.5 195.9 16 224 16 M 224 0 C 100.3 0 0 100.3 0 224 C 0 347.7 100.3 448 224 448 C 347.7 448 448 347.7 448 224 C 448 100.30000000000001 347.7 0 224 0 L 224 0 Z" paint-order="stroke fill markers" id="_835F454B-1A08-4878-8AE5-43E841316689?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224.6 124.8 L 320.5 300.7 L 128.8 300.7 L 224.6 124.8 M 224.6 108.7 C 221.7 108.7 219 109.5 216.5 110.9 C 214 112.30000000000001 212.1 114.5 210.6 117 L 114.69999999999999 293 C 111.79999999999998 298.2 111.89999999999999 303.5 114.89999999999999 308.8 C 116.3 311.2 118.19999999999999 313.2 120.69999999999999 314.6 C 123.1 316 125.79999999999998 316.70000000000005 128.7 316.70000000000005 L 320.5 316.70000000000005 C 323.4 316.70000000000005 325.9 316.00000000000006 328.4 314.6 C 330.9 313.20000000000005 332.79999999999995 311.3 334.2 308.8 C 337.3 303.6 337.3 298.3 334.4 293 L 238.49999999999997 117 C 237.09999999999997 114.4 235.19999999999996 112.4 232.69999999999996 110.9 C 230.2 109.4 227.5 108.7 224.6 108.7 L 224.6 108.7 Z" paint-order="stroke fill markers" id="_835F454B-1A08-4878-8AE5-43E841316689undefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,28,41)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_835F454B-1A08-4878-8AE5-43E841316689undefined" stroke="none" font-weight="normal">LMTP3</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">LMTP3</text>
                        </g>
                    </g>
                </g>
                <g id="_6FDFAF68-8B55-4CC8-841C-8E88154BC98A" transform="matrix(1,0,0,1,932,463)" bpmn2nodeid="_6FDFAF68-8B55-4CC8-841C-8E88154BC98A">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.125,0,0,0.125,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fbefcf" d=" M 0 0 M 444 224 C 444 263.9 434.2 300.8 414.4 334.5 C 394.7 368.2 368 394.9 334.4 414.5 C 300.79999999999995 434.1 263.9 444 224 444 C 184.10000000000002 444 147.2 434.2 113.5 414.4 C 79.8 394.7 53.1 368 33.5 334.4 C 13.899999999999999 300.79999999999995 4 263.9 4 224 C 4 184.10000000000002 13.8 147.2 33.6 113.5 C 53.400000000000006 79.80000000000001 80.1 53.1 113.6 33.5 C 147.1 13.899999999999999 184.1 4 224 4 C 263.9 4 300.8 13.8 334.5 33.6 C 368.2 53.400000000000006 394.9 80.1 414.5 113.6 C 434.1 147.1 444 184.1 444 224 Z" paint-order="stroke fill markers" id="_6FDFAF68-8B55-4CC8-841C-8E88154BC98A?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224 408 C 122.5 408 40 325.5 40 224 C 40 122.5 122.5 40 224 40 C 325.5 40 408 122.5 408 224 C 408 325.5 325.5 408 224 408 Z M 0 0 M 224 56 C 131.4 56 56 131.4 56 224 C 56 316.6 131.4 392 224 392 C 316.6 392 392 316.6 392 224 C 392 131.39999999999998 316.6 56 224 56 Z M 0 0 M 224 16 C 252.1 16 279.3 21.5 305 32.3 C 329.8 42.8 352 57.8 371.1 76.9 C 390.20000000000005 96.00000000000001 405.20000000000005 118.30000000000001 415.70000000000005 143 C 426.50000000000006 168.6 432.00000000000006 195.9 432.00000000000006 224 C 432.00000000000006 252.1 426.50000000000006 279.3 415.70000000000005 305 C 405.20000000000005 329.8 390.20000000000005 352 371.1 371.1 C 352 390.20000000000005 329.70000000000005 405.20000000000005 305 415.70000000000005 C 279.4 426.50000000000006 252.1 432.00000000000006 224 432.00000000000006 C 195.9 432.00000000000006 168.7 426.50000000000006 143 415.70000000000005 C 118.2 405.20000000000005 96 390.20000000000005 76.9 371.1 C 57.80000000000001 352 42.8 329.7 32.3 305 C 21.5 279.3 16 252.1 16 224 C 16 195.9 21.5 168.7 32.3 143 C 42.8 118.2 57.8 96 76.9 76.9 C 96.00000000000001 57.80000000000001 118.30000000000001 42.800000000000004 143 32.300000000000004 C 168.7 21.5 195.9 16 224 16 M 224 0 C 100.3 0 0 100.3 0 224 C 0 347.7 100.3 448 224 448 C 347.7 448 448 347.7 448 224 C 448 100.30000000000001 347.7 0 224 0 L 224 0 Z" paint-order="stroke fill markers" id="_6FDFAF68-8B55-4CC8-841C-8E88154BC98A?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224.6 124.8 L 320.5 300.7 L 128.8 300.7 L 224.6 124.8 M 224.6 108.7 C 221.7 108.7 219 109.5 216.5 110.9 C 214 112.30000000000001 212.1 114.5 210.6 117 L 114.69999999999999 293 C 111.79999999999998 298.2 111.89999999999999 303.5 114.89999999999999 308.8 C 116.3 311.2 118.19999999999999 313.2 120.69999999999999 314.6 C 123.1 316 125.79999999999998 316.70000000000005 128.7 316.70000000000005 L 320.5 316.70000000000005 C 323.4 316.70000000000005 325.9 316.00000000000006 328.4 314.6 C 330.9 313.20000000000005 332.79999999999995 311.3 334.2 308.8 C 337.3 303.6 337.3 298.3 334.4 293 L 238.49999999999997 117 C 237.09999999999997 114.4 235.19999999999996 112.4 232.69999999999996 110.9 C 230.2 109.4 227.5 108.7 224.6 108.7 L 224.6 108.7 Z" paint-order="stroke fill markers" id="_6FDFAF68-8B55-4CC8-841C-8E88154BC98Aundefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,28,41)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_6FDFAF68-8B55-4CC8-841C-8E88154BC98Aundefined" stroke="none" font-weight="normal">PR1</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">PR1</text>
                        </g>
                    </g>
                </g>
                <g id="EndEvent_1" transform="matrix(1,0,0,1,2362,33)" bpmn2nodeid="EndEvent_1">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.08035714285714286,0,0,0.08035714285714286,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fce7e7" d=" M 0 0 M 444 224 C 444 263.9 434.2 300.8 414.4 334.5 C 394.7 368.2 368 394.9 334.4 414.5 C 300.79999999999995 434.1 263.9 444 224 444 C 184.10000000000002 444 147.2 434.2 113.5 414.4 C 79.8 394.7 53.1 368 33.5 334.4 C 13.899999999999999 300.79999999999995 4 263.9 4 224 C 4 184.10000000000002 13.8 147.2 33.6 113.5 C 53.400000000000006 79.80000000000001 80.1 53.1 113.6 33.5 C 147.1 13.899999999999999 184.1 4 224 4 C 263.9 4 300.8 13.8 334.5 33.6 C 368.2 53.400000000000006 394.9 80.1 414.5 113.6 C 434.1 147.1 444 184.1 444 224 Z" paint-order="stroke fill markers" id="EndEvent_1?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#a30000" d=" M 0 0 M 224 0 C 100.3 0 0 100.3 0 224 C 0 347.7 100.3 448 224 448 C 347.7 448 448 347.7 448 224 C 448 100.30000000000001 347.7 0 224 0 Z M 0 0 M 224 400 C 126.8 400 48 321.2 48 224 C 48 126.80000000000001 126.8 48 224 48 C 321.2 48 400 126.8 400 224 C 400 321.2 321.2 400 224 400 Z" paint-order="stroke fill markers" id="EndEvent_1?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,18,-9)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">End</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Event</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="EndEvent_1undefined" stroke="none" font-weight="normal">1</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">End</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">Event</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">1</text>
                        </g>
                    </g>
                </g>
                <g id="_45D74F06-B593-4B51-9EC4-68444B37B46B" transform="matrix(1,0,0,1,2069,328)" bpmn2nodeid="_45D74F06-B593-4B51-9EC4-68444B37B46B">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.125,0,0,0.125,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#fbefcf" d=" M 0 0 M 444 224 C 444 263.9 434.2 300.8 414.4 334.5 C 394.7 368.2 368 394.9 334.4 414.5 C 300.79999999999995 434.1 263.9 444 224 444 C 184.10000000000002 444 147.2 434.2 113.5 414.4 C 79.8 394.7 53.1 368 33.5 334.4 C 13.899999999999999 300.79999999999995 4 263.9 4 224 C 4 184.10000000000002 13.8 147.2 33.6 113.5 C 53.400000000000006 79.80000000000001 80.1 53.1 113.6 33.5 C 147.1 13.899999999999999 184.1 4 224 4 C 263.9 4 300.8 13.8 334.5 33.6 C 368.2 53.400000000000006 394.9 80.1 414.5 113.6 C 434.1 147.1 444 184.1 444 224 Z" paint-order="stroke fill markers" id="_45D74F06-B593-4B51-9EC4-68444B37B46B?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224 408 C 122.5 408 40 325.5 40 224 C 40 122.5 122.5 40 224 40 C 325.5 40 408 122.5 408 224 C 408 325.5 325.5 408 224 408 Z M 0 0 M 224 56 C 131.4 56 56 131.4 56 224 C 56 316.6 131.4 392 224 392 C 316.6 392 392 316.6 392 224 C 392 131.39999999999998 316.6 56 224 56 Z M 0 0 M 224 16 C 252.1 16 279.3 21.5 305 32.3 C 329.8 42.8 352 57.8 371.1 76.9 C 390.20000000000005 96.00000000000001 405.20000000000005 118.30000000000001 415.70000000000005 143 C 426.50000000000006 168.6 432.00000000000006 195.9 432.00000000000006 224 C 432.00000000000006 252.1 426.50000000000006 279.3 415.70000000000005 305 C 405.20000000000005 329.8 390.20000000000005 352 371.1 371.1 C 352 390.20000000000005 329.70000000000005 405.20000000000005 305 415.70000000000005 C 279.4 426.50000000000006 252.1 432.00000000000006 224 432.00000000000006 C 195.9 432.00000000000006 168.7 426.50000000000006 143 415.70000000000005 C 118.2 405.20000000000005 96 390.20000000000005 76.9 371.1 C 57.80000000000001 352 42.8 329.7 32.3 305 C 21.5 279.3 16 252.1 16 224 C 16 195.9 21.5 168.7 32.3 143 C 42.8 118.2 57.8 96 76.9 76.9 C 96.00000000000001 57.80000000000001 118.30000000000001 42.800000000000004 143 32.300000000000004 C 168.7 21.5 195.9 16 224 16 M 224 0 C 100.3 0 0 100.3 0 224 C 0 347.7 100.3 448 224 448 C 347.7 448 448 347.7 448 224 C 448 100.30000000000001 347.7 0 224 0 L 224 0 Z" paint-order="stroke fill markers" id="_45D74F06-B593-4B51-9EC4-68444B37B46B?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#e5a000" d=" M 0 0 M 224.6 124.8 L 320.5 300.7 L 128.8 300.7 L 224.6 124.8 M 224.6 108.7 C 221.7 108.7 219 109.5 216.5 110.9 C 214 112.30000000000001 212.1 114.5 210.6 117 L 114.69999999999999 293 C 111.79999999999998 298.2 111.89999999999999 303.5 114.89999999999999 308.8 C 116.3 311.2 118.19999999999999 313.2 120.69999999999999 314.6 C 123.1 316 125.79999999999998 316.70000000000005 128.7 316.70000000000005 L 320.5 316.70000000000005 C 323.4 316.70000000000005 325.9 316.00000000000006 328.4 314.6 C 330.9 313.20000000000005 332.79999999999995 311.3 334.2 308.8 C 337.3 303.6 337.3 298.3 334.4 293 L 238.49999999999997 117 C 237.09999999999997 114.4 235.19999999999996 112.4 232.69999999999996 110.9 C 230.2 109.4 227.5 108.7 224.6 108.7 L 224.6 108.7 Z" paint-order="stroke fill markers" id="_45D74F06-B593-4B51-9EC4-68444B37B46Bundefined" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,28,41)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_45D74F06-B593-4B51-9EC4-68444B37B46Bundefined" stroke="none" font-weight="normal">LMTP2</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">LMTP2</text>
                        </g>
                    </g>
                </g>
                <g id="_3CB8C9FF-8F98-4B51-A2B6-61FFA1C8893B" transform="matrix(1,0,0,1,29,37)" bpmn2nodeid="_3CB8C9FF-8F98-4B51-A2B6-61FFA1C8893B">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(0.125,0,0,0.125,0,0)">
                        <g transform="matrix(1,0,0,1,0,0)">
                            <path fill="#C0C0C0" d=" M 0 0 M 444 224 C 444 263.9 434.2 300.8 414.4 334.5 C 394.7 368.2 368 394.9 334.4 414.5 C 300.79999999999995 434.1 263.9 444 224 444 C 184.10000000000002 444 147.2 434.2 113.5 414.4 C 79.8 394.7 53.1 368 33.5 334.4 C 13.899999999999999 300.79999999999995 4 263.9 4 224 C 4 184.10000000000002 13.8 147.2 33.6 113.5 C 53.400000000000006 79.80000000000001 80.1 53.1 113.6 33.5 C 147.1 13.899999999999999 184.1 4 224 4 C 263.9 4 300.8 13.8 334.5 33.6 C 368.2 53.400000000000006 394.9 80.1 414.5 113.6 C 434.1 147.1 444 184.1 444 224 Z" paint-order="stroke fill markers" id="_3CB8C9FF-8F98-4B51-A2B6-61FFA1C8893B?shapeType=BACKGROUND" stroke="none"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,1,0,0)">
                                <g transform="matrix(1,0,0,1,0,0)">
                                    <path fill="#030303" d=" M 0 0 M 224 0 C 100.3 0 0 100.3 0 224 C 0 347.7 100.3 448 224 448 C 347.7 448 448 347.7 448 224 C 448 100.30000000000001 347.7 0 224 0 Z M 0 0 M 224 432 C 109.1 432 16 338.9 16 224 C 16 109.10000000000002 109.1 16 224 16 C 338.9 16 432 109.1 432 224 C 432 338.9 338.9 432 224 432 Z" paint-order="stroke fill markers" id="_3CB8C9FF-8F98-4B51-A2B6-61FFA1C8893B?shapeType=BORDER&amp;renderType=FILL" stroke="none"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,28,41)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_3CB8C9FF-8F98-4B51-A2B6-61FFA1C8893Bundefined" stroke="none" font-weight="normal">v1</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">v1</text>
                        </g>
                    </g>
                </g>
                <g id="_30F470D3-28CF-4433-95B6-D4F7684595BD" transform="matrix(1,0,0,1,1125.5,313)" bpmn2nodeid="_30F470D3-28CF-4433-95B6-D4F7684595BD">
                    <g>
                        <path fill="none" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="#ffffff" d=" M 2 0 L 181 0 L 181 0 A 2 2 0 0 1 183 2 L 183 84 L 183 84 A 2 2 0 0 1 181 86 L 2 86 L 2 86 A 2 2 0 0 1 0 84 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" paint-order="stroke fill markers" id="_30F470D3-28CF-4433-95B6-D4F7684595BD?shapeType=BACKGROUND" stroke="none"/>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)">
                        <path fill="none" stroke-dasharray="" id="_30F470D3-28CF-4433-95B6-D4F7684595BD?shapeType=BORDER&amp;renderType=STROKE" paint-order="fill stroke markers" d=" M 2 0 L 181 0 L 181 0 A 2 2 0 0 1 183 2 L 183 84 L 183 84 A 2 2 0 0 1 181 86 L 2 86 L 2 86 A 2 2 0 0 1 0 84 L 0 2 L 0 2.0000000000000004 A 2 2 0 0 1 1.9999999999999996 0 Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"/>
                    </g>
                    <g>
                        <g transform="matrix(0.06,0,0,0.06,9.4,9.4)">
                            <g transform="matrix(1,0,0,1,0,0)">
                                <path fill="#393f44" d=" M 0 0 M 16 445.2101 C 16 440.86867 18.784312 431.12906000000004 22.001325 424.21728 C 35.767643 394.6402 77.282944 359.28049 129 333.08362 C 144.51625 325.22398 157.34689 319.96394 167.80739 317.17416 C 171.93153 316.07426 175.72913 314.41389999999996 176.5251 313.36265 C 178.89361 310.23449999999997 180.91404 302.90781 181.72673 294.5 L 182.5 286.5 L 178.50715 283.45457 C 166.30327 274.14645 154.2837 251.67767 148.03953 226.5 C 145.61086 216.70715 145.05603000000002 215.46246 142.98364 215.1579 C 141.70332000000002 214.96974 138.08302 212.24302 134.93852 209.09852 C 123.23314 197.39314000000002 116.89146000000001 177.37556 121.43982000000001 166.48978 C 123.00204000000001 162.75088 128.15457 159.00970999999998 131.75 159.00374 C 134.44781 158.99974 134.47062 158.60296 132.91375 138.78796 C 130.92658 113.4962 134.27903 92.26542699999999 143.13217 74.075676 C 152.23162 55.379835 167.56889 42.88208 189.04934 36.659507000000005 C 210.20334 30.531504000000005 237.79666 30.531504000000005 258.95065999999997 36.659507000000005 C 300.04166 48.562968000000005 318.95842 83.80634 314.95504999999997 141 C 314.31982999999997 150.075 313.62402 157.78816 313.4088 158.14035 C 313.19359 158.49254000000002 314.57532 159.07295000000002 316.47931 159.43014000000002 C 328.92867 161.76565000000002 330.98619 177.01772000000003 321.49638 196.62092 C 316.90319 206.10912000000002 309.35724 214.50797 304.81732 215.18517000000003 C 303.02259 215.45289000000002 302.2931 217.14618000000002 299.94277999999997 226.50000000000003 C 296.65948 239.56693 294.47402 245.30522000000002 287.94764 257.99534000000006 C 282.49071999999995 268.60596000000004 273.03466 281.10922000000005 268.10756999999995 284.2288300000001 L 264.87062 286.27832000000006 L 265.51815999999997 292.88916000000006 C 266.34490999999997 301.32961000000006 268.63948999999997 309.8706000000001 270.87735999999995 312.83742000000007 C 272.06735 314.4150200000001 275.00244999999995 315.78963000000005 280.0630699999999 317.13941000000005 C 291.06929999999994 320.0750300000001 303.61700999999994 325.27420000000006 320.99999999999994 334.10171 C 369.81470999999993 358.89104000000003 410.84810999999996 393.75797 425.03216 422.5 C 429.06985999999995 430.68183 432 440.23198 432 445.2101 L 432 448 L 224 448 L 16 448 L 16 445.2101 Z" paint-order="stroke fill markers" id="_30F470D3-28CF-4433-95B6-D4F7684595BDundefined" stroke="none"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,91.5,-9.5)">
                        <g>
                            <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Send</text>
                            <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">loss</text>
                            <text x="0" font-size="12pt" y="42" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">mit</text>
                            <text x="0" font-size="12pt" y="57" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">signed</text>
                            <text x="0" font-size="12pt" y="72" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">docs</text>
                            <text x="0" font-size="12pt" y="87" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">to</text>
                            <text x="0" font-size="12pt" y="102" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="_30F470D3-28CF-4433-95B6-D4F7684595BDundefined" stroke="none" font-weight="normal">Booking</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Send</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">loss</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="42" font-size="12pt">mit</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="57" font-size="12pt">signed</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="72" font-size="12pt">docs</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="87" font-size="12pt">to</text>
                            <path fill="none" stroke="none"/>
                            <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="102" font-size="12pt">Booking</text>
                        </g>
                    </g>
                </g>
                <g transform="matrix(1,0,0,1,0,280.5)">
                    <g transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,0,0)">
                        <text x="0" font-size="12pt" y="12" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" stroke="none" font-weight="normal">Lane</text>
                        <text x="0" font-size="12pt" y="27" text-decoration="normal" text-anchor="middle" fill="#000000" font-family="Open Sans" dominant-baseline="alphabetic" font-style="normal" id="Lane_1undefined" stroke="none" font-weight="normal">1</text>
                        <path fill="none" stroke="none"/>
                        <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="12" font-size="12pt">Lane</text>
                        <path fill="none" stroke="none"/>
                        <text text-anchor="middle" stroke="#393f44" text-decoration="normal" stroke-miterlimit="10" fill="none" stroke-dasharray="" font-weight="normal" font-family="Open Sans" font-style="normal" dominant-baseline="alphabetic" x="0" y="27" font-size="12pt">1</text>
                    </g>
                </g>
            </g>
            <g id="SequenceFlow_1" bpmn2nodeid="SequenceFlow_1">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 122 105 L 138 108 L 140 108" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,122,105)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,155,103)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="SequenceFlow_13" bpmn2nodeid="SequenceFlow_13">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 265 108 L 285 108 L 290 108" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,265,108)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,305,103)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="SequenceFlow_14" bpmn2nodeid="SequenceFlow_14">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 355 108 L 390 108 L 410 108" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,355,108)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,425,103)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="SequenceFlow_7" bpmn2nodeid="SequenceFlow_7">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 561 108 L 600 108 L 624 108" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,561,108)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,639,103)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="SequenceFlow_8" bpmn2nodeid="SequenceFlow_8">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 675 108 L 702 108 L 714.002571355123 107.77773016009031" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,675,108)"/>
                <g transform="matrix(0.01851534400602105,0.9998285763251312,-0.9998285763251312,0.01851534400602105,728.9074232799699,102.50085711837434)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="SequenceFlow_10" bpmn2nodeid="SequenceFlow_10">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 865 107.5 L 897 107 L 914.0073188586938 107.53147871433418" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,865,107.5)"/>
                <g transform="matrix(-0.031234752377721026,0.9995120760870788,-0.9995120760870788,-0.031234752377721026,929.1561737618886,103.00243961956461)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="SequenceFlow_16" bpmn2nodeid="SequenceFlow_16">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 954 133 L 954 185 L 330 185 L 330 148" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,954,133)"/>
                <g transform="matrix(1,0,0,1,325,133)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="SequenceFlow_11" bpmn2nodeid="SequenceFlow_11">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 979 108 L 1009 108 L 1024 108" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,979,108)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,1039,103)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_28235F7C-E57C-46B4-B9F4-B188814FEAEB" bpmn2nodeid="_28235F7C-E57C-46B4-B9F4-B188814FEAEB">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1149 108 L 1184 108 L 1204 108" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1149,108)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,1219,103)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_17F5C30D-5F7D-45F2-887D-866A68B0130F" bpmn2nodeid="_17F5C30D-5F7D-45F2-887D-866A68B0130F">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1275 108 L 1315 108 L 1341 108" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1275,108)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,1356,103)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_441E4264-DB83-42EE-ABC2-1658612F9866" bpmn2nodeid="_441E4264-DB83-42EE-ABC2-1658612F9866">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1510 108 L 1535 108 L 1545 108" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1510,108)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,1560,103)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_FB510139-F490-483B-8719-8C7BE4B0534E" bpmn2nodeid="_FB510139-F490-483B-8719-8C7BE4B0534E">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1588 136 L 1588 240 L 1645 240" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1588,136)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,1660,235)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_BFC309D1-EA5F-4900-AF30-F2745C5FBC8B" bpmn2nodeid="_BFC309D1-EA5F-4900-AF30-F2745C5FBC8B">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1737 189 L 1737 134 L 1945 134" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1737,189)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,1960,129)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_F5336B5D-1DFF-42C2-8540-60CB6F8671C5" bpmn2nodeid="_F5336B5D-1DFF-42C2-8540-60CB6F8671C5">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1988 162 L 1988 280 L 2105.000107609035 280.4431822257918" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1988,162)"/>
                <g transform="matrix(-0.003787851613878921,0.9999928260643429,-0.9999928260643429,-0.003787851613878921,2120.018939258069,275.5000358696783)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_5AD02297-929E-452F-9C84-5FCDBEA09BA5" bpmn2nodeid="_5AD02297-929E-452F-9C84-5FCDBEA09BA5">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 2276 280.5 L 2288 280 L 2312.422128970596 379.4329536659983" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,2276,280.5)"/>
                <g transform="matrix(-0.9711364222667794,0.2385247352935946,-0.2385247352935946,-0.9711364222667794,2320.855682111334,392.807376323532)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_66A41B73-FCEE-49DD-8550-F04611C5B4F4" bpmn2nodeid="_66A41B73-FCEE-49DD-8550-F04611C5B4F4">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 2260 394.3636363636364 L 2176.9987351911946 395.4415748676468" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,2260,394.3636363636364)"/>
                <g transform="matrix(-0.012985917914454314,-0.9999156794129789,0.9999156794129789,-0.012985917914454314,2162.0649295895723,400.63594203342853)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_C86BBC78-D208-439E-85D4-D2AC34A7337B" bpmn2nodeid="_C86BBC78-D208-439E-85D4-D2AC34A7337B">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 2106 396.17610062893084 L 2017.9997033433208 396.72956161419296" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,2106,396.17610062893084)"/>
                <g transform="matrix(-0.0062891837917466945,-0.9999802228880498,0.9999802228880498,-0.0062891837917466945,2003.0314459189588,401.8238004855094)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_02D9EC0F-7417-4BED-8F3E-45CF81B8C2E5" bpmn2nodeid="_02D9EC0F-7417-4BED-8F3E-45CF81B8C2E5">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1947 397 L 1871.9997685238768 397.4166679526451" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1947,397)"/>
                <g transform="matrix(-0.005555469823658088,-0.9999845682584498,0.9999845682584498,-0.005555469823658088,1857.0277773491182,402.49992284129223)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_059C8927-C9ED-4A49-AC68-9FFDCAD5B9F7" bpmn2nodeid="_059C8927-C9ED-4A49-AC68-9FFDCAD5B9F7">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1701 397.5 L 1622 397.5" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1701,397.5)"/>
                <g transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,1607,402.5)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_7FFCCAAA-76F6-4273-9681-21E645FF7D2E" bpmn2nodeid="_7FFCCAAA-76F6-4273-9681-21E645FF7D2E">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1451 397.07454545454544 L 1360.4997768644832 396.58090787380627" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1451,397.07454545454544)"/>
                <g transform="matrix(0.005454464314357347,-0.9999851242988784,0.9999851242988784,0.005454464314357347,1345.472727678428,401.4990165305853)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_871FF1BA-6D56-4879-9755-D15B75DFC04B" bpmn2nodeid="_871FF1BA-6D56-4879-9755-D15B75DFC04B">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1162.5 396.3645418326693 L 1109.4998809556878 396.5756976854355" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1162.5,396.3645418326693)"/>
                <g transform="matrix(-0.003984032126345907,-0.9999920637125158,0.9999920637125158,-0.003984032126345907,1094.5199201606317,401.63541848589324)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_E8BEB86E-E295-4544-914A-B4E19984FD7D" bpmn2nodeid="_E8BEB86E-E295-4544-914A-B4E19984FD7D">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1001.0746268656717 440 L 998.9247008574408 488.01501418382145" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1001.0746268656717,440)"/>
                <g transform="matrix(-0.9989990544119016,-0.04473130094381753,0.04473130094381753,-0.9989990544119016,1003.2487266153431,503.2236565047191)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_20F92C44-8C3C-49A4-8E94-8445183C889D" bpmn2nodeid="_20F92C44-8C3C-49A4-8E94-8445183C889D">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1025 531 L 2399.0000155494877 529.0215982497488" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1025,531)"/>
                <g transform="matrix(0.0014398833165841938,0.99999896336748,-0.99999896336748,0.0014398833165841938,2413.992800583417,524.0000051831626)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_50D3714C-7D87-4568-A5D7-D93E2C844097" bpmn2nodeid="_50D3714C-7D87-4568-A5D7-D93E2C844097">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 2430.25068119891 501 L 2293.8040017802814 175.831614632229" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,2430.25068119891,501)"/>
                <g transform="matrix(0.9221076421485979,-0.3869334520187592,0.3869334520187592,0.9221076421485979,2283.389461789257,163.9346672600938)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_57DA8102-FEC9-4010-82F5-94DA8F7B08C5" bpmn2nodeid="_57DA8102-FEC9-4010-82F5-94DA8F7B08C5">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 2316 134 L 2417 134 L 2417 124" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,2316,134)"/>
                <g transform="matrix(1,0,0,1,2412,109)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_064DC6E6-8448-4F55-8AFB-B3471879286B" bpmn2nodeid="_064DC6E6-8448-4F55-8AFB-B3471879286B">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 2016 134 L 2138 134 L 2245 134" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,2016,134)"/>
                <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,2260,129)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g id="_56A71FCA-A79F-427E-8CAA-52182100ABB8" bpmn2nodeid="_56A71FCA-A79F-427E-8CAA-52182100ABB8">
                <g>
                    <path fill="none" stroke-dasharray="" stroke-miterlimit="10" d=" M 1588 80 L 1588 70 L 2288 70 L 2288 91" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
                <g transform="matrix(1,0,0,1,1588,80)"/>
                <g transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,2293,106)">
                    <path fill="rgb(0,0,0)" stroke-dasharray="" stroke-miterlimit="10" d=" M 10 15 L 0 15 L 5 0 Z" paint-order="fill stroke markers" stroke="rgb(0,0,0)"/>
                </g>
            </g>
            <g transform="matrix(1,0,0,1,37,40)"/>
            <g transform="matrix(1,0,0,1,1560,80)"/>
            <g transform="matrix(1,0,0,1,2260,366)"/>
            <g transform="matrix(1,0,0,1,929,83)"/>
            <g transform="matrix(1,0,0,1,305,83)"/>
            <g transform="matrix(1,0,0,1,1701,363)"/>
            <g transform="matrix(1,0,0,1,2120,246)"/>
            <g transform="matrix(1,0,0,1,1660,189)"/>
            <g transform="matrix(1,0,0,1,1039,83)"/>
            <g transform="matrix(1,0,0,1,639,90)"/>
            <g transform="matrix(1,0,0,1,729,73)"/>
            <g transform="matrix(1,0,0,1,425,74)"/>
            <g transform="matrix(1,0,0,1,2414,501)"/>
            <g transform="matrix(1,0,0,1,1219,80)"/>
            <g transform="matrix(1,0,0,1,911.5,354)"/>
            <g transform="matrix(1,0,0,1,1451,363)"/>
            <g transform="matrix(1,0,0,1,1356,57)"/>
            <g transform="matrix(1,0,0,1,1960,106)"/>
            <g transform="matrix(1,0,0,1,2260,106)"/>
            <g transform="matrix(1,0,0,1,1947,369)"/>
            <g transform="matrix(1,0,0,1,969,503)"/>
            <g transform="matrix(1,0,0,1,2399,73)"/>
            <g transform="matrix(1,0,0,1,2106,368)"/>
            <g transform="matrix(1,0,0,1,66,77)"/>
            <g transform="matrix(1,0,0,1,1162.5,353)"/>
            <g transform="matrix(1,0,0,1,155,83)"/></g>
    </g>
</svg>
`;
