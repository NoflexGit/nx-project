import { render } from '@testing-library/react';

import Sidebar from './TitleBar';

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sidebar />);
    expect(baseElement).toBeTruthy();
  });
});
