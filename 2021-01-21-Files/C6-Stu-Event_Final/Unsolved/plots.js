// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// @ADD YOUR CODE HERE
// create js functionality
//set a default label as "us"
//initialize our chart with US data
// const us_keys = Object.keys(data.us)

Plotly.create("pie", [{
    labels: Object.keys(data.us), values:Object.values(data.us), type: "pie"
}])


    //define data for pie chart
    //plotly.create chart
//create an event handler and listen for it

d3.select("#country_menu").on("change",function(){
    //get value of the select tag
    const country = d3.select("#country_menu") .property("value")
    // let labels;
    // let values;
    // if(country ==="us"){
    //     // Plotly.restyle("pie", "values", [us])
    //     // Plotly.restyle("pie", "labels", [us_keys])
    // }
    // else if(country ==="uk"){

    // }
    // else(country==="canada"){
        
    }
    //Rather than if statement, we pick 'country' variable and extract it accordingly.
    Plotly.restyle("pie", "values", [Object.values(data[country])
    // Plotly.restyle("pie", "labels", [Object.keys(data[country])

    //set up conditionals to define which data to restyle chart with
    //select values to put in chart based on conditionals
    //restyle the plotly chart with new data  
})
