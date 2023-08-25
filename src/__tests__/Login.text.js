import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/login/Login';
import store from '../app/store';

const Wrapper = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

it('renders the login page', () => {
  render(<Wrapper />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/SummerWave/i);
  expect(linkElement).toBeInTheDocument();
});
