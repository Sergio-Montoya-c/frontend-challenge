import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button', () => {
  const mockProps = {
    href: '/mock-link',
    text: 'Mock Button',
  };

  test('renders Button component with correct content', () => {
    render(<Button {...mockProps} />);

    // Assert that the button text is rendered
    const buttonElement = screen.getByText(mockProps.text);
    expect(buttonElement).toBeInTheDocument();

    // Assert that the button has the correct href attribute
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', mockProps.href);
  });
});