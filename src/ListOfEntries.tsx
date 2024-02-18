import styles from './App.module.css';

import { For, type Component } from 'solid-js';
import KeyboardEntry from './KeyboardEntry';
import { useMyContext } from './store';
import { unwrap } from 'solid-js/store';

const ListOfEntries: Component = () => {
  const context = useMyContext();

  return (
    <div class={styles.listOfEntries}>
      <For each={context?.store.keyboardEntries} fallback={"nothing"}>
        {(keyboardEntry) => (
          <KeyboardEntry
            keys={keyboardEntry.keys}
            label={keyboardEntry.label}
          />
        )}
      </For>
    </div>
  );
}

export default ListOfEntries;
