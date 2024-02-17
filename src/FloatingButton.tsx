import { useContext, type Component } from 'solid-js';

import {  useMyContext } from './store';

const FloatingButton: Component = () => {
  const context = useMyContext();
  const onClick = () => context?.openDialog();
  console.log('onClick', onClick)
  return (
    <button onClick={onClick}>
      Load data
    </button>
  );
};

export default FloatingButton;
