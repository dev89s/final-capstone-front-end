import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import NavBar from '../components/NavBar';
import store from '../app/store';

describe('Should render the Navbar page', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have the rooms link text', () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    const text = screen.getByText('Room');
    expect(text).toBeInTheDocument();
  });

  it('should have the copywrite text', () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    const text = screen.getByText('© Microverse 2023');
    expect(text).toBeInTheDocument();
  });
});
