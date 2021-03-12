export const accInqBody1423L = {
    cnAccount: {
        customerId: "L000010",
        cnAccountColl: {
            previousBrokenPromise: "# prev brok",
            // memoPostProPayLst: [
            //   "Msg",
            //   "CollatMsg",
            //   "CollatTrack",
            //   "FASB91",
            //   "Escrw"
            // ],
          memoPostProPayLst: [
            "CollatMsg",
            "CollatMeMoTrack",
            "FASB91",
            "Escrw"
          ],
            demandLetterFlag: "# dem let fl",
            demandLetterDate: "# dem let da",
            paymentAmount: "1424.16",
            paymentDate: "12/12/2004 12:00:00 AM",
            nextPaymentDate: "1/12/2015 12:00:00 AM",
            pastDueAmount: "148330.84",
            principalAmountDue: "148330.84",
            principalPastDue: "92.14",
            interestDue: "# int due",
            lateCharges: "640.89",
            otherCharges: "0.00",
            collectionNotesLst: null,
            escrowBalance: "0.00",
            daysPastDue: 990,
            dueDate: "3/1/2004 12:00:00 AM",
            promiseDate: "# prom date",
            lastWorkDate: "# last wk",
            lastPromiseDate: "# last prom",
            paymentsDue: "# pay due",
            actionCodes: "# ac codes",
            resultCodes: "# res code",
            contactCodes: "# conct codes",
            collectionStatusCode: "# col stat code",
            loanStatus: "3",
            numberOfExtensionsYTD: 77,
            numberOfExtensionsLTD: 89,
            dateOfLastExtension: "# date of l",
            lifePastDue: "# life past",
            queueingFlag: "# qf",
            historicalAttemptsCalls: 992,
            chargeOffAmount: "0.00",
            chargeOffDate: "6/27/2018 12:00:00 AM",
            nonAccrualDate: "# non acc da",
            reasonForDelinquency: "# reas del",
            dateStampForRfD: "# date stmp",
            interestRateChangeDate: 993,
            endOfDrawDate: "# end date draw",
            pastDue10LTD: "# PD 10 ltd",
            pastDue30LTD: "# PD 30 ltd",
            pastDue60LTD: "# PD 60 ltd",
            pastDue90LTD: "# PD 90 ltd",
            languageCd: "EN",
            pastDue30YTD: "2",
            maturityDate: "3/5/2022 12:00:00 AM",
            origLoanAmount: "15873.11"

        },
        cnAccountLoan: {
            collateralInformation: "Blue Flowers Properties 1-7 Invented Residential",
            officer: "BFP",
            loanType: "02",
            currentBalance: "142943.00",
            currentPayOff: "148330.84",
            loanDate: "2/1/2001 12:00:00 AM",
            loanTerm: "180",
            rate: "0.02000000",
            ltv: "0.0000",
            appraisedAmount: "0",
            lienPosition: "0",
            partiallyPaid: true,
            updatedAppraisal: "# up app",
            updatedAppraisalDate: "# up app da",
            alertMessages: "# al mess",
            collateralAddress: "# col add",
            escrowAmountDue: "1220.00",
            escrowChangeDate: 990,
            specialMessages: "# spe mess",
            user1Id: "# us id",
            achAftFlag: true,
            mortgageBalance: 991,
            mortgageBalanceUpdatedDate: "# mo bal up da",
            renewalDate: "7/1/2001",
            termDeposit:"termDeposit"
        },
        cnAccountLossMitigation: {
            foreclosureFlag: true,
            foreclosureDate: "# fc date",
            ticklers: "# ticklers",
            ticklerDates: "# tic da",
            actionCodes: "# ac codes",
            actionStatus: "#ac stat",
            restructuredDebtFlag: false,
            restructuredDate: "#res date"
        },
        cnAccountBankruptcy: {
            bankruptcyType: "# banktype",
            borrowerAttorneyInfo: "# bo at in",
            bankAttorneyInfo: "# ba at in",
            trusteeInfo: "# tru ini",
            dateFiled: "# date fi",
            dateNoticeReceived: "# da no re",
            caseNumber: "# cas num",
            dischargeDismissalFlag: true,
            dischargeDismissalDate: "#di di da",
            ticklers: "# tick",
            ticklerDates: "# tick da",
            actionCodes: "# ac co",
            actionStatus: "# ac stat",
            bankruptcyStopCodes: "# bank sto co",
            caseStatus: "# cas stat",
            bankruptcyStatusDate: "# bank stat da",
            reaffirmationFlag: true,
            reaffirmationDate: "# reaff da"
        },
        cnAccountForeclosure: {
            borrowerAttorneyInfo: "# bor att Info",
            bankAttorneyInfo: "# bank att in",
            dateFiled: "# date field",
            dateNoticeReceived: "# date not rec",
            caseNumber: 990,
            litigationCode: "# lit code",
            ticklers: "# tick",
            ticklerDates: "# tick dates",
            actionCodes: "# act codes",
            actionStatus: "# act status"
        },
        cnAccountAdditionalInfo: {
            promptScriptDecisionTree: "# ppt sc dec",
            relatedAccounts: "# rel acc",
            riskRating: "# ri ra",
            riskRatingDate: "# ri ra date",
            vantage3Score: "# va 3 sco",
            vantage3ScoreDate: "# va 3 sco da",
            ficoScore: "# fico sco",
            ficoScoreDate: "# fico sco da",
            bankruptcyScore: "# bak sco",
            bankruptcyScoreDate: "# bak sco da",
            eaPcFlag: true,
            historicalFicoVantageScores: "# his fi va sco",
            collateralTrackingInformation: "# co tra in"
        }
    },
    jhHdrMsg: null
};

let bodyUpd = {
  "cnAccount": {
    "customerId": "AAD9461",
    "cnAccountColl": {
      "previousBrokenPromise": null,
      "memoPostProPayLst": [
        "Msg",
        "CollatMsg",
        "CollatTrack",
        "FASB91",
        "Escrw"
      ],
      "demandLetterFlag": null,
      "demandLetterDate": null,
      "paymentAmount": "363.42",
      "paymentDate": "10/15/2017 12:00:00 AM",
      "pastDueAmount": "0.00",
      "principalAmountDue": "363.42",
      "principalPastDue": "100.42",
      "interestDue": null,
      "lateCharges": "0.00",
      "otherCharges": "0.00",
      "collectionNotesLst": null,
      "escrowBalance": "0.00",
      "daysPastDue": null,
      "dueDate": "10/15/2017 12:00:00 AM",
      "promiseDate": null,
      "lastWorkDate": null,
      "nextWorkDate": null,
      "lastPromiseDate": null,
      "paymentsDue": null,
      "actionCodes": null,
      "resultCodes": null,
      "contactCodes": null,
      "collectionStatusCode": null,
      "loanStatus": "1",
      "numberOfExtensionsYTD": null,
      "numberOfExtensionsLTD": null,
      "dateOfLastExtension": null,
      "lifePastDue": null,
      "queueingFlag": null,
      "historicalAttemptsCalls": null,
      "chargeOffAmount": "0.00",
      "nonAccrualDate": null,
      "reasonForDelinquency": null,
      "dateStampForRfD": null,
      "interestRateChangeDate": null,
      "endOfDrawDate": null,
      "pastDue10LTD": null,
      "pastDue30LTD": null,
      "pastDue60LTD": null,
      "pastDue90LTD": null
    },
    "cnAccountLoan": {
      "collateralInformation": "SPECIFIC EQUIPMENT",
      "officer": "B126",
      "loanType": "73",
      "currentBalance": "17227.81",
      "currentPayOff": "17280.09",
      "loanDate": "3/13/2015 12:00:00 AM",
      "loanTerm": "84",
      "rate": "0.05750000",
      "ltv": "0.0000",
      "appraisedAmount": "0",
      "lienPosition": "0",
      "updatedAppraisal": null,
      "updatedAppraisalDate": null,
      "alertMessages": null,
      "collateralAddress": null,
      "escrowAmountDue": "0.00",
      "escrowChangeDate": null,
      "specialMessages": null,
      "user1Id": null,
      "achAftFlag": null,
      "mortgageBalance": null,
      "mortgageBalanceUpdatedDate": null,
      "renewalDate": null,
      "termDeposit": null
    },
    "cnAccountLossMitigation": {
      "foreclosureFlag": null,
      "foreclosureDate": null,
      "ticklers": null,
      "ticklerDates": null,
      "actionCodes": null,
      "actionStatus": null,
      "restructuredDebtFlag": null,
      "restructuredDate": null
    },
    "cnAccountBankruptcy": {
      "bankruptcyType": null,
      "borrowerAttorneyInfo": null,
      "bankAttorneyInfo": null,
      "trusteeInfo": null,
      "dateFiled": null,
      "dateNoticeReceived": null,
      "caseNumber": null,
      "dischargeDismissalFlag": null,
      "dischargeDismissalDate": null,
      "ticklers": null,
      "ticklerDates": null,
      "actionCodes": null,
      "actionStatus": null,
      "bankruptcyStopCodes": null
    },
    "cnAccountForeclosure": {
      "borrowerAttorneyInfo": null,
      "bankAttorneyInfo": null,
      "dateFiled": null,
      "dateNoticeReceived": null,
      "caseNumber": null,
      "litigationCode": null,
      "ticklers": null,
      "ticklerDates": null,
      "actionCodes": null,
      "actionStatus": null
    },
    "cnAccountAdditionalInfo": {
      "promptScriptDecisionTree": null,
      "relatedAccounts": null,
      "riskRating": null,
      "riskRatingDate": null,
      "vantage3Score": null,
      "vantage3ScoreDate": null,
      "ficoScore": null,
      "ficoScoreDate": null,
      "bankruptcyScore": null,
      "bankruptcyScoreDate": null,
      "eaPcFlag": null,
      "historicalFicoVantageScores": null,
      "collateralTrackingInformation": null
    }
  },
  "jhHdrMsg": null
};