/*!
 * Chronus
 * Copyright(c) 2014 Niroshan Sugirtharatnam (GeekMode). All Rights Reserved.
 * MIT Licensed
 */
"use strict";

function createEvent(eventData) {

    return {
        callbackName: eventData.callbackName,
        callbackData: eventData.callbackData,
        callbackTime: eventData.callbackTime
    };
}

module.exports.createEvent = createEvent;