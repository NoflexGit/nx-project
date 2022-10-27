import { render } from '@testing-library/react';

import PropertyGallery from './Gallery';

describe('Gallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PropertyGallery />);
    expect(baseElement).toBeTruthy();
  });
});
