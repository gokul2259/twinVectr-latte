import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

class HamburgerMobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false,
         }
        this.hamburgerPanel = document.querySelector('.primary-menu-mobile');
    }

    componentDidUpdate(prevProps, prevState) {
        if(!prevState.open) {
            this.hamburgerPanel.style.visibility = 'visible'; 
        } else {
            this.hamburgerPanel.style.visibility = 'hidden'; 
        }
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    
    render() { 
        return ( 
            <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={35}
                height={25}
                strokeWidth={1}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
            />
         );
    }
}
 
export default HamburgerMobileMenu;