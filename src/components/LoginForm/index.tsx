import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Form, InputWrapper } from "./styles";
import logo from '../../assets/img/logo.png';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { signIn } = useAuth()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await signIn(username, password)
      toast.success('Seja bem-vindo!');
      return history.push('/documentos')
    } catch (error) {
      console.log(error);
      toast.error('Usuário ou senha incorretos!');
    }
  }

  return (
    <>
      <Toaster />
      <Form action="" onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <InputWrapper>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            name="username"
            required
          />
          <label htmlFor="name" className={username.length > 0 ? 'active' : ''}>CPF/CNPJ</label>
        </InputWrapper>

        <InputWrapper>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            required
          />
          <label htmlFor="password" className={password.length > 0 ? 'active' : ''}>Senha</label>
        </InputWrapper>
        <button type="submit">Entrar</button>
      </Form>
    </>
  );
}