// from data.js
var tableData = data;

// YOUR CODE HERE!

//collect entered search term (class = form-control) on click of button (id = filter-btn)

//select the button and the search term
var filterbtn = d3.select("#filter-btn");

//click handler
filterbtn.on("click", function(){

    d3.event.preventDefault();

    //select the search term 
    var searchDate = d3.select(".form-control").node().value;

    //apply search filter to data
    function selectIncidents(report){
        return report.datetime = searchDate;
    }
    var incidents = data.filter(selectIncidents);
    //add search results to page
    var tbody = d3.select("tbody");

    incidents.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
            row.append("td").text(value);
        });
        
    });
});



