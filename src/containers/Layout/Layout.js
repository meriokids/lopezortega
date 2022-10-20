import React, { Component } from 'react';
import NavbarLight from '../../components/Navbar/Navbar';
import classes from './Layout.module.css';



class Layout extends Component {
  

    render () {
        return (
            <>
               <NavbarLight />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
             
                
               
            </>
        )
    }
}

export default Layout;