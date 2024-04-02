// Import styles, initialize component theme here.
// import '../src/common.css';
import { beforeMount } from '@playwright/experimental-ct-solid/hooks';
import { MyContextProvider } from '../src/data/store';

export type HooksConfig = {};

beforeMount<HooksConfig>(async ({ App }) => {
  return (
    <MyContextProvider>
      <App />
    </MyContextProvider>
  );
});