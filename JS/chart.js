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
