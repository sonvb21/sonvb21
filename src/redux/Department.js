import { DEPARTMENTS } from "../shared/staffs"
import * as Type from "./type"


const initState = {
    departments: DEPARTMENTS

}


const Department = (state = initState, action) => {
    switch (action.type) {
        case Type.ADD_STAFF:
            console.log("state...",state)
            return { ...state }
        default:
            return state
    }

}

export default Department;