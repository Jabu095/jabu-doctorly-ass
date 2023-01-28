import { render , screen } from '@testing-library/react';
import HomeComponent from '../home.component';

test('should get home componet', () => {
    render(<HomeComponent />);
    const paragraphElement = screen.getByText('Fuzzy search');
    expect(paragraphElement).toBeInTheDocument();
})