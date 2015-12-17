import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export class NavigationBar extends Component {


    constructor(props) {
        super(props);
        this.state = {'opened': null};
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    openMenu(id) {
        this.setState({'opened': id});
    }

    closeMenu(id) {
        this.setState({'opened': null});
    }

    renderSubMenu() {
        /* return the submenus of the selected menu */
        return React.Children.map(this.props.children, (child) => {
            let menuToShow = this.state.opened || this.props.selectedMenu;
            if (child.props.id === menuToShow) {
                let parent = child;
                let submenus = React.Children.map(child.props.children, (child) => {
                    return React.cloneElement(child,
                        {...this.props,
                            menuId:parent.props.id,
                            selected:this.props.selectedSubmenu === child.props.id
                        }
                    );
                });
                return (
                    <ul key={child.props.id} onSelect={this.onSelect}>
                        {submenus}
                    </ul>
                )
            }
        });
    }

    renderChildren() {
        return React.Children.map(this.props.children, (child) => {
            console.log(child.props.id)
            console.log("!!!" + this.props.selectedMenu)
            return React.cloneElement(child,
                {...this.props,
                    mode: this.props.mode,
                    openMenu: this.openMenu,
                    selected:this.props.selectedMenu === child.props.id
                }
            );
        });
    }

    render() {
        return (
            <div className="hmenu" onMouseLeave={this.closeMenu}>
                <ul className="menu">
                    {this.renderChildren()}
                </ul>

                <div className="submenu">
                    { this.props.animation !== 'none' &&
                    <ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={300}
                                             transitionLeaveTimeout={300}>

                        {this.renderSubMenu()}
                    </ReactCSSTransitionGroup>
                    }
                    { this.props.animation === 'none' &&
                    <span>
                    {this.renderSubMenu()}
                </span>
                    }
                </div>
            </div>
        )
    }
}
;

NavigationBar.propTypes = {
    onSelect: React.PropTypes.func.isRequired,          // action to triggen when the user click on a menu
    selectedMenu: React.PropTypes.string,               // selected top menu id
    selectedSubmenu: React.PropTypes.string,            // selected sub menu id
    children: React.PropTypes.array.isRequired,         // list of menu and menu items
    mode: React.PropTypes.oneOf(['mouseover', 'click']),// open the menu on click or on mouseover
    animation: React.PropTypes.string                   // animation : 'slide' or 'none'. You can set any animation and
                                                        // define your animation in a css file
};

NavigationBar.defaultProps = {
    animation: "slide",
    mode: "mouseover"
};