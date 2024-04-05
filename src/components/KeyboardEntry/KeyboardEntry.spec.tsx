import { test, expect } from '@playwright/experimental-ct-solid';
import KeyboardEntry from './KeyboardEntry';

test.use({ viewport: { width: 500, height: 500 } });

/* TBD story */
test('KeyboardEntry should render', async ({ mount }) => {
  const component = await mount(
    <KeyboardEntry 
      label="Test entry"
      keys={[['A', 'B'], ['C', 'B']]}
    />
  );

  await expect(component).toHaveScreenshot();
});
