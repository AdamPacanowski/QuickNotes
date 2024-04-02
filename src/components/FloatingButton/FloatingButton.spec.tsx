import { test, expect } from '@playwright/experimental-ct-solid';
import FloatingButton from './FloatingButton';
// import { MyContext, MyContextProvider, useMyContext } from '../../data/store';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  // let context: MyContext | undefined;

  const component = await mount(<FloatingButton />);
  // console.log('xxx', await component.innerHTML());
  // expect(component).toHaveAttribute('role', 'button');
  await component.click();

});