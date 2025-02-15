/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 255.0, "minX": 0.0, "maxY": 836.0, "series": [{"data": [[0.0, 255.0], [0.1, 255.0], [0.2, 255.0], [0.3, 255.0], [0.4, 255.0], [0.5, 255.0], [0.6, 255.0], [0.7, 255.0], [0.8, 255.0], [0.9, 255.0], [1.0, 255.0], [1.1, 255.0], [1.2, 255.0], [1.3, 255.0], [1.4, 255.0], [1.5, 255.0], [1.6, 255.0], [1.7, 255.0], [1.8, 256.0], [1.9, 256.0], [2.0, 256.0], [2.1, 256.0], [2.2, 256.0], [2.3, 256.0], [2.4, 256.0], [2.5, 256.0], [2.6, 256.0], [2.7, 256.0], [2.8, 256.0], [2.9, 256.0], [3.0, 256.0], [3.1, 256.0], [3.2, 256.0], [3.3, 256.0], [3.4, 256.0], [3.5, 256.0], [3.6, 257.0], [3.7, 257.0], [3.8, 257.0], [3.9, 257.0], [4.0, 257.0], [4.1, 257.0], [4.2, 257.0], [4.3, 257.0], [4.4, 257.0], [4.5, 257.0], [4.6, 257.0], [4.7, 257.0], [4.8, 257.0], [4.9, 257.0], [5.0, 257.0], [5.1, 257.0], [5.2, 257.0], [5.3, 257.0], [5.4, 258.0], [5.5, 258.0], [5.6, 258.0], [5.7, 258.0], [5.8, 258.0], [5.9, 258.0], [6.0, 258.0], [6.1, 258.0], [6.2, 258.0], [6.3, 258.0], [6.4, 258.0], [6.5, 258.0], [6.6, 258.0], [6.7, 258.0], [6.8, 258.0], [6.9, 258.0], [7.0, 258.0], [7.1, 258.0], [7.2, 260.0], [7.3, 260.0], [7.4, 260.0], [7.5, 260.0], [7.6, 260.0], [7.7, 260.0], [7.8, 260.0], [7.9, 260.0], [8.0, 260.0], [8.1, 260.0], [8.2, 260.0], [8.3, 260.0], [8.4, 260.0], [8.5, 260.0], [8.6, 260.0], [8.7, 260.0], [8.8, 260.0], [8.9, 260.0], [9.0, 260.0], [9.1, 260.0], [9.2, 260.0], [9.3, 260.0], [9.4, 260.0], [9.5, 260.0], [9.6, 260.0], [9.7, 260.0], [9.8, 260.0], [9.9, 260.0], [10.0, 260.0], [10.1, 260.0], [10.2, 260.0], [10.3, 260.0], [10.4, 260.0], [10.5, 260.0], [10.6, 260.0], [10.7, 260.0], [10.8, 261.0], [10.9, 261.0], [11.0, 261.0], [11.1, 261.0], [11.2, 261.0], [11.3, 261.0], [11.4, 261.0], [11.5, 261.0], [11.6, 261.0], [11.7, 261.0], [11.8, 261.0], [11.9, 261.0], [12.0, 261.0], [12.1, 261.0], [12.2, 261.0], [12.3, 261.0], [12.4, 261.0], [12.5, 261.0], [12.6, 264.0], [12.7, 264.0], [12.8, 264.0], [12.9, 264.0], [13.0, 264.0], [13.1, 264.0], [13.2, 264.0], [13.3, 264.0], [13.4, 264.0], [13.5, 264.0], [13.6, 264.0], [13.7, 264.0], [13.8, 264.0], [13.9, 264.0], [14.0, 264.0], [14.1, 264.0], [14.2, 264.0], [14.3, 266.0], [14.4, 266.0], [14.5, 266.0], [14.6, 266.0], [14.7, 266.0], [14.8, 266.0], [14.9, 266.0], [15.0, 266.0], [15.1, 266.0], [15.2, 266.0], [15.3, 266.0], [15.4, 266.0], [15.5, 266.0], [15.6, 266.0], [15.7, 266.0], [15.8, 266.0], [15.9, 266.0], [16.0, 266.0], [16.1, 270.0], [16.2, 270.0], [16.3, 270.0], [16.4, 270.0], [16.5, 270.0], [16.6, 270.0], [16.7, 270.0], [16.8, 270.0], [16.9, 270.0], [17.0, 270.0], [17.1, 270.0], [17.2, 270.0], [17.3, 270.0], [17.4, 270.0], [17.5, 270.0], [17.6, 270.0], [17.7, 270.0], [17.8, 270.0], [17.9, 280.0], [18.0, 280.0], [18.1, 280.0], [18.2, 280.0], [18.3, 280.0], [18.4, 280.0], [18.5, 280.0], [18.6, 280.0], [18.7, 280.0], [18.8, 280.0], [18.9, 280.0], [19.0, 280.0], [19.1, 280.0], [19.2, 280.0], [19.3, 280.0], [19.4, 280.0], [19.5, 280.0], [19.6, 280.0], [19.7, 280.0], [19.8, 280.0], [19.9, 280.0], [20.0, 280.0], [20.1, 280.0], [20.2, 280.0], [20.3, 280.0], [20.4, 280.0], [20.5, 280.0], [20.6, 280.0], [20.7, 280.0], [20.8, 280.0], [20.9, 280.0], [21.0, 280.0], [21.1, 280.0], [21.2, 280.0], [21.3, 280.0], [21.4, 280.0], [21.5, 280.0], [21.6, 280.0], [21.7, 280.0], [21.8, 280.0], [21.9, 280.0], [22.0, 280.0], [22.1, 280.0], [22.2, 280.0], [22.3, 280.0], [22.4, 280.0], [22.5, 280.0], [22.6, 280.0], [22.7, 280.0], [22.8, 280.0], [22.9, 280.0], [23.0, 280.0], [23.1, 280.0], [23.2, 280.0], [23.3, 286.0], [23.4, 286.0], [23.5, 286.0], [23.6, 286.0], [23.7, 286.0], [23.8, 286.0], [23.9, 286.0], [24.0, 286.0], [24.1, 286.0], [24.2, 286.0], [24.3, 286.0], [24.4, 286.0], [24.5, 286.0], [24.6, 286.0], [24.7, 286.0], [24.8, 286.0], [24.9, 286.0], [25.0, 288.0], [25.1, 288.0], [25.2, 288.0], [25.3, 288.0], [25.4, 288.0], [25.5, 288.0], [25.6, 288.0], [25.7, 288.0], [25.8, 288.0], [25.9, 288.0], [26.0, 288.0], [26.1, 288.0], [26.2, 288.0], [26.3, 288.0], [26.4, 288.0], [26.5, 288.0], [26.6, 288.0], [26.7, 288.0], [26.8, 289.0], [26.9, 289.0], [27.0, 289.0], [27.1, 289.0], [27.2, 289.0], [27.3, 289.0], [27.4, 289.0], [27.5, 289.0], [27.6, 289.0], [27.7, 289.0], [27.8, 289.0], [27.9, 289.0], [28.0, 289.0], [28.1, 289.0], [28.2, 289.0], [28.3, 289.0], [28.4, 289.0], [28.5, 289.0], [28.6, 290.0], [28.7, 290.0], [28.8, 290.0], [28.9, 290.0], [29.0, 290.0], [29.1, 290.0], [29.2, 290.0], [29.3, 290.0], [29.4, 290.0], [29.5, 290.0], [29.6, 290.0], [29.7, 290.0], [29.8, 290.0], [29.9, 290.0], [30.0, 290.0], [30.1, 290.0], [30.2, 290.0], [30.3, 290.0], [30.4, 290.0], [30.5, 290.0], [30.6, 290.0], [30.7, 290.0], [30.8, 290.0], [30.9, 290.0], [31.0, 290.0], [31.1, 290.0], [31.2, 290.0], [31.3, 290.0], [31.4, 290.0], [31.5, 290.0], [31.6, 290.0], [31.7, 290.0], [31.8, 290.0], [31.9, 290.0], [32.0, 290.0], [32.1, 290.0], [32.2, 290.0], [32.3, 290.0], [32.4, 290.0], [32.5, 290.0], [32.6, 290.0], [32.7, 290.0], [32.8, 290.0], [32.9, 290.0], [33.0, 290.0], [33.1, 290.0], [33.2, 290.0], [33.3, 290.0], [33.4, 290.0], [33.5, 290.0], [33.6, 290.0], [33.7, 290.0], [33.8, 290.0], [33.9, 290.0], [34.0, 292.0], [34.1, 292.0], [34.2, 292.0], [34.3, 292.0], [34.4, 292.0], [34.5, 292.0], [34.6, 292.0], [34.7, 292.0], [34.8, 292.0], [34.9, 292.0], [35.0, 292.0], [35.1, 292.0], [35.2, 292.0], [35.3, 292.0], [35.4, 292.0], [35.5, 292.0], [35.6, 292.0], [35.7, 292.0], [35.8, 500.0], [35.9, 500.0], [36.0, 500.0], [36.1, 500.0], [36.2, 500.0], [36.3, 500.0], [36.4, 500.0], [36.5, 500.0], [36.6, 500.0], [36.7, 500.0], [36.8, 500.0], [36.9, 500.0], [37.0, 500.0], [37.1, 500.0], [37.2, 500.0], [37.3, 500.0], [37.4, 500.0], [37.5, 500.0], [37.6, 500.0], [37.7, 500.0], [37.8, 500.0], [37.9, 500.0], [38.0, 500.0], [38.1, 500.0], [38.2, 500.0], [38.3, 500.0], [38.4, 500.0], [38.5, 500.0], [38.6, 500.0], [38.7, 500.0], [38.8, 500.0], [38.9, 500.0], [39.0, 500.0], [39.1, 500.0], [39.2, 500.0], [39.3, 502.0], [39.4, 502.0], [39.5, 502.0], [39.6, 502.0], [39.7, 502.0], [39.8, 502.0], [39.9, 502.0], [40.0, 502.0], [40.1, 502.0], [40.2, 502.0], [40.3, 502.0], [40.4, 502.0], [40.5, 502.0], [40.6, 502.0], [40.7, 502.0], [40.8, 502.0], [40.9, 502.0], [41.0, 502.0], [41.1, 510.0], [41.2, 510.0], [41.3, 510.0], [41.4, 510.0], [41.5, 510.0], [41.6, 510.0], [41.7, 510.0], [41.8, 510.0], [41.9, 510.0], [42.0, 510.0], [42.1, 510.0], [42.2, 510.0], [42.3, 510.0], [42.4, 510.0], [42.5, 510.0], [42.6, 510.0], [42.7, 510.0], [42.8, 510.0], [42.9, 510.0], [43.0, 510.0], [43.1, 510.0], [43.2, 510.0], [43.3, 510.0], [43.4, 510.0], [43.5, 510.0], [43.6, 510.0], [43.7, 510.0], [43.8, 510.0], [43.9, 510.0], [44.0, 510.0], [44.1, 510.0], [44.2, 510.0], [44.3, 510.0], [44.4, 510.0], [44.5, 510.0], [44.6, 510.0], [44.7, 511.0], [44.8, 511.0], [44.9, 511.0], [45.0, 511.0], [45.1, 511.0], [45.2, 511.0], [45.3, 511.0], [45.4, 511.0], [45.5, 511.0], [45.6, 511.0], [45.7, 511.0], [45.8, 511.0], [45.9, 511.0], [46.0, 511.0], [46.1, 511.0], [46.2, 511.0], [46.3, 511.0], [46.4, 511.0], [46.5, 513.0], [46.6, 513.0], [46.7, 513.0], [46.8, 513.0], [46.9, 513.0], [47.0, 513.0], [47.1, 513.0], [47.2, 513.0], [47.3, 513.0], [47.4, 513.0], [47.5, 513.0], [47.6, 513.0], [47.7, 513.0], [47.8, 513.0], [47.9, 513.0], [48.0, 513.0], [48.1, 513.0], [48.2, 513.0], [48.3, 519.0], [48.4, 519.0], [48.5, 519.0], [48.6, 519.0], [48.7, 519.0], [48.8, 519.0], [48.9, 519.0], [49.0, 519.0], [49.1, 519.0], [49.2, 519.0], [49.3, 519.0], [49.4, 519.0], [49.5, 519.0], [49.6, 519.0], [49.7, 519.0], [49.8, 519.0], [49.9, 519.0], [50.0, 522.0], [50.1, 522.0], [50.2, 522.0], [50.3, 522.0], [50.4, 522.0], [50.5, 522.0], [50.6, 522.0], [50.7, 522.0], [50.8, 522.0], [50.9, 522.0], [51.0, 522.0], [51.1, 522.0], [51.2, 522.0], [51.3, 522.0], [51.4, 522.0], [51.5, 522.0], [51.6, 522.0], [51.7, 522.0], [51.8, 522.0], [51.9, 522.0], [52.0, 522.0], [52.1, 522.0], [52.2, 522.0], [52.3, 522.0], [52.4, 522.0], [52.5, 522.0], [52.6, 522.0], [52.7, 522.0], [52.8, 522.0], [52.9, 522.0], [53.0, 522.0], [53.1, 522.0], [53.2, 522.0], [53.3, 522.0], [53.4, 522.0], [53.5, 522.0], [53.6, 522.0], [53.7, 522.0], [53.8, 522.0], [53.9, 522.0], [54.0, 522.0], [54.1, 522.0], [54.2, 522.0], [54.3, 522.0], [54.4, 522.0], [54.5, 522.0], [54.6, 522.0], [54.7, 522.0], [54.8, 522.0], [54.9, 522.0], [55.0, 522.0], [55.1, 522.0], [55.2, 522.0], [55.3, 522.0], [55.4, 526.0], [55.5, 526.0], [55.6, 526.0], [55.7, 526.0], [55.8, 526.0], [55.9, 526.0], [56.0, 526.0], [56.1, 526.0], [56.2, 526.0], [56.3, 526.0], [56.4, 526.0], [56.5, 526.0], [56.6, 526.0], [56.7, 526.0], [56.8, 526.0], [56.9, 526.0], [57.0, 526.0], [57.1, 526.0], [57.2, 528.0], [57.3, 528.0], [57.4, 528.0], [57.5, 528.0], [57.6, 528.0], [57.7, 528.0], [57.8, 528.0], [57.9, 528.0], [58.0, 528.0], [58.1, 528.0], [58.2, 528.0], [58.3, 528.0], [58.4, 528.0], [58.5, 528.0], [58.6, 528.0], [58.7, 528.0], [58.8, 528.0], [58.9, 528.0], [59.0, 528.0], [59.1, 528.0], [59.2, 528.0], [59.3, 528.0], [59.4, 528.0], [59.5, 528.0], [59.6, 528.0], [59.7, 528.0], [59.8, 528.0], [59.9, 528.0], [60.0, 528.0], [60.1, 528.0], [60.2, 528.0], [60.3, 528.0], [60.4, 528.0], [60.5, 528.0], [60.6, 528.0], [60.7, 528.0], [60.8, 546.0], [60.9, 546.0], [61.0, 546.0], [61.1, 546.0], [61.2, 546.0], [61.3, 546.0], [61.4, 546.0], [61.5, 546.0], [61.6, 546.0], [61.7, 546.0], [61.8, 546.0], [61.9, 546.0], [62.0, 546.0], [62.1, 546.0], [62.2, 546.0], [62.3, 546.0], [62.4, 546.0], [62.5, 547.0], [62.6, 547.0], [62.7, 547.0], [62.8, 547.0], [62.9, 547.0], [63.0, 547.0], [63.1, 547.0], [63.2, 547.0], [63.3, 547.0], [63.4, 547.0], [63.5, 547.0], [63.6, 547.0], [63.7, 547.0], [63.8, 547.0], [63.9, 547.0], [64.0, 547.0], [64.1, 547.0], [64.2, 547.0], [64.3, 551.0], [64.4, 551.0], [64.5, 551.0], [64.6, 551.0], [64.7, 551.0], [64.8, 551.0], [64.9, 551.0], [65.0, 551.0], [65.1, 551.0], [65.2, 551.0], [65.3, 551.0], [65.4, 551.0], [65.5, 551.0], [65.6, 551.0], [65.7, 551.0], [65.8, 551.0], [65.9, 551.0], [66.0, 551.0], [66.1, 553.0], [66.2, 553.0], [66.3, 553.0], [66.4, 553.0], [66.5, 553.0], [66.6, 553.0], [66.7, 553.0], [66.8, 553.0], [66.9, 553.0], [67.0, 553.0], [67.1, 553.0], [67.2, 553.0], [67.3, 553.0], [67.4, 553.0], [67.5, 553.0], [67.6, 553.0], [67.7, 553.0], [67.8, 553.0], [67.9, 554.0], [68.0, 554.0], [68.1, 554.0], [68.2, 554.0], [68.3, 554.0], [68.4, 554.0], [68.5, 554.0], [68.6, 554.0], [68.7, 554.0], [68.8, 554.0], [68.9, 554.0], [69.0, 554.0], [69.1, 554.0], [69.2, 554.0], [69.3, 554.0], [69.4, 554.0], [69.5, 554.0], [69.6, 554.0], [69.7, 563.0], [69.8, 563.0], [69.9, 563.0], [70.0, 563.0], [70.1, 563.0], [70.2, 563.0], [70.3, 563.0], [70.4, 563.0], [70.5, 563.0], [70.6, 563.0], [70.7, 563.0], [70.8, 563.0], [70.9, 563.0], [71.0, 563.0], [71.1, 563.0], [71.2, 563.0], [71.3, 563.0], [71.4, 563.0], [71.5, 564.0], [71.6, 564.0], [71.7, 564.0], [71.8, 564.0], [71.9, 564.0], [72.0, 564.0], [72.1, 564.0], [72.2, 564.0], [72.3, 564.0], [72.4, 564.0], [72.5, 564.0], [72.6, 564.0], [72.7, 564.0], [72.8, 564.0], [72.9, 564.0], [73.0, 564.0], [73.1, 564.0], [73.2, 564.0], [73.3, 567.0], [73.4, 567.0], [73.5, 567.0], [73.6, 567.0], [73.7, 567.0], [73.8, 567.0], [73.9, 567.0], [74.0, 567.0], [74.1, 567.0], [74.2, 567.0], [74.3, 567.0], [74.4, 567.0], [74.5, 567.0], [74.6, 567.0], [74.7, 567.0], [74.8, 567.0], [74.9, 567.0], [75.0, 567.0], [75.1, 567.0], [75.2, 567.0], [75.3, 567.0], [75.4, 567.0], [75.5, 567.0], [75.6, 567.0], [75.7, 567.0], [75.8, 567.0], [75.9, 567.0], [76.0, 567.0], [76.1, 567.0], [76.2, 567.0], [76.3, 567.0], [76.4, 567.0], [76.5, 567.0], [76.6, 567.0], [76.7, 567.0], [76.8, 570.0], [76.9, 570.0], [77.0, 570.0], [77.1, 570.0], [77.2, 570.0], [77.3, 570.0], [77.4, 570.0], [77.5, 570.0], [77.6, 570.0], [77.7, 570.0], [77.8, 570.0], [77.9, 570.0], [78.0, 570.0], [78.1, 570.0], [78.2, 570.0], [78.3, 570.0], [78.4, 570.0], [78.5, 570.0], [78.6, 571.0], [78.7, 571.0], [78.8, 571.0], [78.9, 571.0], [79.0, 571.0], [79.1, 571.0], [79.2, 571.0], [79.3, 571.0], [79.4, 571.0], [79.5, 571.0], [79.6, 571.0], [79.7, 571.0], [79.8, 571.0], [79.9, 571.0], [80.0, 571.0], [80.1, 571.0], [80.2, 571.0], [80.3, 571.0], [80.4, 571.0], [80.5, 571.0], [80.6, 571.0], [80.7, 571.0], [80.8, 571.0], [80.9, 571.0], [81.0, 571.0], [81.1, 571.0], [81.2, 571.0], [81.3, 571.0], [81.4, 571.0], [81.5, 571.0], [81.6, 571.0], [81.7, 571.0], [81.8, 571.0], [81.9, 571.0], [82.0, 571.0], [82.1, 571.0], [82.2, 573.0], [82.3, 573.0], [82.4, 573.0], [82.5, 573.0], [82.6, 573.0], [82.7, 573.0], [82.8, 573.0], [82.9, 573.0], [83.0, 573.0], [83.1, 573.0], [83.2, 573.0], [83.3, 573.0], [83.4, 573.0], [83.5, 573.0], [83.6, 573.0], [83.7, 573.0], [83.8, 573.0], [83.9, 573.0], [84.0, 574.0], [84.1, 574.0], [84.2, 574.0], [84.3, 574.0], [84.4, 574.0], [84.5, 574.0], [84.6, 574.0], [84.7, 574.0], [84.8, 574.0], [84.9, 574.0], [85.0, 574.0], [85.1, 574.0], [85.2, 574.0], [85.3, 574.0], [85.4, 574.0], [85.5, 574.0], [85.6, 574.0], [85.7, 574.0], [85.8, 579.0], [85.9, 579.0], [86.0, 579.0], [86.1, 579.0], [86.2, 579.0], [86.3, 579.0], [86.4, 579.0], [86.5, 579.0], [86.6, 579.0], [86.7, 579.0], [86.8, 579.0], [86.9, 579.0], [87.0, 579.0], [87.1, 579.0], [87.2, 579.0], [87.3, 579.0], [87.4, 579.0], [87.5, 579.0], [87.6, 582.0], [87.7, 582.0], [87.8, 582.0], [87.9, 582.0], [88.0, 582.0], [88.1, 582.0], [88.2, 582.0], [88.3, 582.0], [88.4, 582.0], [88.5, 582.0], [88.6, 582.0], [88.7, 582.0], [88.8, 582.0], [88.9, 582.0], [89.0, 582.0], [89.1, 582.0], [89.2, 582.0], [89.3, 605.0], [89.4, 605.0], [89.5, 605.0], [89.6, 605.0], [89.7, 605.0], [89.8, 605.0], [89.9, 605.0], [90.0, 605.0], [90.1, 605.0], [90.2, 605.0], [90.3, 605.0], [90.4, 605.0], [90.5, 605.0], [90.6, 605.0], [90.7, 605.0], [90.8, 605.0], [90.9, 605.0], [91.0, 605.0], [91.1, 609.0], [91.2, 609.0], [91.3, 609.0], [91.4, 609.0], [91.5, 609.0], [91.6, 609.0], [91.7, 609.0], [91.8, 609.0], [91.9, 609.0], [92.0, 609.0], [92.1, 609.0], [92.2, 609.0], [92.3, 609.0], [92.4, 609.0], [92.5, 609.0], [92.6, 609.0], [92.7, 609.0], [92.8, 609.0], [92.9, 620.0], [93.0, 620.0], [93.1, 620.0], [93.2, 620.0], [93.3, 620.0], [93.4, 620.0], [93.5, 620.0], [93.6, 620.0], [93.7, 620.0], [93.8, 620.0], [93.9, 620.0], [94.0, 620.0], [94.1, 620.0], [94.2, 620.0], [94.3, 620.0], [94.4, 620.0], [94.5, 620.0], [94.6, 620.0], [94.7, 746.0], [94.8, 746.0], [94.9, 746.0], [95.0, 746.0], [95.1, 746.0], [95.2, 746.0], [95.3, 746.0], [95.4, 746.0], [95.5, 746.0], [95.6, 746.0], [95.7, 746.0], [95.8, 746.0], [95.9, 746.0], [96.0, 746.0], [96.1, 746.0], [96.2, 746.0], [96.3, 746.0], [96.4, 746.0], [96.5, 772.0], [96.6, 772.0], [96.7, 772.0], [96.8, 772.0], [96.9, 772.0], [97.0, 772.0], [97.1, 772.0], [97.2, 772.0], [97.3, 772.0], [97.4, 772.0], [97.5, 772.0], [97.6, 772.0], [97.7, 772.0], [97.8, 772.0], [97.9, 772.0], [98.0, 772.0], [98.1, 772.0], [98.2, 772.0], [98.3, 836.0], [98.4, 836.0], [98.5, 836.0], [98.6, 836.0], [98.7, 836.0], [98.8, 836.0], [98.9, 836.0], [99.0, 836.0], [99.1, 836.0], [99.2, 836.0], [99.3, 836.0], [99.4, 836.0], [99.5, 836.0], [99.6, 836.0], [99.7, 836.0], [99.8, 836.0], [99.9, 836.0], [100.0, 836.0]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 30.0, "series": [{"data": [[600.0, 3.0], [700.0, 2.0], [200.0, 20.0], [800.0, 1.0], [500.0, 30.0]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 22.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 34.0, "series": [{"data": [[0.0, 22.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 34.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.5, "minX": 1.68897318E12, "maxY": 5.9, "series": [{"data": [[1.68897558E12, 5.9], [1.68906648E12, 1.5], [1.68897318E12, 4.6], [1.68907524E12, 1.5], [1.68907596E12, 1.5]], "isOverall": false, "label": "Endurance Test Suite", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68907596E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 258.0, "minX": 1.0, "maxY": 566.1666666666666, "series": [{"data": [[8.0, 454.0], [4.0, 458.0], [2.0, 459.1428571428571], [1.0, 386.0], [9.0, 467.5], [10.0, 326.5], [5.0, 258.0], [6.0, 457.66666666666663], [3.0, 566.1666666666666], [7.0, 541.125]], "isOverall": false, "label": "GET All Activities", "isController": false}, {"data": [[5.767857142857144, 462.5892857142858]], "isOverall": false, "label": "GET All Activities-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 6.366666666666666, "minX": 1.68897318E12, "maxY": 2068.6666666666665, "series": [{"data": [[1.68897558E12, 2068.6666666666665], [1.68906648E12, 103.63333333333334], [1.68897318E12, 517.1666666666666], [1.68907524E12, 103.63333333333334], [1.68907596E12, 103.63333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68897558E12, 127.33333333333333], [1.68906648E12, 6.366666666666666], [1.68897318E12, 31.833333333333332], [1.68907524E12, 6.366666666666666], [1.68907596E12, 6.366666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68907596E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 409.57500000000005, "minX": 1.68897318E12, "maxY": 669.0, "series": [{"data": [[1.68897558E12, 409.57500000000005], [1.68906648E12, 669.0], [1.68897318E12, 561.2], [1.68907524E12, 623.0], [1.68907596E12, 663.0]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68907596E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 409.55000000000007, "minX": 1.68897318E12, "maxY": 668.5, "series": [{"data": [[1.68897558E12, 409.55000000000007], [1.68906648E12, 668.5], [1.68897318E12, 561.2], [1.68907524E12, 622.5], [1.68907596E12, 663.0]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68907596E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 134.1, "minX": 1.68897318E12, "maxY": 395.0, "series": [{"data": [[1.68897558E12, 134.1], [1.68906648E12, 395.0], [1.68897318E12, 273.1], [1.68907524E12, 364.0], [1.68907596E12, 391.0]], "isOverall": false, "label": "GET All Activities", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68907596E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 255.0, "minX": 1.68897318E12, "maxY": 836.0, "series": [{"data": [[1.68897558E12, 582.0], [1.68906648E12, 836.0], [1.68897318E12, 620.0], [1.68907524E12, 746.0], [1.68907596E12, 772.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68897558E12, 255.0], [1.68906648E12, 502.0], [1.68897318E12, 513.0], [1.68907524E12, 500.0], [1.68907596E12, 554.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68897558E12, 570.9], [1.68906648E12, 836.0], [1.68897318E12, 618.9], [1.68907524E12, 746.0], [1.68907596E12, 772.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68897558E12, 582.0], [1.68906648E12, 836.0], [1.68897318E12, 620.0], [1.68907524E12, 746.0], [1.68907596E12, 772.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68897558E12, 396.0], [1.68906648E12, 669.0], [1.68897318E12, 561.0], [1.68907524E12, 623.0], [1.68907596E12, 663.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68897558E12, 578.6999999999999], [1.68906648E12, 836.0], [1.68897318E12, 620.0], [1.68907524E12, 746.0], [1.68907596E12, 772.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68907596E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 290.5, "minX": 2.0, "maxY": 587.0, "series": [{"data": [[2.0, 587.0], [8.0, 524.0], [12.0, 519.5], [6.0, 523.5], [14.0, 290.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 290.5, "minX": 2.0, "maxY": 587.0, "series": [{"data": [[2.0, 587.0], [8.0, 524.0], [12.0, 519.0], [6.0, 523.5], [14.0, 290.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.68897318E12, "maxY": 0.6166666666666667, "series": [{"data": [[1.68897558E12, 0.6166666666666667], [1.68906648E12, 0.03333333333333333], [1.68897318E12, 0.16666666666666666], [1.68897552E12, 0.05], [1.68907524E12, 0.03333333333333333], [1.68907596E12, 0.03333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68907596E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.68897318E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.68897558E12, 0.6666666666666666], [1.68906648E12, 0.03333333333333333], [1.68897318E12, 0.16666666666666666], [1.68907524E12, 0.03333333333333333], [1.68907596E12, 0.03333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68907596E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.68897318E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.68897558E12, 0.6666666666666666], [1.68906648E12, 0.03333333333333333], [1.68897318E12, 0.16666666666666666], [1.68907524E12, 0.03333333333333333], [1.68907596E12, 0.03333333333333333]], "isOverall": false, "label": "GET All Activities-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68907596E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.68897318E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.68897558E12, 0.6666666666666666], [1.68906648E12, 0.03333333333333333], [1.68897318E12, 0.16666666666666666], [1.68907524E12, 0.03333333333333333], [1.68907596E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68907596E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

