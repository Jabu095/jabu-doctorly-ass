import { fireEvent, render , screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomeComponent from '../home.component';
type TestElement = Document | Element | Window | Node

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e
}

test('should get home componet', () => {
    render(<HomeComponent />);
    const paragraphElement = screen.getByText('Fuzzy search');
    expect(paragraphElement).toBeInTheDocument();
})

test('should get input ', () => {
    render(<HomeComponent />);
    const input = screen.getByTestId('search-element');
    expect(input).toBeInTheDocument();
    fireEvent.change(input,{target:{value:'ib-u-ron 75 mg 10 Zäpfchen N1'}});
    expect(hasInputValue(input,"ib-u-ron 75 mg 10 Zäpfchen N1")).toBe(true);
})

test('should have search button ', () => {
    render(<HomeComponent />);
    const input = screen.getByTestId('search-button');
    expect(input).toBeInTheDocument();
})
test('renders correctly', () => {
    const tree = renderer
    .create(<HomeComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})