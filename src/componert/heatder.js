import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                 <Navbar dark expand="md">
                    <div className="container d2">
                        {/* <NavbarToggler onClick={this.toggleNav} /> */}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/menu'><span className="fa fa-solid fa-users"></span> Nhân Viên</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/department'><span className="fa fa-address-card fa-lg"></span> Phòng Ban</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/salary'><span className="fa fa-money" ></span> Bảng Lương</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
              
            </div>
        );
    }
}


export default Header;


// import { Link, NavLink } from "react-router-dom";
// import React, { useState } from 'react';


// function Hearder() {
//     return (
//         <div class="topnav">
//             <NavLink to="/Contener" >Home</NavLink>,
//             <NavLink to="/new">News</NavLink>,
//             <NavLink to="/home">Contact</NavLink>,
//         </div>
//     )
// }

// export default Hearder