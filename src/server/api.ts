import { Data } from "../common";
import Speechify from './speechify'
const speechify = new Speechify();

function addToQueue(req, res) {
    const body: Data = JSON.parse(req.body)
    console.log(`POST /api/addToQueue: ${body}`)
    const result = speechify.addToQueue(req.body);
    res.status(200).json({ success: result });
}

function getNextChunk(req, res) {
    const chunk = speechify.getNextChunk();
    res.send({ chunk });
}

module.exports = {
    addToQueue: addToQueue,
    getNextChunk: getNextChunk
}