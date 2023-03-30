import React, { useState } from "react"
import { useEffect } from "react";
import { StyledModal } from "../../constats/styles";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Modal = ({ button, title, children, openModal, onCloseModal, onSave, loading }) => {
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
          <Footer onClose={handleCloseModal} onSave={onSave} loading={loading} />
        </div>
      </StyledModal>
      {button ? React.cloneElement(button, { onClick: handleOpenModal }) : null}
    </>
  )
}
