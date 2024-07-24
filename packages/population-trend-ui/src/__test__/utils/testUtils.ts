import { ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

export function setup(jsx: ReactElement) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    };
}