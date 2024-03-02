import styles from './Dialog.module.css';

import { type Component, onMount, createEffect } from 'solid-js';

import { useMyContext } from './store';
import { loadData } from './dataLoader';

/*
[
{
  "keys": [["A", "B"]],
  "label": "Test xx"
}
]
*/

const Dialog: Component = () => {
  const context = useMyContext();
  
  let dialogRef: HTMLDialogElement | undefined;
  let textareaRef: HTMLTextAreaElement | undefined;

  createEffect(() => {
    if (context?.store.isDialogOpen && textareaRef) {
      textareaRef.value = JSON.stringify(context.store.keyboardEntries);
    }
  })

  const onLoadButtonClick = () => {
    const text = textareaRef?.value;

    if (text) {
      loadData(text, context?.loadKeyboardEntries);
    }

    context?.closeDialog();
  }

  return (
    <dialog 
      open={context?.store.isDialogOpen} /* Variable assignment before DOESN'T work! */
      class={ styles.dialog } ref={dialogRef}>
      <button onClick={() => context?.closeDialog()}>Close</button>
      <textarea ref={textareaRef} />
      <button onClick={onLoadButtonClick}>Load</button>
    </dialog>
  );
};

export default Dialog;
