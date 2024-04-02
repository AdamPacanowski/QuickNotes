import { describe, expect, it } from "vitest";
import { render, screen } from '@solidjs/testing-library';
import ListOfEntries from "./ListOfEntries";
import { MyContext, MyContextProvider, useMyContext } from "../../data/store";

describe('ListOfEntries component', () => {
  it('should render component', async () => {
    let context: MyContext | undefined;

    render(() => {
      context = useMyContext();
      context?.loadKeyboardEntries([{
        label: 'Test 1',
        keys: [['A', 'B']]
      }, {
        label: 'Test 2',
        keys: [['C', 'D']]
      }])

      return <ListOfEntries />
    }, {
      wrapper: MyContextProvider
    });

    const tables = await screen.findAllByRole('table');
    expect(tables).toHaveLength(1);

    await screen.findByText('Test 1');
    await screen.findByText('Test 2');
  });
});