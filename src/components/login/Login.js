import React, { useState } from 'react';
import { Signup } from './Signup';
import { LoginForm } from './LoginForm';
import { LoginFormSuccess } from './LoginFormSuccess';
import './Login.css';

export const Login = () => {
    const [isLogged, setIsLogged] = useState(window.localStorage.getItem('isLogged') === 'true' ? true : false);
    const [studentOrTeacher, setStudentOrTeacher] = useState('student');
    const [wantToSignUp, setWantToSignUp] = useState(false);

    const logged = () => {
        setIsLogged(true);
        window.localStorage.setItem('isLogged', 'true');
        window.localStorage.setItem('guy', studentOrTeacher);
    }
    const unLogged = () => {
        setStudentOrTeacher('student');
        window.localStorage.setItem('isLogged', 'false');
        setIsLogged(false);
    }

    const showFormLogIn = () => {
        setStudentOrTeacher('student');
        setWantToSignUp(false);
    }
    const showFormSignUp = () => {
        setWantToSignUp(true);
    }

    return (
        <main>
            {
                wantToSignUp
                    ? (
                        <section className={`login-form-signup`}>
                            <Signup studentOrTeacher={studentOrTeacher} showFormLogIn={showFormLogIn} />
                        </section>

                    ) : (
                        <section className={`login-form-${isLogged ? window.localStorage.getItem('guy') : studentOrTeacher}`}>
                            <h5 className='student-or-teacher'>Inicio de sesión de administrador de Stax Food</h5>
                            {
                                isLogged
                                    ? <LoginFormSuccess unLogged={unLogged} />
                                    : <LoginForm logged={logged} studentOrTeacher={studentOrTeacher} setStudentOrTeacher={setStudentOrTeacher} showFormSignUp={showFormSignUp} />
                            }
                        </section>
                    )
            }
        </main>
    )
}
