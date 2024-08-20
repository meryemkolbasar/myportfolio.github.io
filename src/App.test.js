import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main components', () => {
  render(<App />);

  const sidebarElement = screen.getByTestId('sidebar');
  const homeElement = screen.getByTestId('home');
  const aboutElement = screen.getByTestId('about');
  const servicesElement = screen.getByTestId('services');
  const resumeElement = screen.getByTestId('resume');
  const portfolioElement = screen.getByTestId('portfolio');
  const blogElement = screen.getByTestId('blog');
  const contactElement = screen.getByTestId('contact');

  expect(sidebarElement).toBeInTheDocument();
  expect(homeElement).toBeInTheDocument();
  expect(aboutElement).toBeInTheDocument();
  expect(servicesElement).toBeInTheDocument();
  expect(resumeElement).toBeInTheDocument();
  expect(portfolioElement).toBeInTheDocument();
  expect(blogElement).toBeInTheDocument();
  expect(contactElement).toBeInTheDocument();
});
