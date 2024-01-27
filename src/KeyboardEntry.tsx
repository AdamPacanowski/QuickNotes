import type { Component } from 'solid-js';
import { For } from "solid-js";

import styles from './KeyboardEntry.module.css';

interface KeyboardEntryProps {
  keys: string[][];
  label: string;
}

const KeyboardEntry: Component<KeyboardEntryProps> = ({
  keys,
  label
}: KeyboardEntryProps) => {
  return (
    <div class={styles.keyboardEntry}>
      <For each={keys}>
        {(set) => (
          <div class={styles.set}>
            <For each={set}>
              {(key) => (
                <div class={styles.key}>{key}</div>
              )}
            </For>
          </div>
        )}
      </For>
      <div>
        {label}
      </div>
    </div>
  );
};

export default KeyboardEntry;
