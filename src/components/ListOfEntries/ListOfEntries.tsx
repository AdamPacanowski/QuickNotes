import styles from './ListOfEntries.module.css';

import { For, type Component } from 'solid-js';
import KeyboardEntry from '../KeyboardEntry/KeyboardEntry';
import { useMyContext } from '../../data/store';

const ListOfEntries: Component = () => {
  const context = useMyContext();

  return (
    <div 
      class={styles.listOfEntries}
      role="table"
    >
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
