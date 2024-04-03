import { test, expect } from '@playwright/experimental-ct-solid';
import ListOfEntries from './ListOfEntries';

test.use({ viewport: { width: 500, height: 500 } });

test('ListOfEntries should render', async ({ mount }) => {
  const component = await mount(<ListOfEntries />, {
    hooksConfig: {
      keyboardEntries: [{
        label: 'Test 1',
        keys: [['A', 'B']]
      }, {
        label: 'Test 2',
        keys: [['C', 'D']]
      }]
    }
  });

  await expect(component).toHaveScreenshot();
});
