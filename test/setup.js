/*!
 * Chronus
 * Copyright(c) 2014 Niroshan Sugirtharatnam (GeekMode). All Rights Reserved.
 * MIT Licensed
 */

// Export modules to global scope as necessary (only for testing)
//if (typeof process !== 'undefined' && process.title === 'node') {
if (typeof process !== 'undefined') {
    // We are in node. Require modules.
    expect = require('chai').expect;
    chai = require('chai');
    sinon = require('sinon');
    isBrowser = false;

} else {
    // We are in the browser. Set up variables like above using served js files.
    expect = chai.expect;
    // num and sinon already exported globally in the browser.
    isBrowser = true;
}