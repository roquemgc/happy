import React, { forwardRef, useImperativeHandle } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import deleteConfirmation from '../images/deleteConfirmation.svg'
import '../styles/components/confirm-modal.css'

interface Props {
  type: string;
  handleDelete?: (id: number) => void;
  orphanage: any;
}

const TransitionsModal = forwardRef((props: Props, ref: any) => {
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

  function handleClickDelete() {
    (props as any).handleDelete(props.orphanage.id)
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
              <p>{ props.orphanage.name }?</p>
              <div className="button-wrapper">
                <button type="button" onClick={handleClose}>
                  Voltar para a lista
                </button>
                <button type="button" onClick={handleClickDelete}>
                  Excluir
                </button>
              </div>
            </div>
            <img src={deleteConfirmation} alt="confirmation" />
          </div>
        </Fade>
      </Modal>
      ) }
    </div>
  );
});

export default TransitionsModal;
