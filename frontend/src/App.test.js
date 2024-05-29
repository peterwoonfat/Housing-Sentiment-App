import { render, screen } from '@testing-library/react';
import App from './App';

describe('Render test', () => {

    beforeEach(()=>{
        render(<App />);
    });

    test('renders refresh button', () => {
      const refreshButton = screen.getByRole('button', { name: /refresh/i });
      expect(refreshButton).toBeInTheDocument();
    });

    test('renders nav bar', () => {
      const navBar = screen.getByRole('navigation');
      expect(navBar).toBeInTheDocument();
    });

    test('renders NavLink about', () => {
      const aboutNavLink = screen.getByRole('link', { name: /about/i });
      expect(aboutNavLink).toBeInTheDocument();
      expect(aboutNavLink).toHaveClass('nav-link');
      expect(aboutNavLink).toHaveAttribute('href', '/About');
      expect(aboutNavLink).toHaveTextContent('About');
    });

    test('renders NavLink for Word Cloud', () => {
      const wordCloudLink = screen.getByRole('link', { name: /word cloud/i });
      expect(wordCloudLink).toBeInTheDocument();
      expect(wordCloudLink).toHaveClass('nav-link');
      expect(wordCloudLink).toHaveAttribute('href', '/WordCloud');
      expect(wordCloudLink).toHaveTextContent('Word Cloud');
  });

    test('renders Histogram NavLink element', () => {
      const histoNavLink = screen.getByRole('link', { name: /Histogram/i });
      expect(histoNavLink).toBeInTheDocument();
      expect(histoNavLink).toHaveClass('nav-link');
      expect(histoNavLink).toHaveAttribute('href', '/Histogram');
      expect(histoNavLink).toHaveTextContent('Histogram');
    });


});
