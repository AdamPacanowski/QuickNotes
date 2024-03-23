import {describe, it, expect} from 'vitest';
import {render} from '@solidjs/testing-library';
import FloatingButton from './FloatingButton';
import { MyContext, MyContextProvider, useMyContext } from '../../data/store';

describe('FloatingButton component', () => {
  it('should render and handle click', async () => {
    let context: MyContext | undefined;

    const { findByRole } = render(() => {
      context = useMyContext();

      return <FloatingButton />;
    }, {
      wrapper: MyContextProvider
    });

    (await findByRole("button")).click();

    expect(context?.store.isDialogOpen).toBeTruthy();
  });
});