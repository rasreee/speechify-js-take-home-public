import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import SpeechifyClient from './speechify-client'
import DataGenerator from './generator'
import './styles.less'

const SERVER_HOST = 'http://localhost:8050'

const client = new SpeechifyClient(SERVER_HOST)
const generator = new DataGenerator()

import { enableLogging } from 'mobx-logger';

enableLogging();

ReactDOM.render(
    <React.StrictMode><App client={client} generator={generator} /></React.StrictMode>,
    document.getElementById('root')
)
