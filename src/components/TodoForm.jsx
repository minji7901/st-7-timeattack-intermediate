import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    // TODO: 리덕스의 reducer 로 상태 변경할 수 있게 해주세요.
    const dispatch = useDispatch();
    dispatch(addTodo(title, content));

    e.target.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <label>제목:</label>
      <input name="title" type="text" />
      <label>내용:</label>
      <input name="content" type="text" />
      <button type="submit">추가</button>
    </form>
  );
}
