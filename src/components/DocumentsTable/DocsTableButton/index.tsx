import { Link } from "react-router-dom"
import { Container } from "./styles";
import arrow from '../../../assets/img/arrow.svg';
import { useState } from "react";
interface DocsTableButtonProps {
  id: string;
  isSigned: boolean;
  url: string;
}

export function DocsTableButton({ id, isSigned, url }: DocsTableButtonProps) {
  const [isDownloadVisible, setIsDownloadVisible] = useState(false)

  return (
    <Container signed={isSigned}>
      <Link to={`/documento/${isSigned ? 'visualizar' : 'assinar'}/${id}`}>
        {!isSigned ? 'Assinar' : 'Visualizar'}
      </Link>
      <img src={arrow} alt="" onClick={() => setIsDownloadVisible(!isDownloadVisible)} />
      <div className={`wrapper ` + (isDownloadVisible ? 'visible' : '')}>
        <a href={url} target="_blank" rel="noreferrer">Download</a>
      </div>
    </Container>
  );
}