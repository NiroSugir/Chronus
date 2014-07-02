/*!
 * Chronus
 * Copyright(c) 2014 Niroshan Sugirtharatnam (GeekMode). All Rights Reserved.
 * MIT Licensed
 */
"use strict";

var VERSION = '0.0.1',
    NAME = 'Chronus';

var Chronus = {

    name    : NAME,
    version : VERSION,

    createServer: function() {
        return new Object();
    },
    createWorker: function() {
        return new Object();
    },
    /*
    createEvent: function(eventData) {

        return {
            callbackName: eventData.callbackName,
            callbackData: eventData.callbackData,
            callbackTime: eventData.callbackTime
        };
    }
    */
    createEvent: require('./lib/event.js').createEvent
}

module.exports = Chronus;


