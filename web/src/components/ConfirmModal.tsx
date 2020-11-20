import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import deleteConfirm from '../images/deleteConfirm.png'
import '../styles/components/confirm-modal.css'

interface ModalStyle {
  type: string;
  orphanage: any;
}

const TransitionsModal = forwardRef((props: ModalStyle, ref: any) => {
  const [open, setOpen] = React.useState(false);

  useImperativeHandle(
    ref,
    () => ({
      handleOpen() {
        setOpen(true);
      }
    })
  )

  function handleClose() {
    setOpen(false);
  };

  function handleDelete() {
    setOpen(false);
  }

  return (
    <div>
      { props.orphanage && (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="paper">
            <div className="content-wrapper">
              <h2 id="transition-modal-title">Excluir! </h2>
              <p id="transition-modal-description">Você tem certeza que quer excluir</p>
              <p>{props.orphanage.name}?</p>
              <div className="button-wrapper">
                <button type="button" onClick={handleClose}>
                  Voltar para a lista
                </button>
                <button type="button" onClick={handleDelete}>
                  Excluir
                </button>
              </div>

            </div>
            <img src={deleteConfirm} alt="confirmation" />
          </div>
        </Fade>
      </Modal>
    )}
    </div>
  );
});

export default TransitionsModal;
