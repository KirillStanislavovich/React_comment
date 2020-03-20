import React, { useState, useEffect } from 'react';
import Context from './context';
import CommentList from './comment_list/CommentList';
import AddComment from './AddComment/AddComment';
import './index.css';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (localStorage.comments !== undefined) {
      setComments(JSON.parse(localStorage.getItem('comments')));
    }
  }, [])

  function addComment(name, text) {
    setComments(comments.concat([{
      author: name,
      text: text,
      date: new Date().toLocaleString()
    }]))
  }

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  function removeComment(date) {
    setComments(comments.filter(comment => comment.date !== date));
  }

  return (
    <Context.Provider value={{removeComment: removeComment}}>
      <div className='wrapper'>
        <h1>Список комментариев</h1>
        <AddComment onCreate={addComment}/>
        {comments.length ? (
          <CommentList comments={comments} />
        ) : (
          <p>Пока нет комментариев</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
