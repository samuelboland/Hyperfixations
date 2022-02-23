import { render, screen } from '@testing-library/react';
import Layout from '../../components/layout';

/* I have already tested the component that make up my layout.
 The only new behavior that is introduced here is that it wraps 
 the rest of the site. Let's test whether that works. */

describe('Layout Component', () => {
    it('Passes through children', () => {
        const textToTest = 'This is a list item inside of a div';

        const TestChild = () => {
            return (
                <div>
                    <li>{textToTest} </li>
                </div>
            );
        };

        render(
            <Layout>
                <TestChild />
            </Layout>,
        );

        const text = screen.getByText(textToTest);

        expect(text).toHaveTextContent(textToTest);
    });
});
