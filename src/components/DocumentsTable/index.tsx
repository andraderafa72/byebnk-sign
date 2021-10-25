import { DocsTableButton } from "./DocsTableButton";
import { FiltersDiv, Table } from "./styles";
import check from '../../assets/img/check.svg';
import time from '../../assets/img/time.svg';
import { useState } from "react";

interface Documento {
  assinaturas: any[];
  documento: string;
  id: string;
  nome: string;
  tipo: string;
  status: string;
}

interface DocumentsTableProps {
  assinados: Documento[];
  pendentes: Documento[];
}

export function DocumentsTable({ assinados, pendentes }: DocumentsTableProps) {
  const [filtro, setFiltro] = useState<string>('todos')
  const [documentos, setDocumentos] = useState<Documento[]>([...assinados, ...pendentes])

  function handleChangeFilter(value: string) {
    if(value === 'assinados') {
      setDocumentos(assinados)
    } else if(value === 'pendentes'){
      setDocumentos(pendentes)
    } else {
      setDocumentos([...assinados, ...pendentes]);
    }

    setFiltro(value)
  }


  return (
    <>
      <FiltersDiv>
        <span>Filtrar por: </span>
        <select name="filtros" id="flitros" value={filtro} onChange={e => handleChangeFilter(e.target.value)}>
          <option value="none">Todos os documentos</option>
          <option value="assinados">✔️ Assinados</option>
          <option value="pendentes">❌ Pendentes</option>
        </select>
      </FiltersDiv>
      <Table>
        <tbody>
          {documentos.map(el => {
            return (
              <tr key={el.id}>
                <td>
                  {el.status === 'pendente' ? (
                    <img src={time} style={{padding: '.2rem'}} alt="" />
                  ) : (
                    <img src={check} alt="" />
                  )}
                </td>
                <td>{el.nome}</td>
                <td>{el.tipo[0].toUpperCase() + el.tipo.slice(1, el.tipo.length).replaceAll('-', ' ')}</td>
                <td>
                  <DocsTableButton id={el.id} isSigned={el.status === 'assinado'} url={el.documento} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  );
}