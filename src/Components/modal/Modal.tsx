import React, { ReactNode } from "react";
import './ModaStyle.sass'

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



const BACKGROUND_STYLE: BackgroundStyle ={
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgb(0, 0, 0, 0.7)', 
  zIndex: 1000, 
}



const Modal: React.FC<ModalProps> = ({ isOpen, children, setModalOpen}) => {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div className="Modal-Style-Div">
          <div>
            {children}
          </div>
          <button className="btn-fechar-modal" onClick={setModalOpen}>Fechar</button>
        </div>
      </div>
    );
  }

  return null; // ou qualquer coisa que você deseja renderizar quando isOpen for falso
};

export default Modal;
