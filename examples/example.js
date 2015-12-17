import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {NavigationBar, Menu, MenuItem} from '../src';

export class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedMenu:null,
            selectedSubMenu:null
        };
        this.select = this.select.bind(this);
    }

    select(item, e){
        console.log(item)
        console.log(e)
        this.setState({
            selectedMenu:item.menuId,
            selectedSubMenu:item.id
        });
        console.log('go to ' + item.url);
    }

    render(){
        return (
            <div>
                <NavigationBar selectedMenu={this.state.selectedMenu}
                               selectedSubmenu={this.state.selectedSubMenu}
                               onSelect={this.select}>
                    <Menu key="menu1" id="menu1" content="MENU 1">
                        <MenuItem key="submenu1-1" id="submenu1-1" url="/menu1/sub1" content="Submenu 1"/>
                        <MenuItem key="submenu1-2" id="submenu1-2" url="/menu1/sub2" content="Submenu 2"/>
                        <MenuItem key="submenu1-3" id="submenu1-3" url="/menu1/sub3" content="Submenu 3 disabled" disabled="true"/>
                    </Menu>
                    <Menu key="menu2" id="menu2" content="MENU 2">
                        <MenuItem key="submenu2-1" id="submenu2-1" url="/menu2/sub1" content={<strong>Submenu 1</strong>}/>
                        <MenuItem key="submenu2-2" id="submenu2-2" url="/menu2/sub2" content="Submenu 2"/>
                    </Menu>
                    <Menu key="menudis" id="menudis" content="DISABLED MENU" disabled={true}>
                        <MenuItem key="menudis-1" id="menudis-1" url="/menudis/sub1" content="Submenu 1"/>
                        <MenuItem key="menudis-2" id="menudis-2" url="/menudis/sub2" content="Submenu 2"/>
                    </Menu>
                    <Menu key="menu3" id="menu3" content="MENU 3">
                        <MenuItem key="submenu3-1" id="submenu3-1" url="/menu3/sub1" content="Submenu 1"/>
                        <MenuItem key="submenu3-2" id="submenu3-2" url="/menu3/sub2" content="Submenu 2"/>
                    </Menu>
                </NavigationBar>

                <NavigationBar selectedMenu={this.state.selectedMenu}
                               selectedSubmenu={this.state.selectedSubMenu}
                               mode="click"
                               onSelect={this.select}>
                    <Menu key="m2menu1" id="m2menu1" content="MENU 1">
                        <MenuItem key="m2menu1-1" id="m2menu1-1" url="/menu1/sub1" content="Submenu 1"/>
                        <MenuItem key="m2menu1-2" id="m2menu1-2" url="/menu1/sub2" content="Submenu 2"/>
                        <MenuItem key="m2menu1-3" id="m2menu1-3" url="/menu1/sub3" content="Submenu 3"/>
                    </Menu>
                    <Menu key="m2menu2" id="m2menu2" content="MENU 2">
                        <MenuItem key="m2menu2-1" id="m2menu2-1" url="/menu2/sub1" content="Submenu 1"/>
                        <MenuItem key="m2menu2-2" id="m2menu2-2" url="/menu2/sub2" content="Submenu 2"/>
                    </Menu>
                </NavigationBar>

                <div>
                    {this.state.selectedMenu===null && <span>Nothing selected.</span>}
                    {this.state.selectedMenu!==null && <p>Menu : {this.state.selectedMenu} selected.</p>}
                    {this.state.selectedSubMenu!==null && <p>Submenu : {this.state.selectedSubMenu} selected.</p>}
                </div>
            </div>
        )
    }
};
ReactDOM.render(
    React.createElement(Container),
    document.getElementById('root')
);