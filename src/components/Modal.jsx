import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import consoleLog from '../consoleLog';

export default function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
      consoleLog('open Modal');
    } else {
      dialog.current.close();
      consoleLog('close Modal');
    }
  }, [open]);
  consoleLog('Modal is rendered');
  return createPortal(
    <dialog className="modal" ref={dialog} >
      {children}
    </dialog>,
    document.getElementById('modal')
  );

}
