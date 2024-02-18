import { ParentComponent, createContext, useContext } from 'solid-js';
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
    }
  };

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
