
file_url = 'https://raw.githubusercontent.com/Sheelasrinivasa/UTAustinDataCampProject2/master/WBL2018score.csv'


var income = ['High income (56)', 'Upper middle income (51)', 'Lower middle income (53)', 'Low income (29)'];


function groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

function getLength(xs, key) {
    return +xs[key].length;
};

function getQlist(Tid, Qnum) {
    var arr = [];
    for (i = 0; i < Qnum; i++) { 
        Qstr = Tid + '_Q' + (i+1);
        arr.push(Qstr);
    };

    return arr;

};



var T5_list = getQlist('T5',4);


d3.csv(file_url, function(err, data){

    console.log(data);

    
    function passNum(qq, incomeLevel) {
        var q1 = groupBy(data, qq);
        var incomeGroup = groupBy(q1[1], 'Income group (Country number)'); 
        return +getLength(incomeGroup, incomeLevel);
    };

    function getArrY(T_list, income){
        var i;
        var arr = [];
        for (i = 0; i < T_list.length; i++) { 
            arr.push(passNum(T_list[i], income));
        };
    
        return arr
    };

    // var tt1 = passNum(T1_list[0], income[0]);
    // console.log(tt);

    

    // var tt2 = groupBy(data, T1_list[0]);
    // var tt3 = groupBy(tt2[1], 'Income group');
    // console.log(tt3);
    // var tt4 = groupBy(data, 'Income group')

    // var tt = getArrY(T1_list, income[0]);
    // console.log(tt4);



//     high income

    var trace1 = {
        x: T5_list,
        y: getArrY(T5_list, income[0]),
        name: 'High income(Total:56)',
        type: 'bar'
        
      };
    
    // Upper middle income
    var trace2 = {
        x: T5_list,
        y: getArrY(T5_list, income[1]),
        name: 'Upper middle income(Total:51)',
        type: 'bar'
      
    };

    var trace3 = {
        x: T5_list,
        y: getArrY(T5_list, income[2]),
        name: 'Lower middle income(Total:53)',
        type: 'bar'

    };

    var trace4 = {
        x: T5_list,
        y: getArrY(T5_list, income[3]),
        name: 'Lower income(Total:29)',
        type: 'bar'
 
    };
      
      var data = [trace1, trace2, trace3, trace4];
      
      var layout = {
        autosize: false,
        width: 1000,
        height: 500,
          title: 'BUILDING CREDIT (COUNTRY NUMBER)',
          font: {
            family: "Tahoma",
            size: 12,
            color: '#7f7f7f'
          },
          showlegend: true,
          legend: {
            // title:'Income Group(Country #)',
            x: 1,
            y: 1
          },

         
          xaxis: {
            
            // tickangle: 12
          },

          barmode: 'stack'};
      
      Plotly.newPlot('T5_bar', data, layout);


});
   



  
