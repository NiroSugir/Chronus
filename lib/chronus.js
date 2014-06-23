/*!
 * Chronus
 * Copyright(c) 2014 Niroshan Sugirtharatnam (GeekMode). All Rights Reserved.
 * MIT Licensed
 */
"use strict";

var VERSION = '0.0.1',
    NAME = 'Chronus';

var ChronusAPI = {
    getQueueName: function(queueName) {
        var queueNameType = typeof queueName;

        if (queueNameType === 'undefined') {
            return 'default';
        } else if (queueNameType === 'string') {
            return queueName;
        } else {
            throw new TypeError('Message Queue Name must be a string; ' + queueNameType + ' given.');
        }
    },

    createLocalQueue: function() {
        /*
            Set Default Queue Name if none given
         */
        if (arguments.length > 0) {

        }

        return {};
    }
}

module.exports.name = NAME;
module.exports.version = VERSION;
module.exports.createLocalQueue = ChronusAPI.createLocalQueue;
module.exports.getQueueName = ChronusAPI.getQueueName;