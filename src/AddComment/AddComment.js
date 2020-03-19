import React, { useState } from 'react';

function AddComment({ onCreate }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    if(name.trim() && text.trim()) {
      onCreate(name, text);
      setName('');
      setText('');
    }
  }
  
  return (
    <form className='form' onSubmit={submitHandler}>
      <label>Введите Ваше имя
        <input className='input form__name' value={name} onChange={event => setName(event.target.value)} required />
      </label> 
      <label>Введите комментарий
        <input className='input form__text' value={text} onChange={event => setText(event.target.value)} required />
      </label> 
      <button type='submit' className='button'>Отправить</button>
    </form>
  )
}

export default AddComment;