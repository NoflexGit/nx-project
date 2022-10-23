import { render } from '@testing-library/react';

import ReviewCard from './PropertyCard';

describe('ReviewCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewCard />);
    expect(baseElement).toBeTruthy();
  });
});
