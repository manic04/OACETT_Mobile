$(document).ready(function(){
	$("#faq-header").html("F.A.Q.");
	$.getJSON("js/faq.json", function(data){	
		//for demo purposes please uncomment the line below:
		//localStorage.removeItem("faq");
		if(typeof(Storage) !== "undefined")
		{
			// Code for localStorage/sessionStorage.
			if (localStorage.getItem("faq") === null)
			{
				localStorage.setItem("faq", JSON.stringify(data));				
				loadQuestions(data);
			}
			//Read from local storage if there is localStorage data
			else
			{			
				loadQuestions(JSON.parse(localStorage.getItem("faq")));
			}
		} else {
		// Sorry! No Web Storage support..
		console.log("error loading profile Data");
		}		
	});	
});

function loadQuestions(faqData) {
	$("#faq").html("<h1 align='center'>" + faqData.FAQ + "</h1>");
	
	$.each(faqData.listFAQ, function (i, row) {
		$("#faq").append("<h3 style='color:rgb(200,10,10)'>" + row.Question + "</h2>");
		$("#faq").append("<p>" + row.Answer + "</p>");
	});
}