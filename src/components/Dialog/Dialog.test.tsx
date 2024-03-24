import { MockedFunction, describe, expect, it, vi } from "vitest";

import Dialog from "./Dialog";
import {render} from '@solidjs/testing-library';

import { MyContext, MyContextProvider, useMyContext } from '../../data/store';

import { loadData } from "../../data/dataLoader";

vi.mock('../../data/dataLoader', () => {
  return {
    loadData: vi.fn(),
  };
});

describe('Dialog component', () => {
  it('should render dialog and handle basic use case', async () => {
    let context: MyContext | undefined;

    const { findByRole, findByText } = render(() => {
      context = useMyContext();
      context?.openDialog();

      return <Dialog />;
    }, {
      wrapper: MyContextProvider
    });

    const dialog = await findByRole('dialog');
    expect(dialog).toBeTruthy();

    const textarea = await findByRole('textbox') as HTMLTextAreaElement;
    textarea.value = `
    [
      {
        "keys": [["Ctrl", "K"], ["Ctrl", "M"]],
        "label": "Maksymalizacja edytora grupy",
        "code": "workbench.action.toggleMaximizedPanel"
      }
    ]
    `;

    const loadButton = await findByText('Load');
    loadButton.click();

    const loadDataMock = (loadData as MockedFunction<typeof loadData>);
    expect(loadDataMock.mock.calls.length).toEqual(1);
    expect(loadDataMock.mock.calls[0][0]).toEqual(textarea.value);

    expect(context?.store.isDialogOpen).toBeFalsy();
  });
});
