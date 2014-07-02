/*!
 * Chronus
 * Copyright(c) 2014 Niroshan Sugirtharatnam (GeekMode). All Rights Reserved.
 * MIT Licensed
 */
"use strict";

if (!isBrowser) {
    var chronusGenericServer = require('../../../lib/servers/genericServer.js');


    describe("chronusGenericServer", function () {
        it("returns genericServer instance", function () {
            (typeof (new chronusGenericServer())).should.equal('object');
        });

        it("#createServer ", function () {

        });

    });

}