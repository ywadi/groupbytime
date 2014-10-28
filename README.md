Group By Time (Javascript/NODEJS)
===========

I have been trying to find a way to group data together according to time without expensive algorithms and after a very long search decided to do it. The Problem addressed is that a set of data with a unix time stamp on each record is to be grouped by years, months, days, hours, minutes or seconds. 

The main use of this was to be able to group times together after filtering from certian Databases and also keep the latency low. To be able to do so, data is set into an array and is processed really fast using only mathmatical operations and methods to generate timestamp hashes. You can take a look at the code and understand it more as an algorithm.

Usage 
======

First install the module using npm 

```
$ npm install groupbytime
```

Next you will need to require the module 

```javascript
var gb = require("groupbytime");
```

Finally you will need to use the function groupBy(dataArray, startingDateUnixTimeStamp, endDateUnixTimeStamp, groupByTime)
   * **dataArray**; should always contain a **ts** field with the records Unix Time Stamp 
   * **startingDateUnixTimeStamp**; should be the start of the timestamp sequence where the data with be grouped by into it
   * **endDateUnixTimeStamp**; should be the when this set of data ends in unix time stamp format 
   * **groupByTime**; is by how much time do you want to group by in seconds, example group By 3 Minutes (3*60) or group by 1.5 days (1.5*24*60*60) 
  
*Note: That the group by will generate a list of all times within the timeframe and will have data in it, if there is no data for a certain time then it will be empty.*

```javascript
var groupby = require("./groupby");
//TS field added to all records, start and time date added, and asked to group by 5 minutes. 
console.log(
  groupby.groupBy(
    [
      {"id":1,"ts":1414415561,"data":"hi"},
      {"id":2,"ts":1414414561,"data":"hiiiii"}, 
      {"id":3,"ts":1414414559,"data":"new entry"},
      {"id":4,"ts":1414422033,"data":"End Date"},
      {"id":5,"ts":1414412033,"data":"Start Date"},
    ],1414412033,1414422033, 60*5)
);
```
