import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateUser from '../../components/CreateUser';
import LoginForm from '../../components/forms/LoginForm';
import PasswordRecover from '../../components/PasswordRecover';
import PasswordReset from '../../components/PasswordReset';

function Login(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginForm />}/>
                <Route path='/create' element={<CreateUser />} />
                <Route path='/recover' element={<PasswordRecover />} />
                <Route path='/reset' element={<PasswordReset />} />
            </Routes>
        </div>
    );
}

export default Login;