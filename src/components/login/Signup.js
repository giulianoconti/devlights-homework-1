import { useState } from 'react';

export const Signup = ({ showFormLogIn }) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('student');

    const handleClick = e => {
        e.preventDefault();
        const tipo = type === 'student' ? 'alumno' : 'profesor';
        if (name.trim().length < 1 || surname.trim().length < 1 || email.trim().length < 1 || password.trim().length < 1) {
            console.log('Complete todos los campos')
        } else {
            console.log('[ Nombre: ' + name, ']-[ Apellido: ' + surname, ']-[ Correo: ' + email, ']-[ Contraseña: ' + password, ']-[ Tipo: ' + tipo + ' ]');
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
    const handleTypeChange = e => {
        const value = e.target.value
        setType(value);
    }

    return (
        <form className='login-form-container'>
            <div className='login-form-title'>Complete a continuación sus datos para registrarse</div>
            <label htmlFor='name' className='login-form-input-label'>Nombre</label>
            <input name='name' autoComplete='off' id='name' type='name' className='login-form-input' value={name} onChange={handleNameChange} />
            <label htmlFor='surname' className='login-form-input-label'>Apellido</label>
            <input name='surname' autoComplete='off' id='surname' type='name' className='login-form-input' value={surname} onChange={handleSurnameChange} />
            <label htmlFor='email' className='login-form-input-label'>Correo electrónico</label>
            <input name='email' autoComplete='off' id='email' type='email' className='login-form-input' value={email} onChange={handleEmailChange} />
            <label htmlFor='password' className='login-form-input-label'>Contraseña</label>
            <input name='password' autoComplete='off' id='password' value={password} type='password' className='login-form-input' onChange={handlePasswordChange} />
            <div className='type'>
                <div className='log-in-link' onClick={showFormLogIn}>Iniciar sesión</div>
                <div>
                    <label className='login-form-input-label' htmlFor='cars'>Tipo: </label>
                    <select className='login-form-select' name='cars' id='cars' onChange={handleTypeChange}>
                        <option value='student'>Alumno</option>
                        <option value='teacher'>Profesor</option>
                    </select>
                </div>
            </div>
            <button className={`login-form-button`} type='submit' onClick={handleClick}>Registrarse</button>
        </form>
    )
}
