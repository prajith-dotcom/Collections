// 1 Get campaigns
// /api/campaigns/v1
export const campaignsBody = [
  {
    "Id": 13,
    "CampaignCd": "ARRANGEMENT",
    "CampaignNm": "Arrangement",
    "DefaultAttributes": "{\"CampaignCd\":\"ARRANGEMENT\",\"LXSTAT_IN\":[\"A\"],\"LXNWDT_LTE\":\"2019-02-08T00:00:00-06:00\",\r\n\"LASTPRMDATE_LT\":\"2019-02-08T00:00:00-06:00\",\"OFFCR_NI\":[\"SA37\",\"SA12\",\"SA10\",\"SA26\",\"SA1\",\"SA42\",\"SA21\",\"SA25\",\"SA3\",\"SA37\",\"SA38\",\"SA4\",\"SA45\",\"SA48\"]}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 4,
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "DefaultAttributes": "{\"CampaignCd\":\"BUSINESS_BANKING\",\r\n\"GROUP_IN\":[\"450\",\"420\",\"560\",\"520\"],\"LXSTAT_NI\":[\"B\",\"0\",\"1\",\"3\",\"7\",\"5\",\"L\",\"R\",\"S\",\"U\",\"D\",\"V\",\"Q\"],\r\n\"LXNWDT_LTE\":\"2019-04-09T00:00:00-05:00\",\"LASTPRMDATE_LT\":\"2019-04-09T00:00:00-05:00\",\"QRYBAL_GT\":0,\r\n\"CHGOFFDATE_IN\":\"2000-01-01T00:00:00\",\"PDDAYS_LT\":60,\"PDDAYS_GTE\":10,\r\n\"OFFCR_NI\":[\"SA1\",\"SA10\",\"SA11\",\"SA12\",\"SA13\",\"SA14\",\"SA15\",\"SA16\",\"SA17\",\"SA18\",\"SA19\",\"SA2\",\"SA20\",\"SA21\",\r\n\"SA22\",\"SA23\",\"SA24\",\"SA25\",\"SA26\",\"SA28\",\"SA29\",\"SA3\",\"SA30\",\"SA31\",\"SA32\",\"SA33\",\"SA34\",\"SA35\",\"SA36\",\"SA37\",\r\n\"SA38\",\"SA39\",\"SA4\",\"SA40\",\"SA41\",\"SA42\",\"SA43\",\"SA44\",\"SA45\",\"SA46\",\"SA47\",\"SA48\",\"SA53\",\"SA55\",\"SA56\",\"SA57\",\r\n\"SA58\",\"SA5\",\"SA6\",\"SA7\",\"SA8\",\"SA9\",\"3567\",\"3081\",\"7927\",\"3099\",\"3073\",\"3070\"],\r\n\"MATDATE_GTE\":\"2019-04-10T00:00:00-05:00\",\"EAPC_NI\":[\"PB3**\",\"PC\",\"EA\"],\"SICCODE_IN\":\"Y\"}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 39,
        "AttributeCd": "SICCODE_IN",
        "AttributeNm": "SicCode (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 17,
    "CampaignCd": "CONSUMER",
    "CampaignNm": "Consumer",
    "DefaultAttributes": "{\"CampaignCd\":\"CONSUMER\",\r\n\"GROUP_IN\":[\"310\",\"350\",\"460\",\"360\",\"330\",\"340\"],\"LXSTAT_NI\":[\"B\",\"0\",\"1\",\"3\",\"7\",\"5\",\"L\",\"R\",\"S\",\"U\",\"D\",\"V\",\"Q\"],\r\n\"LXNWDT_LTE\":\"2019-02-08T00:00:00-06:00\",\"LASTPRMDATE_LT\":\"2019-02-08T00:00:00-06:00\",\"QRYBAL_GT\":0,\r\n\"CHGOFFDATE_IN\":\"2000-01-01T00:00:00\",\"PDDAYS_LT\":60,\"PDDAYS_GTE\":15,\r\n\"OFFCR_NI\":[\"SA1\",\"SA10\",\"SA11\",\"SA12\",\"SA13\",\"SA14\",\"SA15\",\"SA16\",\"SA17\",\"SA18\",\"SA19\",\"SA2\",\"SA20\",\"SA21\",\"SA22\",\r\n\"SA23\",\"SA24\",\"SA25\",\"SA26\",\"SA28\",\"SA29\",\"SA3\",\"SA30\",\"SA31\",\"SA32\",\"SA33\",\"SA34\",\"SA35\",\"SA36\",\"SA37\",\"SA38\",\"SA39\",\r\n\"SA4\",\"SA40\",\"SA41\",\"SA42\",\"SA43\",\"SA44\",\"SA45\",\"SA46\",\"SA47\",\"SA48\",\"SA53\",\"SA55\",\"SA56\",\"SA57\",\"SA58\",\"SA5\",\"SA6\",\r\n\"SA7\",\"SA8\",\"SA9\",\"3567\",\"3081\",\"7927\",\"3099\",\"3073\",\"3070\"],\"MATDATE_GTE\":\"2019-02-09T00:00:00-06:00\",\r\n\"EAPC_NI\":[\"PB3**\",\"PC\",\"EA\"]}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 5,
    "CampaignCd": "CUSTOM_CAMPAIGN",
    "CampaignNm": "Custom 1",
    "DefaultAttributes": "{\"CampaignCd\":\"CUSTOM_CAMPAIGN\",\"GROUP_IN\":[\"100\",\"110\",\"310\",\"315\",\"320\",\"330\",\"340\",\"410\",\"460\"],\r\n\"LXNWDT_LTE\":\"2018-01-17T00:00:00\",\"LASTPRMDATE_LT\":\"2018-01-17T00:00:00\",\"CHGOFFDATE_NI\":\"1900-01-01T00:00:00\",\r\n\"PRIVA00001_IN\":\"EA\"}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 7,
    "CampaignCd": "CUSTOM_TWO",
    "CampaignNm": "Custom 2",
    "DefaultAttributes": "{\"CampaignCd\":\"CUSTOM_TWO\",\"GROUP_IN\":[\"100\",\"110\",\"320\"]}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 8,
    "CampaignCd": "CUSTOM_THREE",
    "CampaignNm": "Custom 3",
    "DefaultAttributes": "{\"CampaignCd\":\"CUSTOM_THREE\",\"PRIVA00001_IN\":\"EA\"}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 10,
    "CampaignCd": "DC",
    "CampaignNm": "Deposit Collections",
    "DefaultAttributes": "{\"CampaignCd\":\"DC\",\"LXSTAT_NI\":[\"B\",\"0\",\"1\",\"3\",\"7\",\"U\",\"Q\"],\r\n\"LXNWDT_LTE\":\"2019-02-08T00:00:00-06:00\",\"LASTPRMDATE_LT\":\"2019-02-08T00:00:00-06:00\",\r\n\"CHGOFFDATE_IN\":\"2000-01-01T00:00:00\",\"PDDAYS_GTE\":30,\"CURBAL_GTE\":50}",
    "Attributes": [
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 42,
        "AttributeCd": "CURBAL_LT",
        "AttributeNm": "Current balance (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 43,
        "AttributeCd": "CURBAL_GTE",
        "AttributeNm": "Current balance (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 12,
    "CampaignCd": "DFS",
    "CampaignNm": "Deposit Fresh Start",
    "DefaultAttributes": "{\"CampaignCd\":\"DFS\",\"LXNWDT_LTE\":\"2018-09-12T00:00:00-05:00\",\"LASTPRMDATE_LT\":\"2018-09-12T00:00:00-05:00\",\r\n\"MBSTATUS_IN\":\"N\",\"MFNEXTTRD7_LT\":\"2018-09-12T00:00:00-05:00\"}",
    "Attributes": [
      {
        "AttributeId": 38,
        "AttributeCd": "MBSTATUS_IN",
        "AttributeNm": "Bounce Protection Status (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 42,
        "AttributeCd": "CURBAL_LT",
        "AttributeNm": "Current balance (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 43,
        "AttributeCd": "CURBAL_GTE",
        "AttributeNm": "Current balance (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 37,
        "AttributeCd": "MFNEXTTRD7_LT",
        "AttributeNm": "FS Next Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 11,
    "CampaignCd": "DR",
    "CampaignNm": "Deposit Recovery",
    "DefaultAttributes": "{\"CampaignCd\":\"DR\",\"LXSTAT_NI\":[\"B\",\"0\",\"1\",\"3\",\"7\",\"U\",\"Q\",\"D\"],\"LXNWDT_LTE\":\"2019-02-08T00:00:00-06:00\",\r\n\"LASTPRMDATE_LT\":\"2019-02-08T00:00:00-06:00\",\"CHGOFFDATE_GTE\":\"2018-02-08T00:00:00-06:00\"}",
    "Attributes": [
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 42,
        "AttributeCd": "CURBAL_LT",
        "AttributeNm": "Current balance (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 43,
        "AttributeCd": "CURBAL_GTE",
        "AttributeNm": "Current balance (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 1,
    "CampaignCd": "DIRECT",
    "CampaignNm": "Direct",
    "DefaultAttributes": "{\"CampaignCd\":\"DIRECT\",\"GROUP_IN\":[\"310\",\"350\",\"460\",\"360\"],\r\n\"LXSTAT_NI\":[\"B\",\"0\",\"1\",\"3\",\"7\",\"5\",\"L\",\"R\",\"S\",\"U\",\"D\",\"V\",\"Q\"],\"LXNWDT_LTE\":\"2019-02-08T00:00:00-06:00\",\r\n\"LASTPRMDATE_LT\":\"2019-02-08T00:00:00-06:00\",\"QRYBAL_GT\":0,\"CHGOFFDATE_IN\":\"2000-01-01T00:00:00\",\r\n\"PDDAYS_LT\":60,\"PDDAYS_GTE\":15,\"OFFCR_NI\":[\"SA1\",\"SA10\",\"SA11\",\"SA12\",\"SA13\",\"SA14\",\"SA15\",\"SA16\",\"SA17\",\r\n\"SA18\",\"SA19\",\"SA2\",\"SA20\",\"SA21\",\"SA22\",\"SA23\",\"SA24\",\"SA25\",\"SA26\",\"SA28\",\"SA29\",\"SA3\",\"SA30\",\"SA31\",\"SA32\",\r\n\"SA33\",\"SA34\",\"SA35\",\"SA36\",\"SA37\",\"SA38\",\"SA39\",\"SA4\",\"SA40\",\"SA41\",\"SA42\",\"SA43\",\"SA44\",\"SA45\",\"SA46\",\"SA47\",\r\n\"SA48\",\"SA53\",\"SA55\",\"SA56\",\"SA57\",\"SA58\",\"SA5\",\"SA6\",\"SA7\",\"SA8\",\"SA9\",\"3567\",\"3081\",\"7927\",\"3099\",\"3073\",\"3070\"],\r\n\"MATDATE_GTE\":\"2019-02-09T00:00:00-06:00\",\"EAPC_NI\":[\"PB3**\",\"PC\",\"EA\"]}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 9,
    "CampaignCd": "EA",
    "CampaignNm": "Emerging Affluent",
    "DefaultAttributes": "{\"CampaignCd\":\"EA\",\"GROUP_IN\":[\"310\",\"350\",\"460\",\"360\",\"340\",\"330\",\"320\",\"410\",\"100\",\"110\",\"315\"],\r\n\"LXSTAT_NI\":[\"B\",\"0\",\"1\",\"3\",\"7\",\"5\",\"L\",\"R\",\"S\",\"U\",\"D\"],\"LXNWDT_LTE\":\"2019-04-09T00:00:00-05:00\",\r\n\"LASTPRMDATE_LT\":\"2019-04-09T00:00:00-05:00\",\"QRYBAL_GT\":0,\"CHGOFFDATE_IN\":\"2000-01-01T00:00:00\",\r\n\"PDDAYS_LT\":90,\"PDDAYS_GTE\":10,\"PRIVA00001_IN\":\"EA\"}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 2,
    "CampaignCd": "INDIRECT",
    "CampaignNm": "Indirect",
    "DefaultAttributes": "{\"CampaignCd\":\"INDIRECT\",\"GROUP_IN\":[\"330\",\"340\"],\r\n\"LXSTAT_NI\":[\"B\",\"0\",\"1\",\"3\",\"7\",\"5\",\"L\",\"R\",\"S\",\"U\",\"D\",\"V\",\"Q\"],\"LXNWDT_LTE\":\"2018-12-12T00:00:00-06:00\",\r\n\"LASTPRMDATE_LT\":\"2018-12-12T00:00:00-06:00\",\"QRYBAL_GT\":0,\"CHGOFFDATE_IN\":\"2000-01-01T00:00:00\",\r\n\"PDDAYS_LT\":60,\"PDDAYS_GTE\":15,\"OFFCR_NI\":[\"SA1\",\"SA10\",\"SA11\",\"SA12\",\"SA13\",\"SA14\",\"SA15\",\"SA16\",\"SA17\",\"SA18\",\r\n\"SA19\",\"SA2\",\"SA20\",\"SA21\",\"SA22\",\"SA23\",\"SA24\",\"SA25\",\"SA26\",\"SA28\",\"SA29\",\"SA3\",\"SA30\",\"SA31\",\"SA32\",\"SA33\",\r\n\"SA34\",\"SA35\",\"SA36\",\"SA37\",\"SA38\",\"SA39\",\"SA4\",\"SA40\",\"SA41\",\"SA42\",\"SA43\",\"SA44\",\"SA45\",\"SA46\",\"SA47\",\"SA48\",\r\n\"SA53\",\"SA55\",\"SA56\",\"SA57\",\"SA58\",\"SA5\",\"SA6\",\"SA7\",\"SA8\",\"SA9\",\"3567\",\"3081\",\"7927\",\"3099\",\"3073\",\"3070\"],\r\n\"MATDATE_GTE\":\"2018-12-13T00:00:00-06:00\",\"EAPC_NI\":[\"PB3**\",\"PC\",\"EA\"]}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 16,
    "CampaignCd": "JUDGEMENT",
    "CampaignNm": "Judgement",
    "DefaultAttributes": "{\"CampaignCd\":\"JUDGEMENT\",\"LXSTAT_IN\":[\"D\"],\r\n\"LXNWDT_LTE\":\"2019-02-08T00:00:00-06:00\",\"OFFCR_NI\":[\"SA37\",\"SA12\",\"SA10\",\"SA26\",\"SA1\",\"SA42\",\"SA21\",\"SAUN\",\"SA25\",\"SA3\",\"SA37\",\"SA38\",\"SA4\",\"SA45\",\"SA48\",\"SA59\"]}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 14,
    "CampaignCd": "MATURED",
    "CampaignNm": "Matured",
    "DefaultAttributes": "{\"CampaignCd\":\"MATURED\",\"LXSTAT_NI\":[\"B\",\"0\",\"1\",\"3\",\"5\",\"7\",\"L\",\"R\",\"S\",\"U\",\"D\",\"V\",\"Q\"],\"LXNWDT_LTE\":\"2019-02-08T00:00:00-06:00\",\r\n\"LASTPRMDATE_LT\":\"2019-02-08T00:00:00-06:00\",\"CHGOFFDATE_IN\":\"2000-01-01T00:00:00\",\"PDDAYS_LT\":90,\"PDDAYS_GTE\":10,\r\n\"OFFCR_NI\":[\"SA1\",\"SA10\",\"SA11\",\"SA12\",\"SA13\",\"SA14\",\"SA15\",\"SA16\",\"SA17\",\"SA18\",\"SA19\",\"SA2\",\"SA20\",\"SA21\",\"SA22\",\"SA23\",\"SA24\",\"SA25\",\"SA26\",\"SA28\",\"SA29\",\"SA30\",\"SA31\",\"SA32\",\"SA33\",\"SA34\",\"SA35\",\"SA36\",\"SA37\",\"SA38\",\"SA39\",\"SA4\",\"SA40\",\"SA41\",\"SA42\",\"SA43\",\"SA44\",\"SA45\",\"SA46\",\"SA47\",\"SA48\",\"SA53\",\"SA55\",\"SA56\",\"SA57\",\"SA58\",\"SA5\",\"SA6\",\"SA7\",\"SA8\",\"SA9\",\"3567\",\"3081\",\"7927\",\"3099\",\"3073\",\"3070\"],\r\n\"MATDATE_LT\":\"2019-02-09T00:00:00-06:00\",\"EAPC_NI\":[\"PB3**\",\"PC\",\"EA\"]}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 15,
    "CampaignCd": "PRIV_CLIENT",
    "CampaignNm": "Private client",
    "DefaultAttributes": "{\"CampaignCd\":\"PRIV_CLIENT\",\"CHGOFFDATE_IN\":\"2000-01-01T00:00:00\",\"PDDAYS_LT\":90,\"PDDAYS_GTE\":10,\"EAPC_IN\":[\"PC\"]}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 41,
        "AttributeCd": "EAPC_IN",
        "AttributeNm": "EaPc flag [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 3,
    "CampaignCd": "REAL_ESTATE",
    "CampaignNm": "Real Estate",
    "DefaultAttributes": "{\"CampaignCd\":\"REAL_ESTATE\",\"GROUP_IN\":[\"320\",\"410\",\"100\",\"110\",\"315\"],\r\n\"LXSTAT_NI\":[\"B\",\"0\",\"1\",\"3\",\"7\",\"5\",\"L\",\"R\",\"S\",\"U\",\"D\",\"V\",\"Q\"],\"LXNWDT_LTE\":\"2019-04-09T00:00:00-05:00\",\r\n\"LASTPRMDATE_LT\":\"2019-04-09T00:00:00-05:00\",\"QRYBAL_GT\":0,\"CHGOFFDATE_IN\":\"2000-01-01T00:00:00\",\"PDDAYS_LT\":60,\r\n\"PDDAYS_GTE\":20,\"OFFCR_NI\":[\"SA1\",\"SA10\",\"SA11\",\"SA12\",\"SA13\",\"SA14\",\"SA15\",\"SA16\",\"SA17\",\"SA18\",\"SA19\",\"SA2\",\r\n\"SA20\",\"SA21\",\"SA22\",\"SA23\",\"SA24\",\"SA25\",\"SA26\",\"SA28\",\"SA29\",\"SA3\",\"SA30\",\"SA31\",\"SA32\",\"SA33\",\"SA34\",\"SA35\",\r\n\"SA36\",\"SA37\",\"SA38\",\"SA39\",\"SA4\",\"SA40\",\"SA41\",\"SA42\",\"SA43\",\"SA44\",\"SA45\",\"SA46\",\"SA47\",\"SA48\",\"SA53\",\"SA55\",\r\n\"SA56\",\"SA57\",\"SA58\",\"SA5\",\"SA6\",\"SA7\",\"SA8\",\"SA9\",\"3567\",\"3081\",\"7927\",\"3099\",\"3073\",\"3070\"],\r\n\"MATDATE_GTE\":\"2019-04-10T00:00:00-05:00\",\"EAPC_NI\":[\"PB3**\",\"PC\",\"EA\"]}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 1,
        "AttributeCd": "GROUP_IN",
        "AttributeNm": "Group Code [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  },
  {
    "Id": 6,
    "CampaignCd": "RECOVERY",
    "CampaignNm": "Recovery",
    "DefaultAttributes": "{\"CampaignCd\":\"RECOVERY\",\"LXSTAT_NI\":[\"B\",\"0\",\"1\",\"3\",\"7\",\"Q\",\"U\",\"D\",\"5\",\"9\"],\r\n\"LXNWDT_LTE\":\"2019-04-09T00:00:00-05:00\",\"LASTPRMDATE_LT\":\"2019-04-09T00:00:00-05:00\",\r\n\"CHGOFFDATE_GTE\":\"2018-04-09T00:00:00-05:00\"}",
    "Attributes": [
      {
        "AttributeId": 9,
        "AttributeCd": "CHGOFFDATE_NI",
        "AttributeNm": "Charge-off date (!=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 8,
        "AttributeCd": "CHGOFFDATE_IN",
        "AttributeNm": "Charge-off date (=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 35,
        "AttributeCd": "CHGOFFDATE_GTE",
        "AttributeNm": "Charge-off date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 3,
        "AttributeCd": "LXSTAT_NI",
        "AttributeNm": "Collection Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 2,
        "AttributeCd": "LXSTAT_IN",
        "AttributeNm": "Collection Status [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 10,
        "AttributeCd": "PDDAYS_LT",
        "AttributeNm": "Days Past due (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 11,
        "AttributeCd": "PDDAYS_GTE",
        "AttributeNm": "Days Past due (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 36,
        "AttributeCd": "EAPC_NI",
        "AttributeNm": "EaPc flag [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 25,
        "AttributeCd": "EXTSNDATE_LT",
        "AttributeNm": "Extension Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 26,
        "AttributeCd": "EXTSNDATE_GTE",
        "AttributeNm": "Extension Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 15,
        "AttributeCd": "CREDITSCRE_LT",
        "AttributeNm": "FICO score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 16,
        "AttributeCd": "CREDITSCRE_GTE",
        "AttributeNm": "FICO score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 7,
        "AttributeCd": "QRYBAL_GT",
        "AttributeNm": "GL Balance (>)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 23,
        "AttributeCd": "LASTPMTDATE_LT",
        "AttributeNm": "Last Payment Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 24,
        "AttributeCd": "LASTPMTDATE_GTE",
        "AttributeNm": "Last Payment Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 6,
        "AttributeCd": "LASTPRMDATE_LT",
        "AttributeNm": "Last Promise Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 5,
        "AttributeCd": "LASTWKDAT_LT",
        "AttributeNm": "Last Work Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 33,
        "AttributeCd": "LIENPOS_IN",
        "AttributeNm": "Lien Position (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 21,
        "AttributeCd": "LP10_LT",
        "AttributeNm": "Life 10+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 22,
        "AttributeCd": "LP10_GTE",
        "AttributeNm": "Life 10+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 19,
        "AttributeCd": "LPD30_LT",
        "AttributeNm": "Life 30+ (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 20,
        "AttributeCd": "LPD30_GTE",
        "AttributeNm": "Life 30+ (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 40,
        "AttributeCd": "MATDATE_LT",
        "AttributeNm": "Maturity Date (<)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 27,
        "AttributeCd": "MATDATE_GTE",
        "AttributeNm": "Maturity Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 4,
        "AttributeCd": "LXNWDT_LTE",
        "AttributeNm": "Next Work Date (<=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 34,
        "AttributeCd": "OFFCR_NI",
        "AttributeNm": "Officer [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 14,
        "AttributeCd": "OFFCR_IN",
        "AttributeNm": "Officer [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 28,
        "AttributeCd": "ORGDATE_GTE",
        "AttributeNm": "Open Date (>=)",
        "DataType": "DATE",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 13,
        "AttributeCd": "PRIVA00001_NI",
        "AttributeNm": "Private Banking Indicator (!=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 12,
        "AttributeCd": "PRIVA00001_IN",
        "AttributeNm": "Private Banking Indicator (=)",
        "DataType": "STRING",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 32,
        "AttributeCd": "SHCSTS_IN",
        "AttributeNm": "Shadow Status [!=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 30,
        "AttributeCd": "CFSTAT_IN",
        "AttributeNm": "State [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 31,
        "AttributeCd": "TIMEZONE_IN",
        "AttributeNm": "Time Zone [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 29,
        "AttributeCd": "USER1_IN",
        "AttributeNm": "User 1 [=]",
        "DataType": "STRING",
        "ArrayFlg": "Y"
      },
      {
        "AttributeId": 17,
        "AttributeCd": "VANTG3SCR_LT",
        "AttributeNm": "Vantage 3.0 Score (<)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      },
      {
        "AttributeId": 18,
        "AttributeCd": "VANTG3SCR_GTE",
        "AttributeNm": "Vantage 3.0 Score (>=)",
        "DataType": "NUMBER",
        "ArrayFlg": "N"
      }
    ]
  }
];

// 2 Get campaign list
// /api/campaignlists/v1?StatusCd=CLOSED&CampaignCd=BUSINESS_BANKING&pagenr=1&pagesize=5
export const campaignListsBody = [
  {
    "Id": 119,
    "CampaignCd": "DIRECT",
    "CampaignNm": "Direct",
    "CampaignId": 1,
    "CreatedDt": "2017-11-29T11:22:34.57",
    "CreatedBy": "Vasiliy Sharapov",
    "StatusCd": "NEW",
    "ModifiedBy": " ",
    "ModifiedDt": null,
    "Attributes": "eyJVc2VyQ2QiOiJ2c2hhcmFwbyIsIlVwbG9hZElkIjoxLCJDYW1wYWlnbkNkIjoiRElSRUNUIiwiR1JPVVBfSU4iOm51bGwsIkxYU1RBVF9OSSI6bnVsbCwiTFhOV0RUX0xURSI6IjIwMTctMTEtMjlUMDA6MDA6MDAiLCJMQVNUUFJNREFURV9MVCI6IjIwMTctMTEtMjlUMDA6MDA6MDAifQ==",
    "OrderedBy": "Record ID"
  },
  {
    "Id": 116,
    "CampaignCd": "DIRECT",
    "CampaignNm": "Direct",
    "CampaignId": 1,
    "CreatedDt": "2017-11-28T15:45:38.897",
    "CreatedBy": "Vasiliy Sharapov",
    "StatusCd": "PAUSED",
    "ModifiedBy": " ",
    "ModifiedDt": null,
    "Attributes": "eyJVc2VyQ2QiOiJ2c2hhcmFwbyIsIlVwbG9hZElkIjoxLCJDYW1wYWlnbkNkIjoiRElSRUNUIiwiR1JPVVBfSU4iOlsiMzEwIiwiMzUwIiwiNDYwIiwiMzYwIl0sIkxYU1RBVF9OSSI6WyJCIiwiMCIsIjEiLCIzIiwiNyIsIjUiLCJMIiwiUiIsIlMiLCJVIiwiRCJdLCJMWE5XRFRfTFRFIjoiMjAxNy0xMS0yOFQwMDowMDowMCIsIkxBU1RQUk1EQVRFX0xUIjoiMjAxNy0xMS0yOFQwMDowMDowMCJ9",
    "OrderedBy": "Timezone"
  },
  {
    "Id": 115,
    "CampaignCd": "DIRECT",
    "CampaignNm": "Direct",
    "CampaignId": 1,
    "CreatedDt": "2017-11-28T15:18:00.43",
    "CreatedBy": "Vasiliy Sharapov",
    "StatusCd": "PAUSED",
    "ModifiedBy": " ",
    "ModifiedDt": null,
    "Attributes": "eyJVc2VyQ2QiOiJ2c2hhcmFwbyIsIlVwbG9hZElkIjoxLCJDYW1wYWlnbkNkIjoiRElSRUNUIiwiR1JPVVBfSU4iOlsiMzEwIiwiMzUwIiwiNDYwIiwiMzYwIl0sIkxYU1RBVF9OSSI6WyJCIiwiMCIsIjEiLCIzIiwiNyIsIjUiLCJMIiwiUiIsIlMiLCJVIiwiRCJdLCJMWE5XRFRfTFRFIjoiMjAxNC0xMS0yOFQwMDowMDowMCIsIkxBU1RQUk1EQVRFX0xUIjoiMjAxNC0xMS0yOFQwMDowMDowMCJ9",
    "OrderedBy": "Record ID"
  },
  {
    "Id": 114,
    "CampaignCd": "DEMO_CAMPAIGN",
    "CampaignNm": "Demo Campaign",
    "CampaignId": 5,
    "CreatedDt": "2017-11-28T15:15:20.777",
    "CreatedBy": "Vasiliy Sharapov",
    "StatusCd": "NEW",
    "ModifiedBy": " ",
    "ModifiedDt": null,
    "Attributes": "eyJVc2VyQ2QiOiJ2c2hhcmFwbyIsIlVwbG9hZElkIjoxLCJDYW1wYWlnbkNkIjoiRElSRUNUIiwiR1JPVVBfSU4iOlsiMzEwIiwiMzUwIiwiNDYwIiwiMzYwIl0sIkxYU1RBVF9OSSI6WyJCIiwiMCIsIjEiLCIzIiwiNyIsIjUiLCJMIiwiUiIsIlMiLCJVIiwiRCJdLCJMWE5XRFRfTFRFIjoiMjAxNC0xMS0yOFQwMDowMDowMCIsIkxBU1RQUk1EQVRFX0xUIjoiMjAxNC0xMS0yOFQwMDowMDowMCJ9",
    "OrderedBy": "Timezone"
  },
  {
    "Id": 113,
    "CampaignCd": "DEMO_CAMPAIGN",
    "CampaignNm": "Demo Campaign",
    "CampaignId": 5,
    "CreatedDt": "2017-11-28T15:14:39.073",
    "CreatedBy": "Vasiliy Sharapov",
    "StatusCd": "IN PROGRESS",
    "ModifiedBy": " ",
    "ModifiedDt": null,
    "Attributes": "eyJVc2VyQ2QiOiJ2c2hhcmFwbyIsIlVwbG9hZElkIjoxLCJDYW1wYWlnbkNkIjoiRElSRUNUIiwiR1JPVVBfSU4iOlsiMzEwIiwiMzUwIiwiNDYwIiwiMzYwIl0sIkxYU1RBVF9OSSI6WyJCIiwiMCIsIjEiLCIzIiwiNyIsIjUiLCJMIiwiUiIsIlMiLCJVIiwiRCJdLCJMWE5XRFRfTFRFIjoiMjAxNy0xMS0yOFQwMDowMDowMCIsIkxBU1RQUk1EQVRFX0xUIjoiMjAxNy0xMS0yOFQwMDowMDowMCJ9",
    "OrderedBy": "Record ID"
  },
  {
    "Id": 112,
    "CampaignCd": "DEMO_CAMPAIGN",
    "CampaignNm": "Demo Campaign",
    "CampaignId": 5,
    "CreatedDt": "2017-11-28T08:18:02.643",
    "CreatedBy": "Vasiliy Sharapov",
    "StatusCd": "IN PROGRESS",
    "ModifiedBy": " ",
    "ModifiedDt": null,
    "Attributes": "eyJVc2VyQ2QiOiJ2c2hhcmFwbyIsIlVwbG9hZElkIjoxLCJDYW1wYWlnbkNkIjoiREVNT19DQU1QQUlHTiIsIkdST1VQX0lOIjpbIjMxMCIsIjM1MCIsIjQ2MCIsIjM2MCIsImdnIl0sIkxYU1RBVF9OSSI6WyJCIiwiMCIsIjEiLCIzIiwiNyIsIjUiLCJMIiwiUiIsIlMiLCJVIiwiRCJdfQ==",
    "OrderedBy": "Timezone"
  }
];

// 3 Campaigns records
// /api/clrecords/v1?clid=69&statusCd=DONE&pagenr=1&pagesize=5
export const campaignListRecordsBody = [
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300497908",
    "CallPriority": "HIGH",
    "StatusCd":   "DONE",
    "LastCalledBy": "pblanco",
    "LastCalledDt": "2017-11-06T09:19:20.94",
    "NextCallDt": "2017-12-06T09:19:20.94",
    "NextCallUser": "vsharapo",
    "OrderByCd": "CR.TimeZone"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300450758",
    "CallPriority": null,
    "StatusCd": "NEW",
    "LastCalledBy": "pblanco2",
    "LastCalledDt": "2017-11-09T06:01:00.163",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.Id"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300283908",
    "CallPriority": null,
    "StatusCd": "IN PROGRESS",
    "LastCalledBy": "pblanco",
    "LastCalledDt": "2017-11-06T07:29:12.443",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.TimeZone"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300477176",
    "CallPriority": null,
    "StatusCd": "NEW",
    "LastCalledBy": "Hak",
    "LastCalledDt": "2017-11-03T08:32:49.197",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.Id"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300451584",
    "CallPriority": null,
    "StatusCd": "IN PROGRESS",
    "LastCalledBy": "Keanu",
    "LastCalledDt": "2017-11-06T06:58:14.593",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.TimeZone"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300497908",
    "CallPriority": "HIGH",
    "StatusCd": "NEW",
    "LastCalledBy": "Robert",
    "LastCalledDt": "2017-11-06T09:19:20.94",
    "NextCallDt": "2017-12-06T09:19:20.94",
    "NextCallUser": "Hayden",
    "OrderByCd": "CR.Id"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300450758",
    "CallPriority": null,
    "StatusCd": "NEW",
    "LastCalledBy": "Scarlett",
    "LastCalledDt": "2017-11-09T06:01:00.163",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.TimeZone"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300283908",
    "CallPriority": null,
    "StatusCd": "DONE",
    "LastCalledBy": "Chris",
    "LastCalledDt": "2017-11-06T07:29:12.443",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.Id"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300477176",
    "CallPriority": null,
    "StatusCd": "DONE",
    "LastCalledBy": "pblanco",
    "LastCalledDt": "2017-11-03T08:32:49.197",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.TimeZone"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300451584",
    "CallPriority": null,
    "StatusCd": "DONE",
    "LastCalledBy": "pblanco",
    "LastCalledDt": "2017-11-06T06:58:14.593",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.TimeZone"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300497908",
    "CallPriority": "HIGH",
    "StatusCd": "DONE",
    "LastCalledBy": "pblanco",
    "LastCalledDt": "2017-11-06T09:19:20.94",
    "NextCallDt": "2017-12-06T09:19:20.94",
    "NextCallUser": "Nami",
    "OrderByCd": "CR.Id"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300450758",
    "CallPriority": null,
    "StatusCd": "DONE",
    "LastCalledBy": "pblanco",
    "LastCalledDt": "2017-11-09T06:01:00.163",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.TimeZone"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300283908",
    "CallPriority": null,
    "StatusCd": "DONE",
    "LastCalledBy": "Mark",
    "LastCalledDt": "2017-11-06T07:29:12.443",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.Id"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300477176",
    "CallPriority": null,
    "StatusCd": "DONE",
    "LastCalledBy": "John",
    "LastCalledDt": "2017-11-03T08:32:49.197",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.TimeZone"
  },
  {
    "CampaignCd": "BUSINESS_BANKING",
    "CampaignNm": "Business Banking",
    "AccountId": "5300451584",
    "CallPriority": null,
    "StatusCd": "DONE",
    "LastCalledBy": "Luffy",
    "LastCalledDt": "2017-11-06T06:58:14.593",
    "NextCallDt": null,
    "NextCallUser": null,
    "OrderByCd": "CR.Id"
  },
  // {
  //   "CampaignCd": "BUSINESS_BANKING",
  //   "CampaignNm": "Business Banking",
  //   "AccountId": "5300497908",
  //   "CallPriority": "HIGH",
  //   "StatusCd": "DONE",
  //   "LastCalledBy": "pblanco",
  //   "LastCalledDt": "2017-11-06T09:19:20.94",
  //   "NextCallDt": "2017-12-06T09:19:20.94",
  //   "NextCallUser": "vsharapo"
  // },
  // {
  //   "CampaignCd": "BUSINESS_BANKING",
  //   "CampaignNm": "Business Banking",
  //   "AccountId": "5300450758",
  //   "CallPriority": null,
  //   "StatusCd": "DONE",
  //   "LastCalledBy": "pblanco",
  //   "LastCalledDt": "2017-11-09T06:01:00.163",
  //   "NextCallDt": null,
  //   "NextCallUser": null
  // },
  // {
  //   "CampaignCd": "BUSINESS_BANKING",
  //   "CampaignNm": "Business Banking",
  //   "AccountId": "5300283908",
  //   "CallPriority": null,
  //   "StatusCd": "DONE",
  //   "LastCalledBy": "pblanco",
  //   "LastCalledDt": "2017-11-06T07:29:12.443",
  //   "NextCallDt": null,
  //   "NextCallUser": null
  // },
  // {
  //   "CampaignCd": "BUSINESS_BANKING",
  //   "CampaignNm": "Business Banking",
  //   "AccountId": "5300477176",
  //   "CallPriority": null,
  //   "StatusCd": "DONE",
  //   "LastCalledBy": "pblanco",
  //   "LastCalledDt": "2017-11-03T08:32:49.197",
  //   "NextCallDt": null,
  //   "NextCallUser": null
  // },
  // {
  //   "CampaignCd": "BUSINESS_BANKING",
  //   "CampaignNm": "Business Banking",
  //   "AccountId": "5300451584",
  //   "CallPriority": null,
  //   "StatusCd": "DONE",
  //   "LastCalledBy": "pblanco",
  //   "LastCalledDt": "2017-11-06T06:58:14.593",
  //   "NextCallDt": null,
  //   "NextCallUser": null
  // }
];
