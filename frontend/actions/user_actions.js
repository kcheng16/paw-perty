import * as userApiUtil from "../util/user_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"

const receiveUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

//=============================================================Thunk
export const fetchUser = userId => dispatch => (
    userApiUtil.fetchUser(userId).then(user=> dispatch(receiveUser(user)))
)