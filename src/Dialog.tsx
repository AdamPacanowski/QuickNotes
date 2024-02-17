import styles from './KeyboardEntry.module.css';

import { useContext, type Component } from 'solid-js';

import { useMyContext } from './store';

const Dialog: Component = () => {
  const context = useMyContext();
  const isOpen = context?.isDialogOpen;
  console.log('dialog isOpen', isOpen?.());
  let dialogRef: HTMLDialogElement | undefined;
  return (
    <dialog 
      open={isOpen?.()}
      class={ styles.dialog } ref={dialogRef}>
      <button onClick={() => dialogRef?.close()}>Close</button>
      <textarea />
      <button>Load</button>
    </dialog>
  );
};

export default Dialog;
