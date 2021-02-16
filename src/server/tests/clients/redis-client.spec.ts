import { createRedisClient } from "../../clients";
import { expect } from 'chai'
describe("redis-client checks", function () {
    it("redis client initialized without error", () => {
        const client = createRedisClient()
    });
});
