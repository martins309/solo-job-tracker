import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import JobSearchForm from '../components/JobSearchForm';

describe('<JobSearchForm />', () => {
    let getByTestId;


    describe('clicking the send button', () => {
        beforeEach(async () => {
            ({ getByTestId } = render(<JobSearchForm />));

            await userEvent.type(
                getByTestId('Location'),
                'New Location',
            );
            userEvent.click(getByTestId('sendButton'));
        });
        it('clears the text field', () => {
            expect(getByTestId('Location').value.toEqual(''));
        })
    })
})