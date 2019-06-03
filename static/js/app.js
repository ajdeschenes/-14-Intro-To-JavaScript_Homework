// from data.js
var tableData = data;

// YOUR CODE HERE!

//collect entered search term (class = form-control) on click of button (id = filter-btn)

//select the button and the search term
var filterbtn = d3.select("#filter-btn");

//click handler
filterbtn.on("click", function(){

    d3.event.preventDefault();

    // code to clear previous table results
    var currentData = d3.select("tbody").selectAll("tr");
    currentData.remove();
    
    //select the search term 
    var searchDate = d3.select("#datetime").node().value;
    var searchState = d3.select("#state").node().value;
    console.log(searchDate);

    //function to apply date search filter to data
    function selectDateIncidents(report){
        return report.datetime == searchDate;
    }

    //function to apply state search filter to data
    function selectStateIncidents(report){
        return report.state == searchState;
    }

    function selectStateIncidents(report){
        return report.state == searchState;
    }

    if (searchDate != ''){
        var incidents = tableData.filter(selectDateIncidents);
        
        if (searchState != ''){
            incidents = incidents.filter(selectStateIncidents);
        };
        console.log(incidents);
    } else if(searchState != ''){
        incidents = tableData.filter(selectStateIncidents);
    } else{
        incidents = tableData;
    };
    

    //add search results to page
    var tbody = d3.select("tbody");

    incidents.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
            row.append("td").text(value);
        });
        
    });

    //clear variables
    incidents = [];

    
    
    //remove current 
    document.getElementById("datetime").value = '';

    //remove current 
    document.getElementById("state").value = '';

});



