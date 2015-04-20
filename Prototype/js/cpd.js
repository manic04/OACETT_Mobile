$(document).ready(function(){
	$("#cpd-header").html("CPD");
	//CPD Table
	
	//arrays for 
	var dates = ["04/09/15", "12/04/13", "01/23/12", "08/18/10"];
	var names = ["Plant Tour" , "Conference", "Paper", "Lessons"];
	var types = ["Major", "Minor"];
	var majorData = 0;
	var minorData = 0;
	$("#CPDTable").html("<tr><th>Name</th><th>Type</th><th>Date</th><th>File</th></tr>").trigger('create');
	for (i = 0; i < 4; i++) {
		//randomly generated scrub data
		var x = Math.floor((Math.random() * 4) + 0);
		var y = Math.floor((Math.random() * 2) + 0);
		if (y == 0)//Major
		{
			majorData++;
		}
		if(y == 1)//Minor
		{
			minorData++;
		}
		$("#CPDTable").append("<tr><td>" + names[x] + "</td><td>" + types[y] + "</td><td>" + dates[x] + "</td><td><a href='#' class='ui-btn'>View</a></td></tr>").trigger('create');		
	}	
	majorProgressBar(majorData);
	minorProgressBar(minorData);
});

//business logic for major CPD component
function majorProgressBar(majProgress) {
	if (majProgress > 3)
	{
		majProgress = 3;
	}
    $('#majorProgress').goalProgress({
        goalAmount: 3,
        currentAmount: majProgress,
        textBefore: '',
		speed: 1500,
        textAfter: ' / 3 Major'
    });
}
//business logic for minor CPD component
function minorProgressBar(minProgress) {
	if (minProgress > 1)
	{
		minProgress = 1;
	}	
     $('#minorProgress').goalProgress({
        goalAmount: 1,
        currentAmount: minProgress,
        textBefore: '',
		speed: 1500,
        textAfter: ' / 1 Minor'
    });
}