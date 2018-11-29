import React, {Component} from 'react';

class TodoFooter extends Component {
    render() {
        return (
            <li className="list-group-item">{this.props.todoCompleteCount}已完成 / {this.props.todoCount}总数</li>
        )
    }
};

export default TodoFooter;