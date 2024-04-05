import type { Component } from 'solid-js';
import Dialog from './components/Dialog/Dialog';
import FloatingButton from './components/FloatingButton/FloatingButton';
import { MyContextProvider } from './data/store';

import 'solid-devtools';
import ListOfEntries from './components/ListOfEntries/ListOfEntries';

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
