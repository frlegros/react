import React from 'react';
import Avatar from './Avatar.jsx';

class UserInfo extends React.Component{

    render(){
        return(

        <div className="UserInfo">
            <Avatar user={this.props.user} />
            <div className="UserInfo-name">
                {this.props.user.name}
            </div>
        </div>
        );
    }
}

export default UserInfo;