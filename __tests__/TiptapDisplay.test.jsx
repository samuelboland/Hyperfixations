import { render, screen } from '@testing-library/react';
import TiptapDisplay from '../components/TiptapDisplay';

describe('Tiptap Displayer', () => {
    it('Displays text that is given to it as valid HTML', () => {
        const testText = '<h1> This is a header </h1> <br /> <li> This is bold text </li>';

        render(<TiptapDisplay content={testText} />);

        const targetHeader = 'This is a header';
        const targetListItem = 'This is a paragraph';

        const header = screen.getByRole('heading', targetHeader);
        const paragraph = screen.getByRole('listitem', targetListItem);

        expect(header).toBeInTheDocument;
        expect(paragraph).toBeInTheDocument;
    });
});
