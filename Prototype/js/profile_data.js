/*  
* Code for Profile information
*/
$(document).ready(function() {
	$("#profile-header").append("Profile");
	$.getJSON("js/profile_hc.json", function(data) {
	
		//for demo purposes please uncomment the line below:
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
	
	//profile-name
	$('#profile-name').html('<h3>' + fullname + '</h3>');		
	$("#contactInfo").append("<tr><th>Contact</th><th></th></tr>");
	$("#contactInfo").append("<tr><td>Phone</td><td>" + profileInfo.phone + "</td></tr>");
	$("#contactInfo").append("<tr><td>Address</td><td>" + profileInfo.address  + "</td></tr>");				
	
	//Education		
	$("#schoolhistory").append("<tr><th>Document</th><th>Program</th></tr>");
	$.each(profileInfo.education, function(i, row) {
		$("#schoolhistory").append("<tr><td>" + row.document + "</td><td>" + row.program + "</td></tr>");
	});			
	
	//Discipline
	$("#dischistory").append("<tr><th>Status</th><th>Discipline</th></tr>");
	$.each(profileInfo.professions, function(i, row) {
		$("#dischistory").append("<tr><td>" + row.status + "</td><td>" + row.discipline + "</td></tr>");
	});		
}