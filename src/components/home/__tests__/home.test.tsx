import { render , screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomeComponent from '../home.component';

test('should get home componet', () => {
    render(<HomeComponent />);
    const paragraphElement = screen.getByText('Fuzzy search');
    expect(paragraphElement).toBeInTheDocument();
})

test('renders correctly', () => {
    const tree = renderer
    .create(<HomeComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})