Chronus
============

Synopsis
---------
> Chronus is a lightweight yet fully featured Message/Jobs Server for Node.js applications. It accepts both scheduled jobs (akin to crons) and queued jobs meant for immediate execution. The server then has its "workers" proceeds to run them in the proper order.

> Chronus is built with scalability and accuracy in mind. It's asyncronous nature does not impede the ACID integrity of the jobs. Unlike other queuing software on the market, Chronus can be run in different modes to customize the solution to your needs. Even with all these functionalities, it is easy to use and leaves a small footprint.

> Storing the queues is extremely simple as Chronos comes with built in database support for Redis, MySQL & plain old files. MongoDB support is planned to give access to as many databases as possible.

Installation
------------
`npm install chronus`

Usage
------------
> Chronus can run in 3 modes: **Live Mode**,  **Server Mode**  &  **Worker Mode** . In Live Mode, the queues and the workers that process the queues run in the same Node.js application instance. In Server Mode, you create the hub that stores all the jobs. The Workers then connect to this hub to retrieve and process the jobs in queue. These workers, as you've guessed, are running in Worker Mode.


1. **Live Mode**
> Single Server + Worker App. All the jobs are created and run on the same Node.js application.
```sh
//Server: 
var chronusServer = new chronus.createServer();
//Worker:
var chronusWorker = new chronus.createWorker();
```
2. **Server**
> In this mode, you can run one Message Server that holds all 
> the data. The Workers then connect to this Server and 
> run the jobs. The jobs can be either held in memory or saved to a database (such as Redis)
```sh
//Server acting as the Hub instance: 
var chronusServer = new chronus.createServer();
```
3. **Worker**
```sh
//Worker(s) on other Node.js instances:
var chronusWorker = new chronus.createWorker();
```

Version
-------
*Currently under construction.*

License
-------
MIT.

Copyright
---------
Copyright(C) 2014 Niroshan "GeekMode" Sugirtharatnam. All Rights Reserved.
