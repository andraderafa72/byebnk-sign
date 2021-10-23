import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Container } from './styles';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function DocumentDisplay({ url }: any) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }
  return (
    <Container>
      <Document
        file={{ url }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div className="pagination">
        <button onClick={e => pageNumber - 1 < 1 ? null : setPageNumber(pageNumber - 1)}>
          {'<'}
        </button>
        <span>
          {pageNumber} de {numPages}
        </span>
        <button onClick={e => pageNumber + 1 > numPages ? null : setPageNumber(pageNumber + 1)}>
          {'>'}
        </button>
      </div>
    </Container>
  );
}