import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";
import logoutImg from '../../assets/img/logout.svg';
import logo from '../../assets/img/logo.png';
import { useHistory } from "react-router-dom";

export function Header () {
  const { logOut } = useAuth()
  const history = useHistory()
  function handleLogout(){
    logOut();
    history.push('/')
  }

  return (
    <Container>
      <img src={logo} alt="" />
      
      
      <button onClick={handleLogout}>
        sair
        <img src={logoutImg} alt="" />
      </button>
    </Container>
  );
}