const PORT = parseInt(<string>process.env.REDIS_PORT, 10) || 6379;
const HOST = process.env.REDIS_HOST;

const options = { redis: { host: HOST, port: PORT } };

// const client = new Redis(PORT, HOST);
// const subscriber = new Redis(PORT, HOST);

// const options = {
//     createClient(type: string) {
//         switch (type) {
//             case 'client':
//                 return client;
//             case 'subscriber':
//                 return subscriber;
//             default:
//                 return new Redis(PORT, HOST);
//         }
//     },
// };

export default options;
