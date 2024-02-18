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
        <div class={styles.listOfEntries}>
          <KeyboardEntry 
            keys={[['A', 'B']]}
            label="Test"
          />
          <KeyboardEntry 
            keys={[['A', 'B', 'C']]}
            label="Test"
          />
          <KeyboardEntry 
            keys={[['A', 'B'], ['C', 'D']]}
            label="Test"
          />
          <KeyboardEntry 
            keys={[['A', 'B'], ['C', 'D']]}
            label="Test test test"
          />
          <KeyboardEntry
            keys={[['A', 'B']]}
            label="Test"
          />
          <KeyboardEntry
            keys={[['A', 'B', 'C']]}
            label="Test"
          />
          <KeyboardEntry
            keys={[['A', 'B'], ['C', 'D']]}
            label="Test"
          />
          <KeyboardEntry
            keys={[['A', 'B'], ['C', 'D']]}
            label="Test test test"
          />
        </div>
      </MyContextProvider>
    </>
  );
};

export default App;
