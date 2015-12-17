import React from 'react';
import ReactDOM from 'react-dom'

export class Container extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                MENU
            </div>
        )
    }
};
ReactDOM.render(
    React.createElement(Container),
    document.getElementById('root')
);