import { render, screen } from '@testing-library/react';
import Footer from '../../components/footer';

describe('Footer', () => {
    it('Displays name and copyright', () => {
        render(<Footer />);

        const placeholder = screen.getByText('© Sam Boland, 2022');

        expect(placeholder).toBeInTheDocument();
    });
});
