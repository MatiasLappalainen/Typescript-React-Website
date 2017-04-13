import * as React from 'react';

interface HeaderButtonProps { text: string; };

interface HeaderButtonState { text: string; };

class HeaderButton extends React.Component<HeaderButtonProps, HeaderButtonState> {
    constructor(props: HeaderButtonProps) {
        super(props);
        this.state = {text: this.props.text};
    }
    
    handleClick(e: any) : void{

        this.setState({text: 'Hello'});
        
    }

    render(){
        return (<button className="self-center" onClick={e => this.handleClick(e)}>{this.state.text}</button>);
    }
}

export default HeaderButton;
