const {
    WEBHOOK_EVENT_TYPES,
} = require('../constants/messengerPlatformConstants');

const parseEvent = (event) => {
    if (event.message) return parseMessageEvent(event);
    if (event.postback) return parsePostbackEvent(event);
    if (event.referral) return parseReferralEvent(event);

    // ToDo: Lesson 3_4
};

const extractCommonAttributes = (event) => {
    // ToDo: Lesson 3_4
};
const parseMessageEvent = (event) => {
    // ToDo: Lesson 3_1
};

const parsePostbackEvent = (event) => {
    // ToDo: Lesson 3_2
};

const parseReferralEvent = (event) => {
    // ToDo: Lesson 3_3
};

module.exports = {
    parseEvent,
};
