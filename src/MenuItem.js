import React, {Component} from 'react';
import classNames from 'classnames';

export class MenuItem extends Component{
    constructor(props){
        super(props);
        this.click = this.click.bind(this);
    }

    click(e){
        if(!(this.props.disabled))
            this.props.onSelect(this.props, e)
    }

    render(){
        let cssClasses = classNames(this.props.className, {
            active: this.props.selected,
            disabled: this.props.disabled
        });
        return (
            <li className={cssClasses} onClick={this.click}>
                {this.props.content}
            </li>
        )
    }
};


MenuItem.propTypes = {
    id: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool             // disable the action on click and add a 'disabled' css class
};

MenuItem.defaultProps = {
    disabled: false
};