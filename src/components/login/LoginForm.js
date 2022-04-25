import React, { useState } from 'react';
import './LoginForm.css';

export const LoginForm = ({ logged, showFormSignUp, studentOrTeacher, setStudentOrTeacher }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (email.trim().length < 1 || password.trim().length < 1) {
            setError('Please fill in all fields');
        } else if (studentOrTeacher === 'student') {
            if (email === window.localStorage.getItem('email')) {
                if (password === window.localStorage.getItem('password')) {
                    if (window.localStorage.getItem('type') === 'student') {
                        setError('');
                        logged();
                    } else {
                        setError('You are not a student. Try again.');
                    }
                } else {
                    setError('Wrong password. Try again.');
                }
            } else {
                setError('Incorrect Email. Try again.');
            }
        } else {
            if (email === window.localStorage.getItem('email')) {
                if (password === window.localStorage.getItem('password')) {
                    if (window.localStorage.getItem('type') === 'teacher') {
                        setError('');
                        logged();
                    } else {
                        setError('You are not a teacher. Try again.');
                    }
                } else {
                    setError('Wrong password. Try again.');
                }
            } else {
                setError('Incorrect Email. Try again.');
            }
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleTypeChange = e => {
        const value = e.target.value
        setStudentOrTeacher(value);
    }

    return (
        <form className='login-form-container' onSubmit={handleSubmit}>
            {
                (error.length > 0) && (<div className="login-form-error">{error}</div>)
            }
            <div className='login-form-title'>Please fill in your unique admin login details below</div>
            <label htmlFor='email' className='login-form-input-label'>Email address</label>
            <div>
                <input name='email' autoComplete='off' id='email' type='email' className='login-form-input' value={email} onChange={handleEmailChange} />
            </div>
            <label htmlFor='password' className='login-form-input-label'>Password</label>
            <div>
                <input name='password' autoComplete='off' id='password' value={password} className='login-form-input' onChange={handlePasswordChange} />
            </div>
            <div className='type'>
                <div className='log-in-link' onClick={showFormSignUp}>Sign Up</div>
                <div>
                    <label className='login-form-input-label' htmlFor="cars">Type: </label>
                    <select className='login-form-select' name="cars" id="cars" onChange={handleTypeChange}>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>
            </div>
            <button className={`login-form-button-${studentOrTeacher}`} type='submit' onSubmit={handleSubmit}>Log In</button>
        </form>
    )
}
