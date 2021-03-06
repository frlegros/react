import React from 'react';

class Avatar extends React.Component{

    render(){
        return(
            <img className="Avatar"
                 src={this.props.user.avatarUrl}
                 alt={this.props.user.name}
                 style={{width:'40px'}}
                 />
        );
    }
}

export default Avatar;