import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { DocumentsTable } from "../components/DocumentsTable";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";
import { Container, Main } from "../styles/dashboard";

interface Documento {
  assinaturas: any[];
  documento: string;
  id: string;
  nome: string;
  tipo: string;
  status: string;
}

export function Documentos() {
  const [size, setSize] = useState<'large' | 'small'>('small');
  const [assinados, setAssinados] = useState<Documento[]>([] as Documento[]);
  const [pendentes, setPendentes] = useState<Documento[]>([] as Documento[]);
  const [isLoading, setIsLoading] = useState(false)
  const { token } = useAuth();

  useEffect(() => {
    async function fetchDocuments() {
      const docsAssinados: any = await api.get('/v1/assinatura-eletronica/documentos/assinados/', {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      const documentosAssinados = docsAssinados.data.results.map((el: any) => ({ ...el, status: 'assinado' }));        

      const docsPendentes: any = await api.get('/v1/assinatura-eletronica/documentos/pendentes/', {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      const documentosPendentes  = docsPendentes.data.results.map((el: any) => ({ ...el, status: 'pendente' }))

      setAssinados(documentosAssinados)
      setPendentes(documentosPendentes)
    }

    if (typeof window !== 'undefined' && token) {
      setIsLoading(true);

      const loadingToaster = toast.loading('Carregando documentos...');
      fetchDocuments().then(() => {
        toast.remove(loadingToaster)
        setIsLoading(false)
        toast.success('Documentos carregados');
      })
    }

  }, [token])

  console.log(isLoading, assinados, pendentes);


  return (
    <Main>
      <Toaster />
      <Header />
      <Sidebar page='documentos' size={size} setSize={setSize} />

      <Container size={size}>
        <h1>Documentos</h1>

        {
          isLoading ? (
            <div className="loading">Carregando...</div>
          ) : (
            <DocumentsTable assinados={assinados} pendentes={pendentes} />
          )
        }
      </Container>
    </Main>
  );
}