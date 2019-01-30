import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import store from './TodoStore';

// const App = () => {
//     return <div>MobX</div>;
// }

ReactDOM.render(<TodoList store={store}/>, document.querySelector('#root'));