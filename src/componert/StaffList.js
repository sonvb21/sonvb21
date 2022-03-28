import { Button } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardGroup } from "reactstrap";
import ModalAddStaff from "./Modal";
import {useSelector, useDispatch} from "react-redux"
import {deleteStaff} from "../redux/ActionCreators"





const RenderImg = ({ staff }) => {
    console.log("imgstaff...", staff.image)
    return (

        <Card >
            <Link to={`/hihi/${staff.id}`} >
                <CardImg width="100%" src={staff.image} alt={staff.name} />
            </Link>
        </Card>

    )

}

function StaffList(props) {
    const dispatch = useDispatch()

    const handleDelete = (id) =>{
        dispatch(deleteStaff(id))
        console.log("id",id)
    }

    
    const staff =  props.staff.map((staff) => {
        return (
            <CardGroup className="col-6 col-md-4 col-lg-2" >
                <div key={staff.id} >
                    <RenderImg staff={staff} />
                    <div>{staff.name}</div>
                    <Button onClick={() => handleDelete(staff.id)}>Xóa</Button>
                </div>
               
            </CardGroup>
        )
    })
    return (
        <div className="container">
            <div className="row" >
                <ModalAddStaff staff= {props.staff}/>
            </div>
            <div className="row" >
                {staff}
            </div>

        </div>
    )
}


export default StaffList;