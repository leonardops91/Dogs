import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import Button from '../Button';
import Input from '../Input';
import { TOKEN_POST, GET_USER } from '../../../api';
import { GlobalContext } from '../../../GlobalContext';


const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const [error, setError] = React.useState();
    const context = React.useContext(GlobalContext);
    
    async function getUser(token) {
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
    }
    
    async function handleSubmit(event) {
      event.preventDefault();
      if(username.validate() && password.validate()) {
       const { url, options } = TOKEN_POST({
         username: username.value,
         password: password.value,
       });
        const response = await fetch(url, options);
        const json = await response.json();
        if(json.data) {
          setError(json.message);
          return;
        }
        window.localStorage.setItem("token", json.token);
        getUser(json.token);
     }
    }

    useEffect(() => {
      const token = window.localStorage.getItem("token");
      if(token) {
        getUser(token)
      }
    }, [])
    return (
      <section>
        <h1>Login</h1>
        {context.darkMode.toString()}
        <form onSubmit={handleSubmit}>
          <Input
            label="Usuário"
            type="text"
            {...username}
          />
          <Input
            label="Senha"
            type="password"
            {...password}
          />
          <Button >Entrar</Button>
        </form>
        {error}
        <Link to="/login/create">Cadastrar</Link>
        <Link to="/login/recover">Esqueci a minha senha</Link>
      </section>
    );
};

export default LoginForm;
