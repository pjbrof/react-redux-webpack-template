import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('<Header />', () => {
    it('Renders the header component', () => {
        const tree = renderer
        .create(<Header />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('is this a suite?', () => {
        const header = new Header();
        const result = header.addTwoNumbers(1,2);
        expect(result).toEqual(3);
    });
});
