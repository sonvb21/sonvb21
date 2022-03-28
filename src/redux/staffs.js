import { STAFFS } from "../shared/staffs"
import * as Type from "./type"


const staffs = (state = {
    staffs: []
}, action) => {
    switch (action.type) {
        case Type.ADD_STAFF:
            return { ...state, staffs: action.payload ,}

        case Type.DELETE_STAFF:
            let idStaff = state.staffs
            idStaff = idStaff.filter((staff) => (staff.id !== action.payload));
            return { ...state, staffs: idStaff }
        default:
            return { ...state }
    }

}



export default staffs;