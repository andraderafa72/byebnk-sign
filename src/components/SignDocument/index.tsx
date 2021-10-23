import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { Container } from "./styles";

interface SignDocumentProps {
  id: string;
  url: string;
}

export function SignCurrentDocument ({id, url}: SignDocumentProps) {
  const {token} = useAuth();
  async function handleSignDocument(){
    try {
      await api.post(`/v1/assinatura-eletronica/documentos/${id}`, {
        headers: {
          'Authorization': `Token ${token}`,
        }
      })
    } catch (error) {
      
    }
  }

  return (
    <Container>
      <a href={url} target="_blank" rel="noreferrer">Baixar</a>
      <button className="sign" onClick={handleSignDocument}>Assinar</button>
    </Container>
  );
}