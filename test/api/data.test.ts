import assert from 'assert';
import { HttpClient, TsrpcError } from 'tsrpc';
import { serviceProto } from '../../src/shared/protocols/serviceProto';

// 1. EXECUTE `npm run dev` TO START A LOCAL DEV SERVER
// 2. EXECUTE `npm test` TO START UNIT TEST

describe('ApiGetData', function () {
    let client = new HttpClient(serviceProto, {
        server: 'http://127.0.0.1:3000',
        logger: console
    });
    it('Login1', async function () {
        // Get data before add
        let ret1 = await client.callApi('Login', {username:'vaechy',password:'chy965162422'});
        assert.strictEqual(ret1.isSucc, true);
    });
    it('Login2', async function () {
        // Get data before add
        let ret1 = await client.callApi('Login', {username:'admin',password:'123456'});
        assert.strictEqual(ret1.isSucc, false);
    });

})