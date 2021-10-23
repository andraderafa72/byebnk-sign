import { Link } from "react-router-dom";
import { Container } from "./styles";
import arrow from '../../assets/img/arrow.svg';
import file from '../../assets/img/file.svg';
import chevron from '../../assets/img/chevron.svg';

interface SidebarProps {
  page: string;
  size: 'large' | 'small';
  setSize: React.Dispatch<React.SetStateAction<"large" | "small">>;
}


export function Sidebar({page, size, setSize}: SidebarProps) {

  function handleChangeSize(){
    setSize(size === 'small' ? 'large' : 'small');
  }

  return (
    <Container size={size}>
      <img src={chevron} alt="" onClick={handleChangeSize} />

      <nav>
        <li>
          <Link to="/documentos" className={page === 'documentos' ? 'active' : ''}>
            Documentos
            <img src={arrow} alt="" />
          </Link>
        </li>
      </nav>
      
      <nav className="icons">
        <li>
          <Link to="/documentos" className={page === 'documentos' ? 'active' : ''}>
            <img src={file} alt="" />
          </Link>
        </li>
      </nav>
    </Container>
  );
}