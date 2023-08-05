/* eslint-disable arrow-parens */
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map((todo) => (
      <TodoListItem todo={todo} key={todo.id} />
    ))}
  </div>
);
export default TodoList;
