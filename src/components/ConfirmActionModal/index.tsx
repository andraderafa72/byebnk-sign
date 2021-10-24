import Modal from 'react-modal';
import { ModalContent } from './styles';

interface ConfirmActionModalProps {
  modalIsOpen: boolean;
  type: string, 
  documentName: string,
  onRequestClose: () => void;
  handleRejectDocument: () => Promise<void>, 
  handleSignDocument: () => Promise<void>, 
}

const customStyles = {
  content: {
    maxWidth: '500px',
    width: '100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1rem',
  },
};

Modal.setAppElement('#root')

export function ConfirmActionModal({ modalIsOpen, onRequestClose, type, handleRejectDocument, handleSignDocument, documentName }: ConfirmActionModalProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmar ação"
      style={customStyles}
    >
      <ModalContent type={type}>
        <h3>Confirmar <span>{type === 'Reject' ? 'rejeição' : 'assinatura'}</span> do documento.</h3>
        <p>Documento: <strong>{documentName}</strong></p>

        <div className="buttons">
          <button className="cancel" onClick={onRequestClose}>Cancelar</button>
          <button className="confirm" onClick={type === 'Reject' ? handleRejectDocument : handleSignDocument}>Confirmar</button>
        </div>
      </ModalContent>
    </Modal>
  );
}