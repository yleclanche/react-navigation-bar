import React, {Component} from 'react';
import classNames from 'classnames';


export class Menu extends Component{
    constructor(props){
        super(props);
        this.click = this.click.bind(this);
        this.mouseenter = this.mouseenter.bind(this);
    }

    click(e){
        if(this.props.mode==='click')
            this.props.openMenu(this.props.id)
        let props = Object.assign({}, props, {menuId:this.props.id});
        if(!(this.props.disabled))
            this.props.onSelect(props, e)
    }

    mouseenter(e){
        if(this.props.mode==='mouseover')
            this.props.openMenu(this.props.id)
    }

    render(){
        console.log(this.props.selected)
        let cssClasses = classNames(this.props.className, {
            active: this.props.selected,
            disabled: this.props.disabled
        });
        return (
            <li className={cssClasses} onClick={this.click} onMouseEnter={this.mouseenter}>
                <label>{this.props.content}</label>
            </li>
        )
    }
};


Menu.propTypes = {
    id: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool             // disable the action on click and add a 'disabled' css class
};

Menu.defaultProps = {
    disabled: false
};