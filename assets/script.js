

const table1 = document.getElementById('table1')
const table2 = document.getElementById('table2')

// random color function
const randHexColor = () => `#${Math.floor(Math.random() * Math.pow(16, 6)).toString(16)}`


const table1Chart = () => {
    const years = []
    const countryNames = []
    const tableData = []
    const tableDatasets = []

    // retrieve years data
    for (let i = 2; i < table1.getElementsByTagName('tr')[1].getElementsByTagName('th').length; i++) {
        years.push(table1.getElementsByTagName('tr')[1].getElementsByTagName('th')[i].innerText)
    }

    // retrieve datasets for each country
    for (let i = 1; i < table1.querySelectorAll('tbody> tr').length; i++) {
        const h = i - 1
        tableData[h] = []
        countryNames[h] = []
        tableDatasets[h] = []
        for (let j = 0; j < table1.querySelectorAll('tbody> tr')[i].querySelectorAll('td').length; j++) {

            if (j == 0) {
                countryNames[h].push(table1.querySelectorAll('tbody> tr')[i].querySelectorAll('td')[j].innerText)
            }
            else {
                tableData[h].push(parseFloat((table1.querySelectorAll('tbody> tr')[i].querySelectorAll('td')[j].innerText.replace(',', '.'))))
            }
            const color = randHexColor()
            tableDatasets[h] = { data: tableData[h], label: countryNames[h], borderColor: color, backgroundColor: color, fill: false }

        }

    }

    console.log("table1 years", years)
    console.log("table1 tableData", tableData)
    console.log("table1 countryNames", countryNames)
    console.log("table1 tableDatasets", tableDatasets)

    // create canvas element above table
    const table1Canvas = document.createElement('canvas')
    table1Canvas.setAttribute('height', '300px')
    table1.before(table1Canvas)

    // configure and generate chart with table data
    const ctx = table1Canvas.getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: tableDatasets
        },
        options: {
            responsive: true,
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

    const years = []
    const countryNames = []
    const tableData = []
    const tableDatasets = []

    // retrieve years values data
    for (let i = 2; i < table2.getElementsByTagName('thead')[0].getElementsByTagName('th').length; i++) {
        years.push(table2.getElementsByTagName('thead')[0].getElementsByTagName('th')[i].innerText)
    }

    // retrieve datasets for each country
    for (let i = 0; i < table2.querySelectorAll('tbody> tr').length; i++) {
        tableData[i] = []
        countryNames[i] = []
        tableDatasets[i] = []
        for (let j = 0; j < table2.querySelectorAll('tbody> tr')[i].querySelectorAll('td').length; j++) {

            if (j == 0) {
                countryNames[i].push(table2.querySelectorAll('tbody> tr')[i].querySelectorAll('td')[j].innerText)
            }
            else {
                tableData[i].push((table2.querySelectorAll('tbody> tr')[i].querySelectorAll('td')[j].innerText))
            }
            tableDatasets[i] = { data: tableData[i], label: countryNames[i], backgroundColor: randHexColor() }

        }

    }
    console.log("table2 years", years)
    console.log("table2 tableData", tableData)
    console.log("table2 countryNames", countryNames)
    console.log("table2 tableDatasets", tableDatasets)

    // create canvas element above table
    const table2Canvas = document.createElement('canvas')
    table2Canvas.setAttribute('height', '250px')
    table2.before(table2Canvas)

    // configure and generate chart with table data
    const ctx = table2Canvas.getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: tableDatasets
        },
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






    ; (() => {




    })()