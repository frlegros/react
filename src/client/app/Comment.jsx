import React from 'react';
import moment from "moment";
import UserInfo from './UserInfo.jsx';

class Comment extends React.Component{

    formatDate(date) {
        return date ? moment(date).format("YYYY-MM-DD HH:mm:ss") : "";
    }
    render(){

        return(
        <div className="Comment">
            <UserInfo user={this.props.author} />
            <div className="Comment-text">
                {this.props.text}
            </div>
            <div className="Comment-date">
                {this.formatDate(this.props.date)}
            </div>
        </div>
        );
    }
}

export default Comment;
