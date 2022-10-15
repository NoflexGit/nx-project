import { render } from '@testing-library/react';

import DetailsGallery from './DetailsGallery';

describe('DetailsGallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailsGallery />);
    expect(baseElement).toBeTruthy();
  });
});
