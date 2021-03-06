import {autorun, decorate, observable, computed} from "mobx";

class Todo {
    value
    id
    complete

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}

class TodoStore {
    todos = []
    filter = ""
    get filteredTodos() {
        var matchesFilter = new RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
    }

    createTodo(value) {
        this.todos.push(new Todo(value))
    }

    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete);
        this.todos.replace(incompleteTodos);
    }
}

decorate(TodoStore, {
    todos: observable,
    filter: observable,
    filteredTodos: computed
})

decorate(Todo, {
    value: observable,
    id: observable,
    complete: observable
})



var store = window.store = new TodoStore

export default store

autorun(() => {
    console.log(store.filter)
    console.log(store.todos[0])
})

