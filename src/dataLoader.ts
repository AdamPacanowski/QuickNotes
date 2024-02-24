import { KeyboardEntries } from "./store";

export const loadData = (
  data: string, 
  injectData: ((data: KeyboardEntries) => void) | undefined
): KeyboardEntries => {
  try {
    const object = JSON.parse(data);
    // tbd validation
    const keyboardEntries = object as KeyboardEntries;

    injectData?.(keyboardEntries);

    localStorage.setItem('keyboardEntries', JSON.stringify(keyboardEntries));
  }
  catch (e) {
    alert('Problem with loading data');
  }
  finally {
    return [];
  }
};
