import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Reserve from '../components/Reserve';
import store from '../app/store';

describe('Should render the reserver page', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Reserve />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have the title text', () => {
    render(
      <Provider store={store}>
        <Reserve />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    const text = screen.getByText('Select City');
    expect(text).toBeInTheDocument();
  });
});
