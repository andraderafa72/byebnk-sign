import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DocumentDisplay } from "../components/DocumentDisplay";
import { SignCurrentDocument} from "../components/SignDocument";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";
import { Main } from "../styles/document";
import arrow from '../assets/img/arrow.svg';

export function SignDocument(props: any) {
  const [doc, setDoc] = useState({} as any);

  const { token } = useAuth();

  useEffect(() => {
    async function fetchDocument() {
      const id = props.match.params.id;
      const { data }: { data: { documento: string } } = await api.get(`/v1/assinatura-eletronica/documentos/${id}`, {
        headers: {
          'Authorization': `Token ${token}`
        },
      });

      setDoc(data)
    }

    fetchDocument()
  }, [props.match.params.id, token])

  return (
    <Main>
      <Link to="/documentos"><img src={arrow} alt="" /> Voltar</Link>
      {doc.documento ? (
        <>
          <DocumentDisplay url={doc.documento} />
          <SignCurrentDocument id={props.match.params.id} name={doc.nome} />
        </>
      ) : (
        <div className="loading"></div>
      )}

    </Main>
  );
}