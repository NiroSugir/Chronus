Chronus - The God of Time
============

Synopsis
---------
Chronus is a lightweight yet fully featured Message/Jobs Server for Node.js applications. It accepts both scheduled jobs (akin to crons) and queued jobs meant for immediate execution. The server then has its "workers" proceeds to run them in the proper order.

Chronus is built with scalability and accuracy in mind. It's asyncronous nature does not impede the ACID integrity of the queue. In fact, if setup properly (*using default settings*), it will increase the 

Unlike other queuing software on the market, Chronus can be imported as a npm library or run as an independant application. Either way it loses none of its functionality.

Even with its advanced functionality, it is easy to use. 

Installation
------------
`npm install chronus`

Usage
------------
1. Live Mode
2. Server & Workers
  a. Server Mode
    `var chronusServer = new chronus.createServer()`;
  b. Worker Mode
    `var chronusWorder = new chronus.createWorker()`;
3. Worker + Database Mode


Version
-------
*Currently under construction.*

License
-------
MIT.

Copyright
---------
Copyright(C) 2014 Niroshan "GeekMode" Sugirtharatnam. All Rights Reserved.
