import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  setModalOpen: React.MouseEventHandler<HTMLButtonElement>;
}
interface BackgroundStyle{
  position: "fixed";
  top: number;
  bottom: number;
  left: number;
  right: number;
  backgroundColor: string;
  zIndex: number;
}

interface ModalStyle {
  position: 'fixed';
  top: string;
  left: string;
  transform: string;
  backgroundColor: string;
  padding: string
  borderRadius: string
  color: string
}



const BACKGROUND_STYLE: BackgroundStyle ={
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgb(0, 0, 0, 0.7)', 
  zIndex: 1000, 
}

const MODAL_STYLE: ModalStyle = {
  position: "fixed",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: "#fff",
  padding: "250px",
  borderRadius: "10px",
  color: "black"
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, setModalOpen}) => {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div>
            {children}
          </div>
          <button onClick={setModalOpen}>Fechar</button>
        </div>
      </div>
    );
  }

  return null; // ou qualquer coisa que você deseja renderizar quando isOpen for falso
};

export default Modal;
