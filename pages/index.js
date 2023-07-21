import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../features/auth/loginSlice'; // <-- Import the loginRequest action creator
import { loginFailure, loginSuccess } from '@/features/auth/loginSlice';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL } from '@/helpers/helper';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const loading = useSelector((state) => state.login.loading); // <-- Use the login slice state
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    // Call your API to handle login with 'email' and 'password'
    // For example, using axios:
    axios.post(`${URL}/rest/auth`, { email, password })
      .then((response) => {
        dispatch(loginSuccess());
        console.log('response',response)
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
        toast.success("You have loggedIn ")
        setTimeout(()=>{
          router.push('/home')
        },3000)
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
        toast.error("User is not registered!")
      });
  };
  return (
    <div className='offset-3 w-50 p-10'>
    <br /><br />
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div><br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}  id="exampleInputPassword1" placeholder="Password" />
        </div><br />
        <button type="submit"  className="btn btn-primary" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      </form>
      <ToastContainer />

    </div>
    
  )
}

export default Login;