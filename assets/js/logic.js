file_url2 = 'https://raw.githubusercontent.com/sophiacyk/RawData/master/WBL2018ScoreSummary.csv'    

file_url = 'https://raw.githubusercontent.com/Sheelasrinivasa/UTAustinDataCampProject2/master/WBL2018score.csv'

// topic1 = 'PROVIDING INCENTIVES TO WORK SCORE';
// topic2 = 'GOING TO COURT SCORE';

//getMap('map', topic1);

// d3.csv(file_url, )


function showMap(evt, map_id, topic) {
    d3.select("#map").selectAll("svg").remove();
    getMap(map_id, topic);
};



function getMap(map_id, topic){
    console.log(topic);
    
    selectMap = '#' + map_id;

  
    var format = function(d) {
        d = d;
        return d3.format(',.01f')(d);
    }
    

    var map = d3.geomap.choropleth()
        .geofile('assets/d3-geomap-1.0.2/topojson/world/countries.json')
        .colors(colorbrewer.YlGnBu[9])
        .column(topic)
        .format(format)
        .legend(true)
        .unitId('Country Code');
    

    d3.csv(file_url2, function(err, data){
        if (err) throw err;
    
        d3.select(selectMap)
        .datum(data)
        .call(map.draw, map);
    });
};



// getMap('map1', topic2);

// var format = function(d) {
//     d = d;
//     return d3.format(',.01f')(d);
// }


// var map = d3.geomap.choropleth()
//     .geofile('assets/d3-geomap-1.0.2/topojson/world/countries.json')
//     .colors(colorbrewer.YlGnBu[9])
//     .column(topic2)
//     .format(format)
//     .legend(true)
//     .unitId('Country Code');



// d3.csv(file_path, function(err, data){
//     if (err) throw err;

//     d3.select('#map')
//     .datum(data)
//     .call(map.draw, map);
// });

// function errorHandle(err){
//     if (err) throw err;
// };

// d3.csv(file_url).then(successHandle, errorHandle);

// function successHandle(data) {
//     console.log("using then!")
//     d3.select('#map')
//         .datum(data)
//         .call(map.draw, map);
// };



