import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../style/Todoitem.css'

class Todoitem extends Component {

    toggleComplete = () => {
        this.props.toggleComplete(this.props.taskId);
    };

    deleteTask = () => {
        this.props.deleteTask(this.props.taskId);
    };

    handleMouseOver = () => {
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "inline";
    };

    handleMouseOut = () => {
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "none";
    };
    
    render() {
        var task = this.props.task;
        var classes = "list-group-item";
        var itemChecked;

        if (this.props.complete === "true") {
            task = <s>{task}</s>;
            itemChecked = true;
            classes += " list-group-item-success";
        } else {
            itemChecked = false;
        }

        return (
            <li className={classes} onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>
                <input type="checkbox" checked={itemChecked} onChange={this.toggleComplete}
                       className="pull-left" />
                {task}
                <div className="pull-right">
                    <button type="button" className="btn btn-xs close" onClick={this.deleteTask}
                            ref="deleteBtn">删除</button>
                </div>
            </li>
        );
    }
}

export default Todoitem;