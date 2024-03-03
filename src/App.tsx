import styles from './App.module.css';

import type { Component } from 'solid-js';
import KeyboardEntry from './KeyboardEntry';
import Dialog from './Dialog';
import FloatingButton from './FloatingButton';
import { MyContextProvider } from './store';

import 'solid-devtools';
import ListOfEntries from './ListOfEntries';

const App: Component = () => {
  return (
    <>
      <MyContextProvider>
        <FloatingButton />
        <Dialog />
        <ListOfEntries />
      </MyContextProvider>
    </>
  );
};

export default App;
