import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, Input, Label } from "reactstrap";
import { useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {addStaff} from "../redux/ActionCreators"




function ModalAddStaff(props) {
    const dispatch = useDispatch()

    const department = useSelector(state => state.department.departments)
    console.log("department",department)

    const [modal, setModal] = useState(false)
    const [valueStaff, setValueStaff] = useState({
        name: "",
        doB: "",
        salaryScale: "",
        startDate: "",
        department: "",
        annualLeave: "",
        overTime: "",
        salary: "",
    });

 

    const toggle = () => {
        setModal(!modal,)
        setValueStaff(valueStaff)
    }

    const hendleInput = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log("name", value)
        setValueStaff({
            ...valueStaff,
            [name]: value
        });
       
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const departmentid = department.filter((department)=>(department.id === valueStaff.department)
           
        )
        const newStaff = {
            id: props.staff.length +1 ,
            name: valueStaff.name,
            doB: valueStaff.doB,
            department: departmentid,
            salaryScale: valueStaff.salaryScale,
            startDate: valueStaff.startDate,
            annualLeave: valueStaff.annualLeave,
            overTime: valueStaff.overTime,
            image: "/assets/images/alberto.png",
        }
        
        dispatch(addStaff(newStaff))


        console.log("11111111",newStaff)
    }

    return (
        <div>
            <Button
                color="success"
                onClick={ toggle}
            >
                Add Staff
            </Button>
            <Modal
                isOpen={modal} toggle={toggle}
            >
                <ModalHeader toggle={toggle}>
                    Thêm Nhân Viên
                </ModalHeader>
                <ModalBody>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Label>Họ và Tên</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={valueStaff.name}
                                onChange={hendleInput}
                            />

                            <Label>Ngày sinh</Label>
                            <Input
                                type="date"
                                name="doB"
                                id="doB"
                                value={valueStaff.doB}
                                onChange={hendleInput}
                            />

                            <Label>Ngày vào công ty</Label>
                            <Input
                                type="date"
                                name="startDate"
                                id="startDate"
                                value={valueStaff.startDate}
                                onChange={hendleInput}
                            />

                            <Label>Phòng ban</Label>
                            <Input
                                type="select"
                                name="department"
                                id="department"
                                value={valueStaff.department}
                                onChange={hendleInput}>
                                <option value="select">Chọn Phòng Ban</option>
                                <option value="Dept01">Sale</option>
                                <option value="Dept02">HR</option>
                                <option value="Dept03">Marketing</option>
                                <option value="Dept04">IT</option>
                                <option value="Dept05">Finance</option>
                            </Input>


                            <Label>Hệ số lương</Label>
                            <Input
                                type="text"
                                name="salaryScale"
                                id="salaryScale"
                                value={valueStaff.salaryScale}
                                onChange={hendleInput}
                            />

                            <Label>Số ngày nghỉ còn lại</Label>
                            <Input
                                type="text"
                                name="annualLeave"
                                id="annualLeave"
                                value={valueStaff.annualLeave}
                                onChange={hendleInput}
                            />

                            <Label>Số ngày đã làm thêm</Label>
                            <Input
                                type="text"
                                name="overTime"
                                id="overTime"
                                value={valueStaff.overTime}
                                onChange={hendleInput}
                            />

                            <Button
                                type="submit"
                                color="primary"
                                onClick={toggle}
                            > 
                                Add Sraff
                            </Button>
                            <Button onClick={toggle}>
                                Cancel
                            </Button>

                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        </div>

    )

}


export default ModalAddStaff;