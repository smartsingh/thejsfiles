// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create function for looping through data for each sighting given a dataset
function sightingsTable(dataset){
    //loops through each sighting of dataset
    dataset.forEach((sighting) => {
    //adds row for each sighting
    var row = tbody.append("tr");
    //unpacks each key-value pair of sighting
    Object.entries(sighting).forEach(([key, value]) => {
        //Create a cell for each key-value pair of sighting
        var cell = tbody.append("td");
        //Saves value text to appropriate cell
        cell.text(value);
        });
    });
}

//Select filter button
var filter_btn = d3.select("#filter-btn");

//sets up d3 listener on filter button
filter_btn.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //Filter the data to get just the desired result
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    //resets the table by deleting all existing rows inside of it
    tbody.html("");
    //creates table using filtered data
    sightingsTable(filteredData);
    //alerts user to the fact that they've filtered results
    console.log("You just filtered the results!");
});

//creates table so that all dates are visible when page is first generated
sightingsTable(tableData);