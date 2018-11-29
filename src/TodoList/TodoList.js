import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Todoitem from './components/Todoitem';
import TodoFooter from './components/TodoFooter';
import './style/TodoList.css';

class TodoList extends Component {
    render() {
        var taskList = this.props.data.map(function(listItem) {
            return (
                <Todoitem
                    taskId={listItem.id}
                    key={listItem.id}
                    task={listItem.task}
                    complete={listItem.complete}
                    deleteTask={this.props.deleteTask}
                    toggleComplete={this.props.toggleComplete} />
            )
        }, this);

        return (
            <ul className="list-group">
                {taskList}
                <TodoFooter todoCount={this.props.todoCount} todoCompleteCount={this.props.todoCompleteCount} />
            </ul>
        );
    }
}

export default TodoList;