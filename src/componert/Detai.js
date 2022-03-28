import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg,CardGroup,RenderImage ,List,CardBody,Breadcrumb,BreadcrumbItem} from "reactstrap";
import dateFormat from "dateformat";


const RenderBreadcrumb = ({ staff }) => {
    return (
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem>
          <Link to="/menu">Nhân Viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>{staff.name}</BreadcrumbItem>
      </Breadcrumb>
    );
  };


const RenderDetail = ({ staff }) => {
    return (
     
      <List type="unstyled" style={{ textAlign: "left" }}>
        <CardBody>
          <p><h3>Họ và tên: {staff.name}</h3></p>
          <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
          <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {staff.department.name }</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {staff.overTime}</p>
        </CardBody>
      </List>
      
  
    );
  };


function Detai({staff}) {
console.log("staffid",staff)

    return (
        <div className="container">
    
         
          <><div className="row">
            <div className="col-12">
              <RenderBreadcrumb staff={staff} />
            </div>
          </div>
            <div className="row">
              <div className="col-12 col-md-8 col-xl-9">
                <RenderDetail staff={staff} />
              </div>
            </div>
          </> 
          
        </div>
      );
    
}


export default Detai;