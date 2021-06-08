/**
 * Javascript Challenge for Data Analytics Bootcamp
 * Henry Poe with some sample text from class
 * Last edited on 06/08/2021
 */

// Get a reference to the table body
var tbody = d3.select("tbody");
// from data.js
var tableData = data;
// References to the form and button
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Draws the table with all data on the page
function drawTable(data) {
    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Draws the table with all data on the page
function filterTable(data, filterString) {
    // Variable to insure that at least one row is displayed after the filter
    var count = 0;
    data.forEach((sighting) => {
        var row = tbody.append("tr");
        if (sighting.datetime === filterString) {
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
            count++;
        };
    });
    if (count === 0)
        drawTable(tableData);
};

// Runs on form submit to filter the table
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var rowCount = ufoTable.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        ufoTable.deleteRow(i);
    }

    var filter = d3.select(".form-control").property("value");
    //console.log(filter);
    filterTable(tableData, filter);
};


// Run the filter function when the form is submitted or when the button is pressed
button.on("click", runEnter);
form.on("submit", runEnter)
// Draw the table on initial load
drawTable(tableData);