/*!
 * Chronus
 * Copyright(c) 2014 Niroshan Sugirtharatnam (GeekMode). All Rights Reserved.
 * MIT Licensed
 */
"use strict";

if (!isBrowser) {

    var chronus = require('../../lib/chronus.js');

    describe("Chronus -", function() {
        /*
            Version & Tool Info
         */
        it("#name & #version return valid data", function() {
            chronus.name.should.be.exactly('Chronus');
            chronus.version.should.be.exactly('0.0.1');
        });

        describe("#getQueueName", function() {
            it("returns 'default' as queue name if none given", function() {
                chronus.getQueueName().should.equal('default');
            });

            it("returns the queueName Parameter if queueName is valid", function() {
                chronus.getQueueName('default').should.be.exactly('default');
            });

            it("throw an exception if queueName Parameter is invalid", function() {
                (function() {chronus.getQueueName(1)}).should.throw(TypeError);
                (function() {chronus.getQueueName({})}).should.throw(TypeError);
            });
        });

        describe("constructor for local queues", function() {
            it("#createLocalQueue creates Local Message Queue", function() {
                var queue = chronus.createLocalQueue();
            });

            it("#createLocalQueue returns a queue object", function() {
                var localQueue = chronus.createLocalQueue();
                (typeof localQueue).should.equal('object');

                /*
                    Tests for the returned object should be performed in its own test module
                 */
            });

            it("#createLocalQueue takes optional argument: queueName", function() {
                var localQueue = chronus.createLocalQueue('Default');
            });


        })
    });
}