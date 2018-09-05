'use strict'
const cote = require('cote')
const client = new cote.Requester({
    name: 'Test CommMgr Client',
    key: 'everlife-communication-svc',
})

/*      outcome/
 * Add the basic telegram channel so we can begin chatting
 */
function main() {
    client.send({ type: 'add-channel', pkg: 'everlifeai/elife-telegram' })
}

main()