function drawChart() {
 var chart = new CanvasJS.Chart("chart-container", {
   title:{
     text: "Current User Votes"
   },
   data: [
   {
     type: "column",
     dataPoints: images,
   }
   ]
 });
 chart.render();
}

function drawHistoryChart() {
    var chart = new CanvasJS.Chart("history-chart-container", {
      title:{
        text: "Votes of All Time"
      },
      data: [
      {
        type: "doughnut",
        dataPoints: getProductStatus(),
      }
      ]
    });
    chart.render();
   }