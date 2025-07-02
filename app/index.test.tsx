import { fireEvent, render, screen } from '@testing-library/react-native';
import HomeScreen from './index';

test('basic test', () => {

  render(<HomeScreen  />);
  for (let index = 0; index < 21; index++) {
    fireEvent(screen.getByTestId('add-button'), 'press');
  }
  
  expect(screen.getByTestId('quantity-text').props.children).toBe(10)
});