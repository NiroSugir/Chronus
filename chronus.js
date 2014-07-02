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
    createEvent: function() {
        return new Object();
    }

}

module.exports = Chronus;


