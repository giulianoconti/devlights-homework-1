import loginSuccess from './svg/loginSuccess.svg';
import './LoginFormSuccess.css';

export const LoginFormSuccess = ({ unLogged }) => {
    return (
        <div className="login-form-success-container">
            <h2 className='login-form-success-title'>Successful Login! <img className='login-form-success-check' src={loginSuccess} alt='login success'></img></h2>
            <h3 className='login-form-success-email'>Email: {window.localStorage.getItem('email')}</h3>
            <h3 className='login-form-success-type'>Type: {window.localStorage.getItem('type')}</h3>
            <button className={`login-form-success-button-${window.localStorage.getItem('type')}`} type='submit' onClick={unLogged}>Log Out</button>
        </div>
    )
}
