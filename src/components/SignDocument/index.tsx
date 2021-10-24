import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { Container } from "./styles";

interface SignDocumentProps {
  id: string;
  url: string;
}

export function SignCurrentDocument ({id, url}: SignDocumentProps) {
  const {token} = useAuth();
  const history = useHistory()
  
  async function handleSignDocument(){
    const loading = toast.loading('Assinando documento...')
    try {
      const now = new Date();
      await axios.post(`https://hmg.bbapi.byebnk.com/v1/assinatura-eletronica/documentos/${id}/assinar`, {
        dados_extra: {
          assinadoEm: now
        }
      }, {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'text/plain;charset=utf-8' 
        }
      })
      toast.remove(loading)
      
      history.push('/documentos')
    } catch (error) {
      toast.remove(loading)
      console.log(error);
      toast.error('Ocorreu um erro ao assinar documento, tente recarregar a página.')
    }
  }

  return (
    <Container>
      <Toaster />
      <a href={url} target="_blank" rel="noreferrer">Baixar</a>
      <button className="sign" onClick={handleSignDocument}>Assinar</button>
    </Container>
  );
}