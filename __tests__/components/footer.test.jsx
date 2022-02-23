import { render, screen } from '@testing-library/react';
import Footer from '../../components/footer';

describe('Footer', () => {

    it('Displays site name', () => {
        render(<Footer />);
        expect(screen.findByText('Hyperfixations'));
    });

    it('Displays name and copyright', () => {
        render(<Footer />);

        expect(screen.getByText('© Sam Boland 2022'));
    });
});
