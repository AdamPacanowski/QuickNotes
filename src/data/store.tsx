import { ParentComponent, createContext, createEffect, useContext } from 'solid-js';
import { createStore } from 'solid-js/store'; 

interface KeyboardEntry {
  keys: Array<Array<string>>;
  label: string;
}

export type KeyboardEntries = Array<KeyboardEntry>;

interface MyStore {
  isDialogOpen: boolean;
  keyboardEntries: KeyboardEntries; 
}

interface MyContext {
  store: MyStore,
  openDialog: () => void,
  closeDialog: () => void,
  loadKeyboardEntries: (keyboardEntries: KeyboardEntries) => void;
  clearKeyboardEntries: () => void;
}

const MyContext = createContext<MyContext>();

const MyContextProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore<MyStore>({
    isDialogOpen: false,
    keyboardEntries: [],
  });

  const storeMethods = {
    openDialog() {
      setStore("isDialogOpen", true);
    },
    closeDialog() {
      setStore("isDialogOpen", false);
    },
    loadKeyboardEntries(keyboardEntries: KeyboardEntries) {
      setStore("keyboardEntries", keyboardEntries);
    },
    clearKeyboardEntries() {
      setStore("keyboardEntries", []);
    }
  };

  createEffect(() => {
    const keyboardEntriesFromLocalStorage = localStorage.getItem('keyboardEntries');

    if (keyboardEntriesFromLocalStorage) {
      storeMethods.loadKeyboardEntries(
        JSON.parse(keyboardEntriesFromLocalStorage)
      );

      console.log('Data from local storage loaded.');
    }
  });

  return (
    <MyContext.Provider value={{
      store,
      ...storeMethods,
    }}>
      { props.children }
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext)
};

export {
  MyContextProvider,
  useMyContext,
};
