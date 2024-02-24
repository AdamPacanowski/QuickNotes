import { useContext, type Component } from 'solid-js';

import {  useMyContext } from './store';

const FloatingButton: Component = () => {
  const context = useMyContext();
  const openDialog = () => context?.openDialog();
  const clearKeyboardEntries = () => context?.clearKeyboardEntries();

  return (
    <>    
      <button onClick={openDialog}>
        Load data
      </button>
      <button onClick={clearKeyboardEntries}>
        Clear data
      </button>
    </>
  );
};

export default FloatingButton;
