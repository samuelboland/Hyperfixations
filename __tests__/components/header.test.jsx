import { render, screen } from '@testing-library/react';
import Header from '../../components/header';

describe('Header', () => {
    it('Renders the site title', () => {
        render(<Header />);

        const title = screen.getByText('Hyperfixations.io');

        expect(title).toBeInTheDocument();
    });
});
