import { registrationFailure, registrationRequest, registrationSuccess } from '@/features/auth/registrationSlice';
import { URL } from '@/helpers/helper';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter()
  const loading = useSelector((state) => state.registration.loading);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registrationRequest());

    // Call your API to handle registration with 'firstName', 'email', and 'password'
    // For example, using axios:
    axios.post(`${URL}/rest/createenduser`, { firstName, email, password })
      .then((response) => {
        dispatch(registrationSuccess());
        toast.success("Registration done successfully!")
        setTimeout(()=>{
          router.push('/')
        },3000)
        
      })
      .catch((error) => {
        dispatch(registrationFailure(error.message));
        toast.error("ohh something went wrong!")
      });
  } 
  return (
    <div className='offset-3 w-50 p-10'>
    <br /><br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" className="form-control"  value={firstName} onChange={(e) => setFirstName(e.target.value)} id="examplefirstNameInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div><br />
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}  id="email" aria-describedby="emailHelp" placeholder="Enter email" />
        </div><br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control"  value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Password" />
        </div><br />
        <button type="submit" className="btn btn-primary">{loading ? 'Registering...' : 'Register'}</button>
        <ToastContainer />
      </form>

    </div>
  )
}

export default Register