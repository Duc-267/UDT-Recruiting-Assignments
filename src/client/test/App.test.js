import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../pages/Home';

describe('Home tests', () => {
   it('should contains the heading 1', () => {
      render(<Home />);
      const heading = screen.getByText(/Hello World/i);
      expect(heading).toBeInTheDocument();
   });
});
