import type { Component } from 'solid-js';
import KeyboardEntry from './KeyboardEntry';

const App: Component = () => {
  return (
    <>
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
    </>
  );
};

export default App;
