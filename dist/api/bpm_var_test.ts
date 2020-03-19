// Variables
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.3.0/processes/instances/10223/variables/instances
export const t_223_variables = {
    "variable-instance": [
        {
            "name": "initiator",
            "old-value": "",
            "value": "coin",
            "process-instance-id": 10225,
            "modification-date": {
                "java.util.Date": 1559056624113
            }
        },
        {
            "name": "taskDueDate",
            "old-value": "2019-05-30T23:00:00Z",
            "value": "2019-05-30T23:00:00Z",
            "process-instance-id": 10225,
            "modification-date": {
                "java.util.Date": 1559057449787
            }
        },
        {
            "name": "xvIsValid",
            "old-value": "false",
            "value": "true",
            "process-instance-id": 10225,
            "modification-date": {
                "java.util.Date": 1559057459990
            }
        },
        {
            "name": "xvIsApproved",
            "old-value": "",
            "value": "true",
            "process-instance-id": 10225,
            "modification-date": {
                "java.util.Date": 1559057468727
            }
        },
        {
            "name": "xvIsAccepted",
            "old-value": "",
            "value": "true",
            "process-instance-id": 10225,
            "modification-date": {
                "java.util.Date": 1559057475510
            }
        }
    ]
};

// xvIsVaid
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.3.0/processes/instances/10223/variables/instances/xvIsValid
export const t_223_xvIsValid = {
    "variable-instance": [
        {
            "name": "xvIsValid",
            "old-value": "false",
            "value": "true",
            "process-instance-id": 10225,
            "modification-date": {
                "java.util.Date": 1559057459990
            }
        },
        {
            "name": "xvIsValid",
            "old-value": "true",
            "value": "false",
            "process-instance-id": 10225,
            "modification-date": {
                "java.util.Date": 1559057447600
            }
        },
        {
            "name": "xvIsValid",
            "old-value": "",
            "value": "true",
            "process-instance-id": 10225,
            "modification-date": {
                "java.util.Date": 1559056746747
            }
        }
    ]
};

// xvIsVaid
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.3.0/processes/instances/10223/variables/instances/xvIsApproved
export const t_223_xvIsApproved = {
    "variable-instance": [
        {
            "name": "xvIsApproved",
            "old-value": "",
            "value": "true",
            "process-instance-id": 10225,
            "modification-date": {
                "java.util.Date": 1559057468727
            }
        }
    ]
};

// xvIsVaid
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.3.0/processes/instances/10223/variables/instances/xvIsAccepted
export const t_223_xvIsAccepted = {
    "variable-instance": [
        {
            "name": "xvIsAccepted",
            "old-value": "",
            "value": "true",
            "process-instance-id": 10225,
            "modification-date": {
                "java.util.Date": 1559057475510
            }
        }
    ]
};

// Nodes
// https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server/containers/SPOC_1.3.0/processes/instances/10223/nodes/instances
export const t_223_node_instances = {
    "node-instance": [
        {
            "node-instance-id": 21,
            "node-name": "LMTP1",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057478917
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
            "node-instance-id": 20,
            "node-name": "Setup payment plan",
            "process-instance-id": 10225,
            "work-item-id": 10846,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559559541132
            },
            "node-id": "_D4A5DBCA-DF91-4777-BED1-DB313DE2FBD9",
            "node-type": "HumanTaskNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 20,
            "node-name": "Setup payment plan",
            "process-instance-id": 10225,
            "work-item-id": 10846,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057475510
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
            "node-instance-id": 19,
            "node-name": null,
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057475510
            },
            "node-id": "_3A5EA5D8-CEB6-4AF7-B8B2-2CB0D471FB73",
            "node-type": "Split",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 19,
            "node-name": null,
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057475510
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
            "node-instance-id": 18,
            "node-name": "Get customer decision",
            "process-instance-id": 10225,
            "work-item-id": 10845,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057475510
            },
            "node-id": "_E49565DF-17CE-4301-BBA6-D9DB3BD521C6",
            "node-type": "HumanTaskNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 18,
            "node-name": "Get customer decision",
            "process-instance-id": 10225,
            "work-item-id": 10845,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057468743
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
            "node-instance-id": 17,
            "node-name": null,
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057468743
            },
            "node-id": "_9376C7A4-4EFF-4EF2-9F10-69EC7DF69CC6",
            "node-type": "Split",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 17,
            "node-name": null,
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057468727
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
            "node-instance-id": 16,
            "node-name": "Process underwriting result",
            "process-instance-id": 10225,
            "work-item-id": 10844,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057468727
            },
            "node-id": "_2DCF31AB-F59A-4DCC-88DD-15689DB5CF4C",
            "node-type": "HumanTaskNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 16,
            "node-name": "Process underwriting result",
            "process-instance-id": 10225,
            "work-item-id": 10844,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057464070
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
            "node-instance-id": 15,
            "node-name": "UWRSLT",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057464070
            },
            "node-id": "_B704C88F-904E-43E8-9AFC-64005D0B2217",
            "node-type": "EventNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 15,
            "node-name": "UWRSLT",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057461850
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
            "node-instance-id": 14,
            "node-name": "Send to underwriting",
            "process-instance-id": 10225,
            "work-item-id": 10843,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057461850
            },
            "node-id": "UserTask_5",
            "node-type": "HumanTaskNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 14,
            "node-name": "Send to underwriting",
            "process-instance-id": 10225,
            "work-item-id": 10843,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057459990
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
            "node-instance-id": 13,
            "node-name": "Valid?",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057459990
            },
            "node-id": "ParallelGateway_1",
            "node-type": "Split",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 13,
            "node-name": "Valid?",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057459990
            },
            "node-id": "ParallelGateway_1",
            "node-type": "Split",
            "node-connection": "_32655776-1606-4865-B685-F4FE137E2141",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 12,
            "node-name": "Validate loss mitigation package",
            "process-instance-id": 10225,
            "work-item-id": 10842,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057459990
            },
            "node-id": "UserTask_4",
            "node-type": "HumanTaskNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 12,
            "node-name": "Validate loss mitigation package",
            "process-instance-id": 10225,
            "work-item-id": 10842,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057454680
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
            "node-instance-id": 11,
            "node-name": "LMPR",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057454663
            },
            "node-id": "IntermediateCatchEvent_1",
            "node-type": "EventNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 11,
            "node-name": "LMPR",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057452320
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
            "node-instance-id": 10,
            "node-name": "Send loss mitigation package",
            "process-instance-id": 10225,
            "work-item-id": 10841,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057452320
            },
            "node-id": "UserTask_2",
            "node-type": "HumanTaskNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 10,
            "node-name": "Send loss mitigation package",
            "process-instance-id": 10225,
            "work-item-id": 10841,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057449787
            },
            "node-id": "UserTask_2",
            "node-type": "HumanTaskNode",
            "node-connection": "_5056386F-F72E-42D4-B957-EC6AA08AAEBD",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 9,
            "node-name": null,
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057449773
            },
            "node-id": "InclusiveGateway_1",
            "node-type": "Join",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 9,
            "node-name": null,
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057449773
            },
            "node-id": "InclusiveGateway_1",
            "node-type": "Join",
            "node-connection": "_3A187BBB-0768-4AC5-85C9-EBC0FDFFCAB8",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 8,
            "node-name": "Further Information Requested",
            "process-instance-id": 10225,
            "work-item-id": 10840,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057449773
            },
            "node-id": "_28C4281E-F3F6-4B47-B1E0-F9F7F43F02BB",
            "node-type": "HumanTaskNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 8,
            "node-name": "Further Information Requested",
            "process-instance-id": 10225,
            "work-item-id": 10840,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057447617
            },
            "node-id": "_28C4281E-F3F6-4B47-B1E0-F9F7F43F02BB",
            "node-type": "HumanTaskNode",
            "node-connection": "_C4503A45-F276-4372-8CE6-778EC7A4BE47",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 7,
            "node-name": "Valid?",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057447617
            },
            "node-id": "ParallelGateway_1",
            "node-type": "Split",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 7,
            "node-name": "Valid?",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057447617
            },
            "node-id": "ParallelGateway_1",
            "node-type": "Split",
            "node-connection": "_32655776-1606-4865-B685-F4FE137E2141",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 6,
            "node-name": "Validate loss mitigation package",
            "process-instance-id": 10225,
            "work-item-id": 10839,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057447617
            },
            "node-id": "UserTask_4",
            "node-type": "HumanTaskNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 6,
            "node-name": "Validate loss mitigation package",
            "process-instance-id": 10225,
            "work-item-id": 10839,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057432173
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
            "node-instance-id": 5,
            "node-name": "LMPR",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057432173
            },
            "node-id": "IntermediateCatchEvent_1",
            "node-type": "EventNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 5,
            "node-name": "LMPR",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057426970
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
            "node-instance-id": 4,
            "node-name": "Send loss mitigation package",
            "process-instance-id": 10225,
            "work-item-id": 10838,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559057426970
            },
            "node-id": "UserTask_2",
            "node-type": "HumanTaskNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 4,
            "node-name": "Send loss mitigation package",
            "process-instance-id": 10225,
            "work-item-id": 10838,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559056746747
            },
            "node-id": "UserTask_2",
            "node-type": "HumanTaskNode",
            "node-connection": "_5056386F-F72E-42D4-B957-EC6AA08AAEBD",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 3,
            "node-name": null,
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559056746747
            },
            "node-id": "InclusiveGateway_1",
            "node-type": "Join",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 3,
            "node-name": null,
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559056746747
            },
            "node-id": "InclusiveGateway_1",
            "node-type": "Join",
            "node-connection": "_E5D2E32D-9F8D-4590-8202-FDAA0BB81F25",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 2,
            "node-name": null,
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559056746747
            },
            "node-id": "_2EC893E9-ECC9-4368-B88A-BE4C49A81672",
            "node-type": "Split",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 2,
            "node-name": null,
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559056746747
            },
            "node-id": "_2EC893E9-ECC9-4368-B88A-BE4C49A81672",
            "node-type": "Split",
            "node-connection": "_799DDBE8-6B17-4160-8AB8-FFDEED4C390E",
            "node-completed": false,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 1,
            "node-name": "Contact with customer",
            "process-instance-id": 10225,
            "work-item-id": 10837,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559056746747
            },
            "node-id": "UserTask_1",
            "node-type": "HumanTaskNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 1,
            "node-name": "Contact with customer",
            "process-instance-id": 10225,
            "work-item-id": 10837,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559056624177
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
            "node-name": "v9",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559056624177
            },
            "node-id": "_3CB8C9FF-8F98-4B51-A2B6-61FFA1C8893B",
            "node-type": "StartNode",
            "node-connection": null,
            "node-completed": true,
            "reference-id": null,
            "sla-compliance": 0,
            "sla-due-date": null
        },
        {
            "node-instance-id": 0,
            "node-name": "v9",
            "process-instance-id": 10225,
            "work-item-id": null,
            "container-id": "SPOC_1.3.0",
            "start-date": {
                "java.util.Date": 1559056624147
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
