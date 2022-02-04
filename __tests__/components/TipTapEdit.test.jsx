import { render, screen } from '@testing-library/react';
import TiptapEdit from '../../components/TiptapEdit';

describe('Tiptap Editor', () => {
    it('Applies styling to the text that it renders', () => {
        const testText = '<h1> This is a header </h1> <br /> <li> This is a list item </li>';

        render(<TiptapEdit content={testText} />);

        const targetHeader = 'This is a header';
        const targetListItem = 'This is a list item';

        const header = screen.getByRole('heading', targetHeader);
        const listitem = screen.getByRole('listitem', targetListItem);

        expect(header).toBeInTheDocument;
        expect(listitem).toBeInTheDocument;
    });
});
