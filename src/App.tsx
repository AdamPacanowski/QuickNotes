import styles from './App.module.css';

import type { Component } from 'solid-js';
import KeyboardEntry from './KeyboardEntry';

const App: Component = () => {
  return (
    <div class={styles.listOfEntries}>
      {/* <KeyboardEntry 
        keys={[['A', 'B']]}
        label="Test"
      />
      <KeyboardEntry 
        keys={[['A', 'B', 'C']]}
        label="Test"
      /> */}
      <KeyboardEntry 
        keys={[['A', 'B'], ['C', 'D']]}
        label="Test"
      />
      <KeyboardEntry 
        keys={[['A', 'B'], ['C', 'D']]}
        label="Test test test"
      />
    </div>
  );
};

export default App;
