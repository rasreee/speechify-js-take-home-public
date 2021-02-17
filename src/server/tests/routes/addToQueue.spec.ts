import request from 'supertest';

import createServer from '../../server';
import { Data, DataType } from '../../../common';

const app = createServer();

describe('addToQueue route', () => {
	it('/api/addToQueue responds with 200', (done) => {
		const data: Data = {
			type: DataType.HTML,
			source: 'https://speechify.com/welcome',
			data: `<html>
            <body>
                <div id="speechify-heading">
                <h1>Welcome to Speechify</h1>
                <div id="speechify-paragraphs">
                    <p>Speechify helps you listen to any readable content on the web.</p>
                    <p>The product works on web articles, PDFs and Google Docs.</p>
                </div>
            </body>
        </html>`
		};
		request(app).post('/api/addToQueue').send(data).expect(200, done);
	});
});
