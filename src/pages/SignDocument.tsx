import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DocumentDisplay } from "../components/DocumentDisplay";
import { SignCurrentDocument} from "../components/SignDocument";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";
import { Main } from "../styles/document";
import arrow from '../assets/img/arrow.svg';

export function SignDocument(props: any) {
  const [url, setUrl] = useState('');

  const { token } = useAuth();

  useEffect(() => {
    async function fetchDocument() {
      const id = props.match.params.id;
      const { data }: { data: { documento: string } } = await api.get(`/v1/assinatura-eletronica/documentos/${id}`, {
        headers: {
          'Authorization': `Token ${token}`
        },
      });

      const url = data.documento
      setUrl(url)
    }

    fetchDocument()
  }, [props.match.params.id, token])

  return (
    <Main>
      <Link to="/documentos"><img src={arrow} alt="" /> Voltar</Link>
      {url ? (
        <>
          <DocumentDisplay url={url} />
          <SignCurrentDocument id={props.match.params.id} url={url} />
        </>
      ) : (
        <div className="loading"></div>
      )}

    </Main>
  );
}