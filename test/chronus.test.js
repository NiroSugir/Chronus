/*!
 * Chronus
 * Copyright(c) 2014 Niroshan Sugirtharatnam (GeekMode). All Rights Reserved.
 * MIT Licensed
 */
"use strict";

if (!isBrowser) {
    var Chronus = require('../chronus');

    /*
     Version & Tool Info
     */
    describe("Chronus API exports name & version", function() {
        it("#name & #version return valid data", function() {
            expect(Chronus.name).to.equal('Chronus');
            expect(Chronus.version).to.be.a('string');
        });
    });


    describe("Chronus API", function() {
        it("exports Chronus server constructor", function() {
            expect(Chronus).to.have.property('createServer');
        });
        it("exports Chronus worker constructor", function() {
            expect(Chronus).to.have.property('createWorker');
        });
        it("exports Chronus event constructor", function() {
            expect(Chronus).to.have.property('createEvent');
        });
    });




    describe.skip("Chronus Server", function() {
        var chronusServer;

        beforeEach(function(){
            chronusServer = Chronus.createServer();
        });

        it("should have an Object (chronologically ordered) where a list of ChronusEvents can be added", function(done){

            var listChronusEvents = chronusServer.getAllEvents();

            expect(listChronusEvents).to.be.an.instanceof(Array);

            done();
        });
    });


}