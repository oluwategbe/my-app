import React, { Component } from 'react';
import  { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';             

class Header extends Component {
     
    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false 
        }

        //specifying that "toggleNav() function will now be available as "this.toggleNav"
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return(
            <>
                <Navbar dark expand="md">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='mr-auto' href="/">
                            <img src='assets/images/logo.png' height='30' width='41' alt='Restorante de Confusion'/>
                        </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar> 
                                    <NavItem>
                                        <NavLink className='nav-link' to='/home'>
                                            <span className='fa fa-home fa-lg'></span>Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/aboutus'>
                                            <span className='fa fa-info fa-lg'></span>About Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/menu'>
                                            <span className='fa fa-link fa-lg'></span>Menu
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/contactus'>
                                            <span className='fa fa-address-card fa-lg'></span>Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Hello Pelumi</h1>
                                <p>I'm trying to learn react and this is just a sentence so that I can put it inside the Jumbotron lol. So just look at it bro.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }

}

export default Header;