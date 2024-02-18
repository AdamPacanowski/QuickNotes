import { Accessor, ParentComponent, createContext, createSignal, useContext } from 'solid-js';
import { createStore } from 'solid-js/store'; 

interface MyStore {
  isDialogOpen: boolean;
}

interface MyContext {
  // dialogStatus: {
  store: MyStore,
    openDialog: () => void,
    closeDialog: () => void,
  // }
}

const MyContext = createContext<MyContext>();

const MyContextProvider: ParentComponent = (props) => {
  // const [state, setState] = createSignal<boolean>(false);
  const [store, setStore] = createStore<MyStore>({
    isDialogOpen: false,
  });
  // console.log('state2',state)
  const storeMethods = {
    openDialog() {
      console.log('xxx')
      // setState(true)
      setStore("isDialogOpen", true);
    },
    closeDialog() {
      // setState(false)
      setStore("isDialogOpen", false);
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
