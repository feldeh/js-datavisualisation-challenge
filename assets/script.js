

const table1 = document.getElementById('table1')
const table2 = document.getElementById('table2')


// create canvas

const table1Canvas = document.createElement('canvas')
table1Canvas.setAttribute('id', 'table1Canvas')

table1.before(table1Canvas)






const ctx = table1Canvas.getContext('2d');

var tableYear = [2002, 2003, 2004, 2005];

new Chart(ctx, {
    type: "line",
    data: {
        labels: tableYear,
        datasets: [{
            data: [860, 1140, 1060, 1060],
            label: "country1",
            borderColor: "red",
            fill: false
        }, {
            data: [1600, 1700, 1700, 1900],
            label: "country2",
            borderColor: "green",
            fill: false
        }, {
            data: [300, 700, 2000, 5000],
            label: "country3",
            borderColor: "blue",
            fill: false
        }]
    },
    options: {
        legend: { display: false }
    }
});



// retrieve data from ta ble1



let table1Value = []
let table1Countries = []
let table1Year = []







const getTable1Data = (table) => {
    const years = []
    const countryNames = []
    const tableData = []
    const chartDatasets = []
    const randHexColor = () => `#${Math.floor(Math.random() * Math.pow(16, 6)).toString(16)}`

    for (let i = 2; i < table.getElementsByTagName('tr')[1].getElementsByTagName('th').length; i++) {
        years.push(table.getElementsByTagName('tr')[1].getElementsByTagName('th')[i].innerText)
    }


    for (let i = 1; i < table.querySelectorAll('tbody> tr').length; i++) {
        const h = i - 1
        tableData[h] = []
        countryNames[h] = []
        chartDatasets[h] = []
        for (let j = 0; j < table.querySelectorAll('tbody> tr')[i].querySelectorAll('td').length; j++) {

            if (j == 0) {
                countryNames[h].push(table.querySelectorAll('tbody> tr')[i].querySelectorAll('td')[j].innerText)
            }
            else {
                tableData[h].push(parseFloat((table.querySelectorAll('tbody> tr')[i].querySelectorAll('td')[j].innerText.replace(/,/, '.'))))
            }
            chartDatasets[h] = { data: tableData[h], label: countryNames[h], borderColor: randHexColor(), fill: false }

        }

    }

    console.log("years", years)
    console.log("tableData", tableData)
    console.log("countryNames", countryNames)
    console.log("chartDatasets", chartDatasets)
}

getTable1Data(table1)


; (() => {




})()