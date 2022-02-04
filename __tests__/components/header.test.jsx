import { render, screen } from '@testing-library/react';
import Header from '../../components/header';

describe('Header', () => {
    it('Renders the site title', () => {
        render(<Header />);

        const title = screen.getByRole('heading', {
            name: /^HYPERFIXATIONS$/i,
        });

        expect(title).toBeInTheDocument();
    });

    it('Renders the site tagline', () => {
        render(<Header />);

        const tagline = screen.getByText('Approximate Knowledge of Many Things');
        expect(tagline).toBeInTheDocument();
    });

    it('Links to the home page', () => {
        render(<Header />);

        const link = screen.getByRole('link');

        expect(link).toHaveAttribute('href', '/');
    });
});
