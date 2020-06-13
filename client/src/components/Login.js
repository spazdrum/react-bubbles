import React, { useState } from "react";
import { axiosWithAuth } from '../Utilities/axiosWithAuth';
import { useHistory } from "react-router-dom";

// const Login = () => {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route
//   return (
//     <>
//       <h1>Welcome to the Bubble App!</h1>
//       <p>Build a login page here</p>
//     </>
//   );
// };

// export default Login;

const Login = (props) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    credentials: {
      username: '',
      password: ''
    }
  })

  const handleChanges = (e) => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        console.log('js: components: login.js: handleSubmit: res', res);
        localStorage.setItem('token', res.data.payload);
        history.push('/protected');
      })
      .catch(err => 
        console.log('js: components: login.js: handleSubmit: err', err.res)
      );
  };


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={credentials.credentials.username}
            onChange={handleChanges}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={credentials.credentials.password}
            onChange={handleChanges}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;