import { render } from '@testing-library/react';

import AgentInfo from './AgentInfo';

describe('AgentInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AgentInfo />);
    expect(baseElement).toBeTruthy();
  });
});
