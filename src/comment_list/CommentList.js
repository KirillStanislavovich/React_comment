import React from 'react';
import CommentItem from '../comment_item/CommentItem';
import './CommentList.css';

function CommentList(props) {
  return (
    <div className='comment-list'>
      { props.comments.map(comments => {
        return <CommentItem  
          comments={comments}
          key = {comments.date}
          />
      }) }
    </div>
  )
}

export default CommentList;