import React, { Component } from 'react';
import  { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {

    render(){
        return(
            <>
                <Navbar dark>
                    <div className='container'>
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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