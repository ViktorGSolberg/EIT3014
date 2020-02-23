let contentful = require('contentful');

const SPACEID = 'tvquknpoe765';
const ACCESSTOKEN = 'fVmV6uikhchA4pYBFcXmwpPgFcUlE2cv8EtPZ1JqpZg';
const ENTRYID = '4oGqPgmUbAnJPaNuXcBNUL';

let client = contentful.createClient({
    space: SPACEID,
    accessToken: ACCESSTOKEN,
});



export default async function getContent() {
    let content = await client.getEntry(ENTRYID);
    // console.log(content.fields);

    return content;
}
