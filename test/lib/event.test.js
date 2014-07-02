/*!
 * Chronus
 * Copyright(c) 2014 Niroshan Sugirtharatnam (GeekMode). All Rights Reserved.
 * MIT Licensed
 */
"use strict";

if (!isBrowser) {
    var Chronus = require('../../chronus');

    describe("Chronus Event", function () {
        it("should be able to create 'Timed Events' with parameters: eventEmitter event & UNIX timestamp", function () {
            var futureUNIXTimestamp = (new Date().getTime() / 1000) + 60;
            var eventCallbackName = 'randomEventName';
            var eventCallbackData = {foo: 'bar', bar: 'foo'};

            var chronusEvent = Chronus.createEvent({
                callbackName: eventCallbackName,
                callbackData: eventCallbackData,
                callbackTime: futureUNIXTimestamp
            });

            expect(chronusEvent).to.be.an('object');

            expect(chronusEvent.callbackTime).to.equal(futureUNIXTimestamp);
            expect(chronusEvent.callbackName).to.equal(eventCallbackName);
            expect(chronusEvent.callbackData).to.equal(eventCallbackData);
        });


        it.skip("can be added to a Chronus Server", function () {
            var chronusServer = Chronus.createServer();
            var chronusEvent = Chronus.createEvent();

            var success = chronusServer.addEvent(chronusEvent);

            expect(success).to.be.true;
        });
    });
}