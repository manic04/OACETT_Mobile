/*  
* Code for Dashboard information
*/
$(document).ready(function() {
	
	$.getJSON("js/profile_hc.json", function(data) {	
	
		//for demo purposes please uncomment the line below to reset localstorage:
		//localStorage.removeItem("profileData");
		if(typeof(Storage) !== "undefined")
		{
			// Code for localStorage/sessionStorage.
			if (localStorage.getItem("profileData") === null)
			{
				localStorage.setItem("profileData", JSON.stringify(data));				
				readProfile(data);
			}
			//Read from local storage if there is localStorage data
			else
			{			
				readProfile(JSON.parse(localStorage.getItem("profileData")));
			}
		} else {
		// Sorry! No Web Storage support..
		console.log("error loading profile Data");
		}
	});
});

function readProfile(profileData) { 

	//store info in variable from json data
	profileInfo = profileData.profile;		
	//Full concatanated name
	var fullname = profileInfo.firstName + " " + profileInfo.lastName;			
	//Title
	document.title = fullname + "'s Dashboard";	
	
	//Header
	$("#dash-header").append("Dashboard");
	$('#profile-name').html('<h3>' + fullname + '</h3>');
	
	//Contact
	$('#contactTable').html("<h1>Contact Info:</h1>");
	$('#contactTable').append("<tr><th>First Name</th><th>Last Name</th></tr>").trigger('create');
	$('#contactTable').append("<tr><td><input type='text' data-corners='false' value='" + profileInfo.firstName + "' disabled data-corners='false'></input></td><td><input type='text' value='" + profileInfo.lastName + "' disabled data-corners='false'></input></td></tr>").trigger('create');
	$('#contactTable').append("<tr><td><label>Phone</label></td><td><input type='text' value='" + profileInfo.phone + "' data-corners='false'></input></td></tr>").trigger('create');
	$('#contactTable').append("<tr><td><label>Address</label></td><td><input type='text' value='" + profileInfo.address + "' data-corners='false'></input></td></tr>").trigger('create');
	
	//Education		
	$("#educationTable").html("<h1>Education:</h1>");
	$("#educationTable").append("<tr><th>School</th><th>Document</th></tr>").trigger('create');		
	$.each(profileInfo.education, function(i, row) {
		$("#educationTable").append("<tr><td><input type='text' data-corners='false' disabled id='pro" + i + "' value='" + row.program + " data-corners='false''></input></td><td><input type='text' id='doc"  + i + "' value='" + row.document + "' disabled data-corners='false'></input></td>").trigger('create');
	});				
	
	//Discipline
	$("#professionTable").html("<h1>Professions:</h1>");
	$('#professionTable').append('<tr><th>Level</th><th>Position</th></tr>');
	$.each(profileInfo.professions, function(i, row) {
		$("#professionTable").append("<tr><td><input type='text' data-corners='false' disabled id='stat" + i + "' value='" + row.status + " data-corners='false''></input></td><td><input type='text' id='disc"  + i + "' value='" + row.discipline + "' disabled data-corners='false'></input></td></tr>").trigger('create');
	});		
}

	


