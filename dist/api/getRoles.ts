// api/roles/v1
export const getRolesBody = [
    {
        "Id": 1,
        "RoleCd": "CL_CONTENT_VIEWER",
        "RoleNm": "View CL content",
        "RoleDesc": "User with this role can view the CL content",
        "CreatedBy": "vsharapo",
        "CreatedDt": "2017-12-15T13:17:40.93"
    },
    { "Id": 2, "RoleCd": "EXCLUDE_FROM_REPORTS", "RoleNm": "Do not include in reports", "RoleDesc": "Agent with this role will not be included in reports", "CreatedBy": "vsharapo", "CreatedDt": "2018-03-06T11:22:16.64" },
    { "Id": 3, "RoleCd": "CREATE_TICKLER_CASE", "RoleNm": "Create tickler case", "RoleDesc": "User with this role is able to create a tickler case from Account view", "CreatedBy": "vsharapo", "CreatedDt": "2018-04-17T14:25:26.717" },
    { "Id": 4, "RoleCd": "TICKLER_AGENT", "RoleNm": "Tickler Agent", "RoleDesc": "User with this role have access to ticklers fuctionality", "CreatedBy": "vsharapo", "CreatedDt": "2018-04-17T14:27:37.15" },
    { "Id": 5, "RoleCd": "TICKLER_ADMIN", "RoleNm": "Tickler Admin", "RoleDesc": "User with this role have access to ticklers configuration", "CreatedBy": "vsharapo", "CreatedDt": "2018-04-17T14:27:37.15" },
    { "Id": 6, "RoleCd": "TICKLER_VIEW", "RoleNm": "View ticklers on Account view", "RoleDesc": "User with this role can see tickler cases associated with an account", "CreatedBy": "vsharapo", "CreatedDt": "2018-07-09T17:28:01.207" },
    { "Id": 7, "RoleCd": "TICKLER_DELETE", "RoleNm": "Tickler Delete", "RoleDesc": "User with this role is able to delete certain ticklers", "CreatedBy": "vsharapo", "CreatedDt": "2018-10-05T13:54:51.11" },
    { "Id": 8, "RoleCd": "BPM_ADMIN", "RoleNm": "BPM Admin", "RoleDesc": "User with this role have access to bpm task list", "CreatedBy": "vsharapo", "CreatedDt": "2018-10-05T13:54:51.11" }
];

// /api/userroles/v1

// {
//     "UserCd": "pblanco",
//     "RoleCd": "CL_CONTENT_VIEWER",
//     "ActiveFlg":"Y",
//     "CreatedBy": "vsharapo"
// }
