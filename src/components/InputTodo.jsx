function InputTodo({ props }) {
  const { setTodoText, todoText, addTodo } = props;
  return (
    <input
      type="text"
      placeholder="Enter Todo..."
      value={todoText}
      onChange={(e) => setTodoText(e.target.value)}
      className="input-todo"
      onKeyDown={addTodo}
    />
  );
}

export default InputTodo;
