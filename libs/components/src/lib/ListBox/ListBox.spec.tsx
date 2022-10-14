import { render } from '@testing-library/react';

import ListBox from './ListBox';

describe('ListBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListBox />);
    expect(baseElement).toBeTruthy();
  });
});
