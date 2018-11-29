import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import TodoForm from './components/TodoForm';

import './style/TodoBox.css';


class Todobox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {"id": "0001", "task":"吃饭", "complete": "false"},
                {"id": "0002", "task":"睡觉", "complete": "false"},
                {"id": "0003", "task":"打豆豆", "complete": "true"},
            ]
        };
    };
    

    handleTaskDelete = (taskId) => {
        var data = this.state.data;
        data = data.filter(function(task) {
            return task.id !== taskId;
        });
        this.setState({data});
    }

    handleToggleComplete = (taskId) => {
        var data = this.state.data;
        for(var i in data) {
            if (data[i].id === taskId) {
                data[i].complete = data[i].cpmlete === "true" ? "false" : "true";
                break;
            }
        }
        this.setState({data});
    };

    generatedId = () => {
        return Math.floor(Math.random() * 9000) + 1000;
    };

    handleSubmit = (task) => {
        var data = this.state.data;
        var id = this.generatedId();
        var complete = "false";
        data = data.concat([{"id": id, "task": task, "complete": complete}]);
        this.setState({data});
    };

    render() {
        var statistics = {
            todoCount: this.state.data.length || 0,
            todoCompleteCount: this.state.data.filter(function(item) {
                return item.complete === "true";
            }).length
        };

        return (
            <div className="well">
                <h1 className="text-center">React Todo</h1>
                <TodoList data={this.state.data}
                    deleteTask={this.handleTaskDelete}
                    toggleComplete={this.handleToggleComplete}
                    todoCount={statistics.todoCount}
                    todoCompleteCount={statistics.todoCompleteCount} />
                <TodoForm submitTask={this.handleSubmit} />
            </div>
        );
    }
}

export default Todobox;