import React, { useContext } from 'react';
import Context from '../context';

function CommentItem(props) {
  const { removeComment } = useContext(Context);
  return (
    <div className='comment-item' >
      <div>
        <h2>{ props.comments.author }</h2>
        <p>{ props.comments.text }</p>
        <p>{ props.comments.date }</p>
      </div>
      <button className='rm' onClick={() => removeComment(props.comments.date)}>Удалить</button>
    </div>
  )
}

export default CommentItem;