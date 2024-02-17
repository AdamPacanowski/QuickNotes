import { Accessor, ParentComponent, createContext, createSignal, useContext } from 'solid-js';
import { createStore } from 'solid-js/store'; 

interface Store {
  isDialogOpen: boolean;
}

interface MyContext {
  // dialogStatus: {
    isDialogOpen: Accessor<boolean>,
    openDialog: () => void,
    closeDialog: () => void,
  // }
}

const MyContext = createContext<MyContext>();

const MyContextProvider: ParentComponent = (props) => {
  const [state, setState] = createSignal<boolean>(false);
  console.log('state2',state)
  const dialogStatus = {
    isDialogOpen: state,
    openDialog() {
      console.log('xxx')
      setState(true)
      // setState("isDialogOpen", true);
      console.log('sss', state);
    },
    closeDialog() {
      setState(false)
    }
  };

  return (
    <MyContext.Provider value={{
      isDialogOpen: state,
      openDialog: dialogStatus.openDialog,
      closeDialog: dialogStatus.closeDialog,
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
