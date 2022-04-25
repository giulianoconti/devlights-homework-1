import { useState } from "react";
import showPassword from './svg/showPassword.svg';
import hidePassword from './svg/hidePassword.svg';
import clearText from './svg/clearText.svg';
import errorPassword from './svg/errorPassword.svg';

export const Signup = ({ showFormLogIn }) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('student');
    const [error, setError] = useState('');

    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [typePassword, setTypePassword] = useState('password');

    const handleSubmit = e => {
        e.preventDefault();
        if (name.length > 0 && surname.length > 0 && email.length > 0 && password.length > 0) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('surname', surname);
            window.localStorage.setItem('email', email);
            window.localStorage.setItem('password', password);
            window.localStorage.setItem('type', type);
            showFormLogIn();
        } else {
            setError('Fill all fields.');
        }
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleSurnameChange = e => {
        setSurname(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const clearName = () => {
        setName('');
    }
    const clearSurname = () => {
        setSurname('');
    }
    const clearEmail = () => {
        setEmail('');
    }
    const handleVisiblePassword = () => {
        setIsVisiblePassword(!isVisiblePassword);
        typePassword === 'password' ? setTypePassword('text') : setTypePassword('password');
    }
    const handleTypeChange = e => {
        const value = e.target.value
        setType(value);
    }

    return (
        <form className='login-form-container' onSubmit={handleSubmit}>
            {
                (error.length > 0) && (<div className="login-form-error"><img src={errorPassword} alt='error password'></img>{error}</div>)
            }
            <div className='login-form-title'>Please fill in your unique admin login details below</div>
            <label htmlFor='name' className='login-form-input-label'>Name</label>
            <div>
                <input name='name' autoComplete='off' id='name' type='name' className='login-form-input' value={name} onChange={handleNameChange} />
                {
                    name
                        ? <i className='eye-password'><img src={clearText} alt='show password' onClick={clearName} /></i>
                        : <i className='eye-password'></i>
                }
            </div>
            <label htmlFor='surname' className='login-form-input-label'>Last name</label>
            <div>
                <input name='surname' autoComplete='off' id='surname' type='name' className='login-form-input' value={surname} onChange={handleSurnameChange} />
                {
                    surname
                        ? <i className='eye-password'><img src={clearText} alt='show password' onClick={clearSurname} /></i>
                        : <i className='eye-password'></i>
                }
            </div>
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
                <div className='log-in-link' onClick={showFormLogIn}>Log In</div>
                <div>
                    <label className='login-form-input-label' htmlFor="cars">Type: </label>
                    <select className='login-form-select' name="cars" id="cars" onChange={handleTypeChange}>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>
            </div>
            <button className={`login-form-button`} type='submit' onSubmit={handleSubmit}>Sign Up</button>
        </form>
    )
}
