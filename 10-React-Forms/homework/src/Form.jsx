import React, { useState } from 'react';

export const validate = (input) =>{
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
}

export default function Form() {
  const [input, setInput] = useState({
    username: '',
    password: '',
  })
  const handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  const [errors, setErrors] = useState({});

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          className={errors.username && 'danger'}
          type="text"
          name="username"
          value={input.username}
          onChange={handleInputChange}
        />
        {errors.username && (<p className="danger">{errors.username}</p>)}
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          className={errors.password && 'danger'}
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />
        {errors.password && (<p className="danger">{errors.password}</p>)}
      </div>
      <div>
        <input 
          type='submit' 
          disabled={Object.keys(errors).length !== 0 || !input.password || !input.username}
        />
      </div>
    </form>

  )
}
