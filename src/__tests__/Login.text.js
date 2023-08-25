import { render, screen } from '@testing-library/react';
import Login from '../components/login/Login';
import { Provider } from 'react-redux';
import store from '../app/store';
import { BrowserRouter, Router } from 'react-router-dom';

const Wrapper = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

it('renders the login page', () => {
  render(<Wrapper />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/SummerWave/i);
  expect(linkElement).toBeInTheDocument();
});
