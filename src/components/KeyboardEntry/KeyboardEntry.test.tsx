import { describe, expect, it } from "vitest";
import { render, screen } from '@solidjs/testing-library';
import KeyboardEntry from "./KeyboardEntry";


describe('KeyboardEntry component', () => {
  it('should render single entry', async () => {
    render(() => {
      return (
        <KeyboardEntry
          label="Test entry"
          keys={[['A', 'B'], ['C', 'B']]}
        />
      );
    });

    const rows = await screen.findAllByRole('row');
    expect(rows).toHaveLength(1);

    const AKeys = await screen.findAllByText('A');
    expect(AKeys).toHaveLength(1);

    const BKeys = await screen.findAllByText('B');
    expect(BKeys).toHaveLength(2);
  });
});