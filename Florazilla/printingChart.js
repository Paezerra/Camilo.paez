// Chart.js code for each chart goes here
// You can customize the charts based on your data and requirements
// Below is a simple example of creating a bar chart

// Soil Moisture Chart
var soilMoistureCtx = document.getElementById('soilMoisture').getContext('2d');
var soilMoistureChart = new Chart(soilMoistureCtx, {
    type: 'bar',
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
            label: 'Soil Moisture',
            data: [10, 20, 30],
            backgroundColor: 'rgba(75, 192, 192, 0.8)'
        }]
    },
    options: {}
});

// Room Temperature Chart
var roomTemperatureCtx = document.getElementById('roomTemperature').getContext('2d');
var roomTemperatureChart = new Chart(roomTemperatureCtx, {
    type: 'bar',
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
            label: 'Room Temperature',
            data: [15, 25, 20],
            backgroundColor: 'rgba(255, 99, 132, 0.8)'
        }]
    },
    options: {}
});

// Luminity Chart
var luminityCtx = document.getElementById('Luminity').getContext('2d');
var luminityChart = new Chart(luminityCtx, {
    type: 'bar',
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
            label: 'Luminity',
            data: [40, 50, 45],
            backgroundColor: 'rgba(54, 162, 235, 0.8)'
        }]
    },
    options: {}
});

// Room Humidity Chart
var roomHumidityCtx = document.getElementById('roomHumidity').getContext('2d');
var roomHumidityChart = new Chart(roomHumidityCtx, {
    type: 'bar',
    data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
            label: 'Room Humidity',
            data: [60, 70, 65],
            backgroundColor: 'rgba(255, 206, 86, 0.8)'
        }]
    },
    options: {}
});