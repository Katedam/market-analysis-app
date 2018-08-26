function drawChart() {
    var chart = new CanvasJS.Chart("chart-container", {
        theme: "light1", // "light2", "dark1", "dark2"
        animationEnabled: false, // change to true		
        title:{
            text: "Clicks for Each Product"
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "column",
            dataPoints: [
                { label: "apple",  y: 10  },
                { label: "orange", y: 15  },
                { label: "banana", y: 25  },
                { label: "mango",  y: 30  },
                { label: "grape",  y: 28  }
            ]
        }
        ]
    });
    chart.render();