import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../components/Home/Home';
import store from '../app/store';

const initialState = {
  roomList: [],
  isLoading: false,
  error: undefined,
};

const data = {
  rooms: [
    {
      room_id: '1',
      room_name: 'Room 1',
      description: 'The Room 1 description',
      price: 234,
      image: 'images',
    },
    {
      room_id: '2',
      room_name: 'Room 2',
      description: 'The Room 2 description',
      price: 2234,
      image: 'images',
    },
  ],
};

it('should render the Home page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render the Room', () => {
  const mockStore = configureStore();
  const RoomStore = mockStore(initialState);

  RoomStore.clearActions();
  const getRooms = () => ({ type: 'GET_ROOMS' });

  RoomStore.dispatch(getRooms());

  const actions = RoomStore.getActions();
  const expectedPayload = { type: 'GET_ROOMS' };
  expect(actions).toEqual([expectedPayload]);
});

it('should render the initial state Properly', () => {
  const mockStore = configureStore();
  const RoomStore = mockStore(initialState);

  expect(initialState).toEqual(RoomStore.getState());
});

it('should render the Room state Properly', () => {
  const mockStore = configureStore();

  const RoomStore = mockStore(data);

  expect(data).toEqual(RoomStore.getState());
});
