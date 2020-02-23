let contentful = require('contentful');

const SPACEID = 'tvquknpoe765';
const ACCESSTOKEN = 'fVmV6uikhchA4pYBFcXmwpPgFcUlE2cv8EtPZ1JqpZg';
const ENTRYID = '4oGqPgmUbAnJPaNuXcBNUL';

let client = contentful.createClient({
    space: SPACEID,
    accessToken: ACCESSTOKEN,
});

const getContent = async () => {
    let unprocessedContent = await client.getEntry(ENTRYID);
    let processedContent = {
        eventTitle: unprocessedContent.fields.eventTitle,
        mainTitle: unprocessedContent.fields.mainTitle,
        mainText: unprocessedContent.fields.mainText,
        eventDate: unprocessedContent.fields.eventDate,
        subTitle1: unprocessedContent.fields.subtitle1,
        subText1: unprocessedContent.fields.subtext1,
        subTitle2: unprocessedContent.fields.subtitle2,
        subText2: unprocessedContent.fields.subtext2,
        infoTitle: unprocessedContent.fields.infoTitle,
        infoText: unprocessedContent.fields.infoText,
        footerText: unprocessedContent.fields.footerText,
        authors: unprocessedContent.fields.authors,
        githubURL: unprocessedContent.fields.githubUrl,
        facebookURL: unprocessedContent.fields.facebookUrl,
        twitterURL: unprocessedContent.fields.twitterUrl,
        eventURL: unprocessedContent.fields.eventUrl,
        eventImage: unprocessedContent.fields.eventImage.fields.file.url,
    }
    return processedContent;
}

export default getContent;