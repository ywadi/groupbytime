var groupby = require("./groupby");

//Example Test Runs
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
