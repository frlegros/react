import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Clock from './Clock.jsx';
import Welcome from './Welcome.jsx';
import Comment from './Comment.jsx';

var author = {
    name: 'Author: Facebook React',
    avatarUrl: 'https://facebook.github.io/react/img/logo.svg'
};

class App extends React.Component {

    render () {
        return(
            <div>

            <Clock/>
            <Clock/>
            <Welcome name="Franck"/>
            <Welcome name="Sara"/>
            {/*<AwesomeComponent/>*/}
            <Comment text="Components and Props: https://facebook.github.io/react/docs/components-and-props.html" author={author} date="2016-11-14"/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
