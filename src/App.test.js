import { render, screen,cleanup } from '@testing-library/react';
import App from './App';
import CounterApp from "./components/CounterApp"
import {Provider} from "react-redux"
import {store} from "../src/redux/store/store"
test('renders learn react link', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/Assignments/i);
  expect(linkElement).toBeInTheDocument();
});


