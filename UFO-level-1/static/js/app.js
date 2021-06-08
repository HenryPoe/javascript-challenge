/**
 * Javascript Challenge for Data Analytics Bootcamp
 * Henry Poe with some sample text from class
 * Last edited on 06/08/2021
 */

// Fill the table with the sighting data
function drawTable(data, filterString) {
    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Runs on form submit to filter the table
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    var filter = d3.select(".form-control").property("value");
    console.log(filter);
    //drawTable(tableData, filter);
};

// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter)