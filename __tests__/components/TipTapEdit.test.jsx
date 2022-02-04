import { render, screen } from '@testing-library/react';
import TiptapEdit from '../../components/TiptapEdit';

describe('Tiptap Editor', () => {
    it('Applies styling to the text that it renders', () => {
        const testText = '<h1> This is a header </h1> <br /> <li> This is bold text </li>';

        render(<TiptapEdit content={testText} />);
        
        const targetHeader = 'This is a header';
        const targetListItem = 'This is a paragraph';

        const header = screen.getByRole('heading', targetHeader);
        const paragraph = screen.getByRole('listitem', targetListItem);

        expect(header).toBeInTheDocument;
        expect(paragraph).toBeInTheDocument;
    });
});
