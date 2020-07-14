import React from 'react';
import StyledPlaylistItem from "./styles/StyledPlaylistItem";
// import TodoList from './components/TodoList';


// function handleTodoFormSubmit(formValues) {
//   console.log('Form submit: ', formValues);
//   const newTodo = {
//     id: PlaylistItem.length + 1,
//     ...formValues,
//   };
//   const newTodoList = [...todoList];
//   newTodoList.push(newTodo);
//   setTodoList(newTodoList);
// }

const removeVideo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

const DanhMucChoi = ({ video, active, played, removeVideo }) => (
  < StyledPlaylistItem active={active} played={played} >
    <div className='wbn-player__video-nr'>{video.num}</div>
    <div className='wbn-player__video-name'>{video.title}</div>
    <div className='wbn-player__video-time'>{video.duration}</div>
    <button onClick={() => removeVideo(index)}>x</button>
  </StyledPlaylistItem >
)

export default DanhMucChoi;