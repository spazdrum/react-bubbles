import React, { useState } from "react";
import { axiosWithAuth } from '../Utilities/axiosWithAuth';

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
  const [credentials, setCredentials] = useState({
    credentials: {
      username: '',
      password: ''
    }
  })

  const handleChanges = (e) => {
    setCredentials({
      credentials: {
        ...credentials.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', credentials.credentials)
      .then((res) => {
        console.log('js: Login.js: login: axiosWithAuth: res', res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles');
      })
      .catch((err) => {
        console.log('js: Login.js: login: axiosWithAuth: catch: err', err);
      })
      .finally(() => window.location.reload());
  };


  return (
    <div>
      <form onSubmit={login}>
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
  );
};

export default Login;