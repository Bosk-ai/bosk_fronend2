import React, { useState } from "react"
import { useEffect } from "react";
import styled from "styled-components"
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Modal = ({ button, title, children, openModal, onCloseModal }) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => {
    setOpen(false);
    onCloseModal && onCloseModal();
  };

  useEffect(() => {
    setOpen(openModal)
  }, [openModal])

  return (
    <>
      <StyledModal open={open}>
        <div className="wrapper">
          <Header
            title={title}
            onClose={handleCloseModal}
          />
          {children}
          <Footer onClose={handleCloseModal} />
        </div>
      </StyledModal>
      {button ? React.cloneElement(button, { onClick: handleOpenModal }) : null}
    </>
  )
}

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  transition: all .3s;
  ${({ open }) => open && "opacity: 1; visibility: visible;"}
  padding: 30px 0;
  z-index: 100;
  .wrapper {
    width: 90%;
    max-width: 400px;
    background: #FFFFFF;
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 12px;
    padding: 24px;
    height: max-content;
  }
`