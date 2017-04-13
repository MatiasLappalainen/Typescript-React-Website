import * as React from 'react';
import HeaderButton from './HeaderButton';
interface HeaderProps {};

interface HeaderState {text: string};

class Header extends React.Component<HeaderProps, HeaderState> {
    
    handleClick(){

    }

    render() {
        return (
        <div className="header wrapper center-wrapper">
        
            <HeaderButton text="header-button" /> 

        </div>
        );
    }
}

export default Header;
