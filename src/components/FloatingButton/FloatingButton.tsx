import styles from './FloatingButton.module.css';

import { type Component } from 'solid-js';

import { useMyContext } from '../../data/store';

const FloatingButton: Component = () => {
  const context = useMyContext();
  const openDialog = () => context?.openDialog();
  const clearKeyboardEntries = () => context?.clearKeyboardEntries();

  return (
    <>    
      <button class={styles.floatingButton} onClick={openDialog}>
        <div></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
      </button>
      {/* <button onClick={clearKeyboardEntries}>
        Clear data
      </button> */}
    </>
  );
};

export default FloatingButton;
