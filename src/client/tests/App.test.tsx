import App from '../app';
import DataGenerator from '../generator';
import { render } from '@testing-library/react';
import SpeechifyClient from '../speechify'
import React from 'react';

type Props = {
    client: SpeechifyClient;
    generator: any;
};
const SERVER_HOST = "http://localhost:8050";

function renderApp() {
    const defaultProps: Props = {
        client: new SpeechifyClient(SERVER_HOST),
        generator: new DataGenerator()
    }
    return render(<App {...defaultProps} />);
}

describe("<App />", () => {
    test("should display initial App component", () => {
        const { findByTestId } = renderApp()
    })
})