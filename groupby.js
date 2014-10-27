/*
	---THIS IS NOT PRODUCTION READY---
	---An algorithm to Group by date for an array within a time frame---
        ---This algorith is written by Yousef Wadi 27-Oct-2014---
	---twitter: @ywadi, github:ywadi ---
	
*/


exports.groupBy = groupBy;

function generateKey(groupBySeconds , timestamp, offset)
{
	var keyDiff = timestamp % groupBySeconds;
	return [(timestamp - keyDiff)+offset,keyDiff];
}


function generateSlots(dateStart, dateEnd, groupBy)
{
	var startKeyGen = generateKey(groupBy, dateStart, 0);
	var startHeadKey = startKeyGen[0];
	var keyStep = startKeyGen[1]; 

	var endKeyGen = generateKey(groupBy, dateEnd,0);
	var endTailKey = endKeyGen[0];	

	var endKey = startHeadKey;

	var shift = dateStart - startHeadKey;

	console.log("Shift: ",shift);
	var grid = {};
	while(endKey <= endTailKey)
	{
		grid[endKey+shift] = [];
		endKey+=groupBy;
	}
	
	return {"grid":grid,"offset":shift};

}


function groupBy(data, startDate, endDate, groupDurationSec)
{
	var slotsAndOffsets = generateSlots(startDate,endDate, groupDurationSec);
	var slots = slotsAndOffsets.grid;
	var offset = slotsAndOffsets.offset;

	for(item in data)
	{
		var key = generateKey(groupDurationSec,data[item].ts,offset)[0];

		if(slots[key] != undefined)
		{
			slots[key].push(data[item]);
		}
	}

	return(slots);	
}
