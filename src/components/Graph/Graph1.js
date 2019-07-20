import React from "react";
import Plot from "react-plotly.js";
import "../Graph/Graph1.css";
const Graph1 = () => {
    var level = 175;
    var degrees = 180 - level,
     radius = .5;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
     pathX = String(x),
     space = ' ',
     pathY = String(y),
     pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);
    return (  
      <Plot className="graph1"
    
      var data = { [
          {
                type: 'scatter',
                x: [0], y:[0],
                    marker: {size: 28, color:'850000'},
                    showlegend: false,
                    name: 'speed',
                    text: level,
                    hoverinfo: 'text+name'},
                { values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
                rotation: 90,
                text: ['100%', '83.33%', '66.66%', '50%',
                        '33.33%', '16.67%', ''],
                textinfo: 'text',
                textposition:'inside',
                marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
                                 'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
                                 'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
                                 'rgba(255, 255, 255, 0)']},
                labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
                hoverinfo: 'label',
                hole: .5,
                type: 'pie',
                showlegend: false
          }
          
        ] }
        

      />
    );
  };
  
  export default Graph1;