import React, { ReactNode, useRef, useEffect } from "react";
import './ModaStyle.sass'

interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  setModalOpen: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface BackgroundStyle {
  position: "fixed";
  top: number;
  bottom: number;
  left: number;
  right: number;
  backgroundColor: string;
  zIndex: number;
}

const BACKGROUND_STYLE: BackgroundStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
};

const Modal: React.FC<ModalProps> = ({ isOpen, children, setModalOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        // Convertendo o evento para o tipo esperado
        const reactEvent = event as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>;
        setModalOpen(reactEvent);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setModalOpen]);

  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div ref={modalRef} className="Modal-Style-Div">
          <div>{children}</div>
          <button
            className="btn-fechar-modal"
            onClick={(event) => setModalOpen(event)}
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
