import TextField from './TextField';
import { render } from '@testing-library/react';

describe('TextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextField />);
    expect(baseElement).toBeTruthy();
  });
});
