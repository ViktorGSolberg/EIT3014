let contentful = require('contentful');


const SPACEID = 'j4un17i75qqo';
const ACCESSTOKEN = 'GwHY26aYgr9M-Fm4yJQ7pnHnzmzhgVYoZdgLtY-Bsc4';
const ENTRYID_MARKED = '7ipbkDIfgSqCQDJU5pVUUb';
const ENTRYID_KINO = '1NT3u551OP8zjsBfJHDuu8';

let client = contentful.createClient({
    space: SPACEID,
    accessToken: ACCESSTOKEN,
});

const getContent = async () => {
    let unprocessedContent = await client.getEntry(ENTRYID_MARKED);
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