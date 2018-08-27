function drawChart() {
 var chart = new CanvasJS.Chart("chart-container", {
   title:{
     text: "Total Votes for Each Product"
   },
   data: [
   {
     type: "bar",
     dataPoints: images,
   }
   ]
 });
 chart.render();
}

// function drawHistoryChart() {
//     var chart = new CanvasJS.Chart("history-chart-container", {
//       title:{
//         text: "Votes of All Time"
//       },
//       data: [
//       {
//         type: "doughnut",
//         dataPoints: copyImages,
//       }
//       ]
//     });
//     chart.render();
//    }