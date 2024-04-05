// Import styles, initialize component theme here.
import '../src/index.css';
import { beforeMount } from '@playwright/experimental-ct-solid/hooks';
import { MyContext } from '../src/data/store';

export type HooksConfig = {};

beforeMount<HooksConfig>(async ({ App, hooksConfig }) => {
  return (
    <MyContext.Provider value={{
      store: {
        keyboardEntries: (hooksConfig as any)?.keyboardEntries,
        isDialogOpen: false,
      },
      clearKeyboardEntries: () => {},
      closeDialog: () => {},
      loadKeyboardEntries: () => {},
      openDialog: () => {},
    }}>
      <App />
    </MyContext.Provider>
  );
});