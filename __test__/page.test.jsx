import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Page from "src/app/page";
import Home from '@/app/Home/page';
import RegisterForm from '@/app/components/RegisterForm';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('renders a LogoutButton', () => {
    render(<Page />);
    const LogoutButton = screen.getAllByRole('button', { name: /Logout/i });
    expect(LogoutButton.length).toBeGreaterThan(0);
  });
  
  it('renders a paragraph', () => {
    render(<Page />);
    const paragraph = screen.getByRole('paragraph');
    expect(paragraph).toBeInTheDocument();
  });

  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
  
  it('renders a heading', () => {
    render(<RegisterForm />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
  

  // it('renders a RegisterForm', () => {
  //   render(<Page />);
  //   const RegisterForm = screen.getByRole('RegisterForm');
  //   expect(RegisterForm).toBeInTheDocument();
  // });
  

  // it('renders a paragraph', () => {
  //   render(<Page />);
  //   const paragraph = screen.getByRole('paragraph');
  //   expect(paragraph).toBeInTheDocument();
  // });
 
  // it('hides LogoutButton for non-logged-in users', () => {
  //   render(<Page />);
  //   expect(screen.queryByText(/Logout/i)).toBeNull();
  // });
  // it('shows LoginForm for logged-in users', () => {
  //   render(<Page />);
  //   expect(screen.queryByText(/Login/i)).toBeNull();
  // });
  // it('renders a Link', () => {
  //   render(<Page />);
  //   const Link = screen.getByRole('Link');
  //   expect(Link).toBeInTheDocument();
  // });
});
 