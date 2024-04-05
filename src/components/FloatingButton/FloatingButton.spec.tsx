import { test, expect } from '@playwright/experimental-ct-solid';
import FloatingButton from './FloatingButton';

test.use({ viewport: { width: 500, height: 500 } });

test('FloatingButton should render', async ({ mount }) => {
  const component = await mount(<FloatingButton />);

  await expect(component).toHaveScreenshot();
});