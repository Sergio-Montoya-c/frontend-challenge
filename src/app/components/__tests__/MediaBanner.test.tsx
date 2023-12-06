import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MediaBanner, { MediaBannerExtendedProps } from '../MediaBanner';

const basicMockProps: MediaBannerExtendedProps = {
  img: {
    src: "https://images.ctfassets.net/0sea1vycfyqy/66XcWTL8RWek8gliZLFpYu/e12b79045911f66166bdd34cffeadd62/700x500__1_.png",
    alt: "Happy baby playing with a toy",
    caption: "Happy baby playing with a toy",
  },
  leadingText: "For all their firsts",
  heading: "Joyful play at every stage, ages 0-4",
  orientation: "left",
  button: {
    text: "Explore the Play Kits",
    href: "https://lovevery.com/products/the-play-kits/",
  },
  className: "bg-stone-100",
  style: {
    padding: "0 0 0 0",
  }
}

const mockPropsLeftOrientation: MediaBannerExtendedProps = {
  ...basicMockProps,
  orientation: "left",
};

const mockPropsRightOrientation: MediaBannerExtendedProps = {
  ...basicMockProps,
  orientation: "right",
};

describe('MediaBanner', () => {

  test('renders MediaBanner component with correct content', () => {
    const { img, leadingText, heading, button, className, style } = mockPropsLeftOrientation;
    render(<MediaBanner {...mockPropsLeftOrientation} />);

    // Assert that the leading text is rendered
    const leadingTextElement = screen.getByText(leadingText || '');    

    expect(leadingTextElement).toBeInTheDocument();

    // Assert that the heading is rendered
    const headingElement = screen.getByText(heading || '');
    expect(headingElement).toBeInTheDocument();

    // Assert that the button is rendered
    const buttonElement = screen.getByText(button?.text || '');
    expect(buttonElement).toBeInTheDocument();

    // Assert that the image is rendered
    const imageElement = screen.getByAltText(img?.alt || '').parentElement;
    expect(imageElement).toBeInTheDocument();

    // Assert that and image with left orientation does not have the class to order it to the right
    expect(imageElement).not.toHaveClass('md:order-1');

    // Assert that the component has the correct class name
    const componentElement = screen.getByTestId('media-banner');
    expect(componentElement).toHaveClass(className || '');

    // Assert that the component has the correct style
    expect(componentElement).toHaveStyle(style as Record<string, unknown> || {});
  });
  
  test('renders MediaBanner component with orientaton to the right', () => {
    const { img, } = mockPropsLeftOrientation;
    render(<MediaBanner {...mockPropsRightOrientation} />);

    // Assert that the image has the correct class to order it to the right
    const imageElement = screen.getByAltText(img?.alt || '').parentElement;
    expect(imageElement).toHaveClass('md:order-1');
  });
});