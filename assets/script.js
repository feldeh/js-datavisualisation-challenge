

const table1 = document.getElementById('table1')
const table2 = document.getElementById('table2')

const randHexColor = () => `#${Math.floor(Math.random() * Math.pow(16, 6)).toString(16)}`


const table1Chart = () => {
    const tableData = {
        labels: [],
        datasets: []
    }
    const countryNames = []
    const crimeData = []


    for (let i = 2; i < table1.getElementsByTagName('tr')[1].getElementsByTagName('th').length; i++) {
        tableData.labels.push(table1.getElementsByTagName('tr')[1].getElementsByTagName('th')[i].innerText)
    }

    for (let i = 1; i < table1.querySelectorAll('tbody> tr').length; i++) {
        const h = i - 1
        crimeData[h] = []
        countryNames[h] = []
        tableData.datasets[h] = []
        for (let j = 0; j < table1.querySelectorAll('tbody> tr')[i].querySelectorAll('td').length; j++) {

            if (j == 0) {
                countryNames[h].push(table1.querySelectorAll('tbody> tr')[i].querySelectorAll('td')[j].innerText)
            }
            else {
                crimeData[h].push(parseFloat((table1.querySelectorAll('tbody> tr')[i].querySelectorAll('td')[j].innerText.replace(',', '.'))))
            }
            const color = randHexColor()
            tableData.datasets[h] = { data: crimeData[h], label: countryNames[h], borderColor: color, backgroundColor: color, fill: false }

        }

    }



    const table1Canvas = document.createElement('canvas')
    table1Canvas.setAttribute('height', '300px')
    table1.before(table1Canvas)

    new Chart(table1Canvas, {
        type: 'line',
        data: tableData,
        options: {
            plugins: {
                title: {
                    display: true,
                    font: {
                        weight: 'bold',
                        size: '18px',
                    },
                    text: 'Offences recorded by the police, 2002-12'
                }
            },
            scales: {
                x: {
                    display: true,
                },
                y: {
                    display: true,
                    type: 'logarithmic',
                }
            }
        },
    })
}

table1Chart()

const table2Chart = () => {

    const tableData = {
        labels: [],
        datasets: []
    }
    const countryNames = []
    const homicideData = []

    for (let i = 2; i < table2.getElementsByTagName('thead')[0].getElementsByTagName('th').length; i++) {
        tableData.labels.push(table2.getElementsByTagName('thead')[0].getElementsByTagName('th')[i].innerText)
    }

    for (let i = 0; i < table2.querySelectorAll('tbody> tr').length; i++) {
        homicideData[i] = []
        countryNames[i] = []
        for (let j = 0; j < table2.querySelectorAll('tbody> tr')[i].querySelectorAll('td').length; j++) {

            if (j == 0) {
                countryNames[i].push(table2.querySelectorAll('tbody> tr')[i].querySelectorAll('td')[j].innerText)
            }
            else {
                homicideData[i].push((table2.querySelectorAll('tbody> tr')[i].querySelectorAll('td')[j].innerText))
            }
            tableData.datasets[i] = { data: homicideData[i], label: countryNames[i], backgroundColor: randHexColor() }

        }

    }


    const table2Canvas = document.createElement('canvas')
    table2Canvas.setAttribute('height', '250px')
    table2.before(table2Canvas)


    new Chart(table2Canvas, {
        type: 'bar',
        data: tableData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    font: {
                        weight: 'bold',
                        size: '18px',
                    },
                    text: 'Homicide, average per year, 2007-09 and 2010-12'
                }
            },
        }
    });
}

table2Chart()







// loadXhrRemoteData = () => {

//     let xhr = new XMLHttpRequest()

//     xhr.open('GET', 'https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json', true)

//     xhr.onload = function () {
//         if (xhr.status == 200) {
//             let data = JSON.parse(this.responseText)
//             console.log('REMOTE', data)
//         }
//     }

//     xhr.send()


// }

// loadXhrRemoteData()





const table3Canvas = document.createElement('canvas')
table3Canvas.setAttribute('background-color', 'red')
document.getElementById('bodyContent').before(table3Canvas)


const config = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            label: "Live Data",
            borderColor: "rgb(62,149,205)",
            backgroundColor: "rgb(62,149,205,0.1)",
        },
        ]
    }
}




const liveChart = new Chart(table3Canvas, config)

const chartRefresh = (chart, yData, xData) => {
    chart.data.labels = yData
    chart.data.datasets.forEach(element => {
        element.data = xData
    })
    chart.update()
}

let yData = []

setInterval(function fetchData() {
    fetch('https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json', {
        cache: "reload",
    })

        .then(response => response.json())
        .then(fetchedData => {

            for (let i = 0; i < fetchedData.length; i++) {
                yData[i] = fetchedData[i][0]
            }
            chartRefresh(liveChart, yData, fetchedData)

        })

}, 1000);

// let counter = 0

// setInterval(function fetchData() {
//     fetch('https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json', {
//         cache: "reload",
//     })

//         .then(response => response.json())
//         .then(data => {

//             data.forEach((element) => {
//                 y.push(counter)
//                 counter++
//                 x.push(element[1])
//             })

//             liveChart.config.data.labels = y
//             liveChart.config.data.datasets[0].data = x
//             liveChart.update()
//         })
// }, 2000);










; (() => {




})()