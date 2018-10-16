import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

class HamburgerMobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }

        this.hamburgerPanel = document.querySelector('.primary-menu-mobile');
        this.siteWrapper = document.querySelector('.site-wrapper');
        this.menuItem = document.querySelectorAll('.menu-item > a');

        for (var i = 0; i < this.menuItem.length; i++) {
            this.menuItem[i].addEventListener('click', this.handleClick.bind(this));
        }

    }

    componentDidUpdate(prevProps, prevState) {

        if (!prevState.open) {
            this.hamburgerPanel.style.visibility = 'visible';
            this.siteWrapper.classList.toggle("mobile-nav-mout");

        } else {
            this.hamburgerPanel.style.visibility = 'hidden';
            this.siteWrapper.classList.toggle('mobile-nav-mout');
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
                borderRadius={1}
                animationDuration={0.5}
            />
        );
    }
}

export default HamburgerMobileMenu;