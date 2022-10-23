import { render } from '@testing-library/react';

import PropertyMap from './PropertyMap';

describe('PropertyMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PropertyMap />);
    expect(baseElement).toBeTruthy();
  });
});
