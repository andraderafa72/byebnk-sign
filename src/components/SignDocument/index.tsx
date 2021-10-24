import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { ConfirmActionModal } from "../ConfirmActionModal";
import { Container } from "./styles";

interface SignDocumentProps {
  id: string;
  name: string;
}

export function SignCurrentDocument({ id, name }: SignDocumentProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [type, setType] = useState<string>('');
  const { token } = useAuth();
  const history = useHistory()

  function closeModal() {
    setModalIsOpen(false);
  }
  
  async function handleSignDocument() {
    closeModal()
    const loading = toast.loading('Assinando documento...')
    try {
      await api.post(`/v1/assinatura-eletronica/documentos/${id}/assinar/`, {}, {
        headers: {
          'Authorization': `Token ${token}`,
        }
      })
      toast.remove(loading)
      history.push('/documentos')
    } catch (error) {
      toast.remove(loading)
      toast.error('Ocorreu um erro ao assinar documento, tente recarregar a página.')
    }
  }

  async function handleRejectDocument() {
    closeModal()
    const loading = toast.loading('Assinando documento...')
    try {
      await api.post(`/v1/assinatura-eletronica/documentos/5a11817a-4dd6-4aad-9b2d-fc7012479d08/assinar/`, {}, {
        headers: {
          'Authorization': `Token ${token}`,
        }
      })
      toast.remove(loading)

      history.push('/documentos')
    } catch (error) {
      toast.remove(loading)
      toast.error('Ocorreu um erro ao assinar documento, tente recarregar a página.')
    }
  }

  function handleReject() {
    setType('Reject')
    setModalIsOpen(true)
  }

  function handleSign() {
    setType('Sign')
    setModalIsOpen(true)
  }

  return (
    <Container>
      <ConfirmActionModal
        modalIsOpen={modalIsOpen}
        onRequestClose={closeModal}
        type={type}
        handleRejectDocument={handleRejectDocument}
        handleSignDocument={handleSignDocument}
        documentName={name}
      />
      <Toaster />
      <button className="reject" onClick={handleReject}>Rejeitar</button>
      <button className="sign" onClick={handleSign}>Assinar</button>
    </Container>
  );
}