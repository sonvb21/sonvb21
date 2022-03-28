import * as Type from "./type"
import { baseUrl} from "../shared/baseUrl"


export const fecthStaff = (dispatch) => {

    return fetch (baseUrl + "staffs")
    .then((res) => res.json())
    .then((res)=> dispatch(addStaff(res)))
}


export const addStaff = (staff) => ({
    type : Type.ADD_STAFF,
    payload : staff
}
)

export const deleteStaff = (staff) => ({
    type : Type.DELETE_STAFF,
    payload : staff
    
})
