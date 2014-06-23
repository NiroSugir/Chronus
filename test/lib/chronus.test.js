/*!
 * Chronus
 * Copyright(c) 2014 Niroshan Sugirtharatnam (GeekMode). All Rights Reserved.
 * MIT Licensed
 */
"use strict";

var should = require('should'),
    chronus = require('../../lib/chronus.js');

describe("Chronus -", function() {
    /*
        Version & Tool Info
     */
    it("#name & #version return valid data", function() {
        chronus.name.should.be.exactly('Chronus');
        chronus.version.should.be.exactly('0.0.1');
    });


    describe("constructor for local queues", function() {
        it("#createLocalQueue creates Local Message Queue", function() {
            var queue = chronus.createLocalQueue();
        });

        it("#createLocalQueue returns a queue object", function() {
            var localQueue = chronus.createLocalQueue();
            (typeof localQueue).should.equal('object');

            /*
                Tests for the returned object should be performed in its ow
             */
        });

        it("#createLocalQueue takes ", function() {

        })


    })
});


