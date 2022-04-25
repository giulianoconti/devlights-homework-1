import React, { useState } from 'react';
import './LoginForm.css';

export const LoginForm = ({ logged, showFormSignUp, studentOrTeacher, setStudentOrTeacher }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (email.trim().length < 1 || password.trim().length < 1) {
            setError('Por favor rellena todos los campos.');
        } else if (email === 'alumno@test.com') {
            if (password === 'alumno123') {
                if (studentOrTeacher === 'student') {
                    setError('');
                    logged();
                } else {
                    setError('Por favor selecciona un tipo de usuario correcto.');
                }
            } else {
                setError('Contraseña incorrecta. Intentar otra vez.');
            }
        } else if (email === 'profesor@test.com') {
            if (password === 'profesor123') {
                if (studentOrTeacher === 'teacher') {
                    setError('');
                    logged();
                } else {
                    setError('Por favor selecciona un tipo de usuario correcto.');
                }
            } else {
                setError('Contraseña incorrecta. Intentar otra vez.');
            }
        } else {
            setError('Correo electrónico incorrecto. Intentar otra vez.');
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
            <div className='login-form-title'>Complete a continuación sus datos de inicio de sesión</div>
            <label htmlFor='email' className='login-form-input-label'>Correo electrónico</label>
            <input name='email' autoComplete='off' id='email' type='email' className='login-form-input' value={email} onChange={handleEmailChange} />
            <label htmlFor='password' className='login-form-input-label'>Contraseña</label>
            <input name='password' autoComplete='off' id='password' value={password} type='password' className='login-form-input' onChange={handlePasswordChange} />
            <div className='type'>
                <div className='log-in-link' onClick={showFormSignUp}>Registrarse</div>
                <div>
                    <label className='login-form-input-label' htmlFor="cars">Tipo: </label>
                    <select className='login-form-select' name="cars" id="cars" onChange={handleTypeChange}>
                        <option value="student">Alumno</option>
                        <option value="teacher">Profesor</option>
                    </select>
                </div>
            </div>
            <button className={`login-form-button-${studentOrTeacher}`} type='submit' onSubmit={handleSubmit}>Iniciar sesión</button>
        </form>
    )
}
