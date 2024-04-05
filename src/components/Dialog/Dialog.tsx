import styles from './Dialog.module.css';

import { type Component, onMount, createEffect } from 'solid-js';

import { useMyContext } from '../../data/store';
import { loadData } from '../../data/dataLoader';

/*
[
{
  "keys": [["Ctrl", "K"], ["Ctrl", "M"]],
  "label": "Maksymalizacja edytora grupy",
  "code": "workbench.action.toggleMaximizedPanel"
},
{
  "keys": [["Ctrl", "1"]],
  "label": "Aktywacja pierwszej grupy edytora"
},
{
  "keys": [["Ctrl", "2"]],
  "label": "Aktywacja drugiej grupy edytora"
},
{
  "keys": [["Ctrl", "0"]],
  "label": "Aktywacja sidebaru"
},
{
  "keys": [["Ctrl", "K"], ["Ctrl", "L"]],
  "label": "Wywołaj tooltip"
},
{
  "keys": [["Ctrl", "."]],
  "label": "Otwórz menu 'Quick fixów'"
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
