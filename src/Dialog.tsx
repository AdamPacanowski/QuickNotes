import styles from './KeyboardEntry.module.css';

import { createEffect, type Component } from 'solid-js';

import { useMyContext } from './store';

const Dialog: Component = () => {
  const context = useMyContext();

  let dialogRef: HTMLDialogElement | undefined;
  return (
    <dialog 
      open={context?.store.isDialogOpen} /* Variable assignment before DOESN'T work! */
      class={ styles.dialog } ref={dialogRef}>
      <button onClick={() => context?.closeDialog()}>Close</button>
      <textarea />
      <button>Load</button>
    </dialog>
  );
};

export default Dialog;
