import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const testedStrings = [['Welcome to the Click Counter App:'], ['The current clicks are 0']];

test.each(testedStrings)('renders element ', (testedText) => {
  const { getByText } = render(<App />);
  expect(getByText(testedText)).toBeInTheDocument();
});
