import React, { useState } from 'react';
import showPassword from './svg/showPassword.svg';
import hidePassword from './svg/hidePassword.svg';
import errorPassword from './svg/errorPassword.svg';
import clearText from './svg/clearText.svg';
import './LoginForm.css';

export const LoginForm = ({ logged, showFormSignUp, studentOrTeacher, setStudentOrTeacher }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [typePassword, setTypePassword] = useState('password');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const arrayEmail = JSON.parse('[' + window.localStorage.getItem('email') + ']');
        const arrayPassword = JSON.parse('[' + window.localStorage.getItem('password') + ']');
        if (email.trim().length < 1 || password.trim().length < 1) {
            setError('Please fill in all fields');
        } else if (studentOrTeacher === 'student') {
            if (arrayEmail.includes(email)) {
                const userPosition = arrayEmail.indexOf(email);
                if (arrayPassword[userPosition].includes(password + '-')) {
                    if (arrayPassword[userPosition] === password + '-student') {
                        setError('');
                        window.localStorage.setItem('emailLogged', email);
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
            if (arrayEmail.includes(email)) {
                const userPosition = arrayEmail.indexOf(email);
                if (arrayPassword[userPosition].includes(password + '-')) {
                    if (arrayPassword[userPosition] === password + '-teacher') {
                        setError('');
                        window.localStorage.setItem('emailLogged', email);
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
    const clearEmail = () => {
        setEmail('');
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleVisiblePassword = () => {
        setIsVisiblePassword(!isVisiblePassword);
        typePassword === 'password' ? setTypePassword('text') : setTypePassword('password');
    }
    const handleTypeChange = e => {
        const value = e.target.value
        setStudentOrTeacher(value);
    }

    return (
        <form className='login-form-container' onSubmit={handleSubmit}>
            {
                (error.length > 0) && (<div className="login-form-error"><img src={errorPassword} alt='error password'></img>{error}</div>)
            }
            <div className='login-form-title'>Please fill in your unique admin login details below</div>
            <label htmlFor='email' className='login-form-input-label'>Email address</label>
            <div>
                <input name='email' autoComplete='off' id='email' type='email' className='login-form-input' value={email} onChange={handleEmailChange} />
                {
                    email
                        ? <i className='eye-password'><img src={clearText} alt='show password' onClick={clearEmail} /></i>
                        : <i className='eye-password'></i>
                }
            </div>
            <label htmlFor='password' className='login-form-input-label'>Password</label>
            <div>
                <input name='password' autoComplete='off' id='password' value={password} type={typePassword} className='login-form-input' onChange={handlePasswordChange} />
                {
                    isVisiblePassword
                        ? <i className='eye-password'><img src={showPassword} alt='show password' onClick={handleVisiblePassword} /></i>
                        : <i className='eye-password'><img src={hidePassword} alt='show password' onClick={handleVisiblePassword} /></i>
                }
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
