import './LoginFormSuccess.css';

export const LoginFormSuccess = ({ unLogged, studentOrTeacher }) => {
    return (
        <div className="login-form-success-container">
            <h2 className='login-form-success-title'>Ingreso exitoso!</h2>
            <h3 className='login-form-success-email'>Correo electrónico: alumno@test.com</h3>
            <h3 className='login-form-success-type'>Tipo: {studentOrTeacher === 'student' ? 'alumno' : 'profesor'}</h3>
            <button className={`login-form-success-button`} type='submit' onClick={unLogged}>Log Out</button>
        </div>
    )
}
