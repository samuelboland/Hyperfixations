import { render, screen } from '@testing-library/react';
import Footer from '../../components/footer';

describe('Footer', () => {
    it('Displays footer placeholder test', () => {
        render(<Footer />);

        const placeholder = screen.getByText('This is a footer!');

        expect(placeholder).toBeInTheDocument();
    });
});
