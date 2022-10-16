import { render } from '@testing-library/react';

import ChatPreview from './ChatPreview';

describe('ChatPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatPreview />);
    expect(baseElement).toBeTruthy();
  });
});
