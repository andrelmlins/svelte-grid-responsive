import { render } from '@testing-library/svelte';

import Grid from './Grid.svelte';

test('shows proper heading when rendered', () => {
  const { container } = render(Grid);

  expect(container.firstChild).not.toBe(null);
});
