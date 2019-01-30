import React from 'react';
import {observer} from 'mobx-react';


class TodoList extends React.Component {

    createNew(e) {
        if(e.which === 13){
            this.props.store.createTodo(e.target.value)
            e.target.value = ""
        }
    }

    filter(e){
        this.props.store.filter = e.target.value
    }

    toggleComplete(todo) {
        todo.complete = !todo.complete;
    }

    render() {

        const {clearComplete, filter, filteredTodos, todos} = this.props.store;
        const todosList = filteredTodos.map((todo)=>{
            return <li key={todo.id}>
            <input type="checkbox" 
            onChange={this.toggleComplete.bind(this, todo)}
            value={todo.complete} 
            checked={todo.complete}/>{todo.value}</li>
        })
        return (
            <div>
                <h1>Todo</h1>
                <div>{filter}</div>
                <input className="create" type="text" onKeyPress={this.createNew.bind(this)}/>
                <br/>
                <br/>
                <input className="filter" type="text" value={filter} onChange={this.filter.bind(this)}/>
                <ul>{todosList}</ul>
                <a href="#" onClick={clearComplete}>Clear Complete</a>
            </div>
            
            );
    }
}

export default observer(TodoList);