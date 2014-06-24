Chronus - The God of Time
============

Synopsis
---------
> Chronus is a lightweight yet fully featured Message/Jobs Server for Node.js applications. It accepts both scheduled jobs > (akin to crons) and queued jobs meant for immediate execution. The server then has its "workers" proceeds to run them in > the proper order.

> Chronus is built with scalability and accuracy in mind. It's asyncronous nature does not impede the ACID integrity of the jobs. 

> Unlike other queuing software on the market, Chronus can be run in 2 modes each with their own advantages.

> Even with all these functionalities, it is easy to use and leaves a small footprint. 

Installation
------------
`npm install chronus`

Usage
------------
1. ** Live Mode **
> Single Server + Worker App. All the jobs are created and run on the same Node.js application.
```sh
//Server: 
var chronusServer = new chronus.createServer();
//Worker:
var chronusWorker = new chronus.createWorker();
```
2. ** Server & Workers **
> In this mode, you can run one Message Server that holds all 
> the data. The Workers then connect to this Server and 
> run the jobs. The jobs can be either held in memory or saved to a database (such as Redis)
```sh
//Server acting as the Hub instance: 
var chronusServer = new chronus.createServer();
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
