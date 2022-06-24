

const table1 = document.getElementById('table1')


// add element above table

const table1Canvas = document.createElement('canvas')
table1Canvas.setAttribute('id', 'table1Canvas')




table1.before(table1Canvas)

const ctx = table1Canvas.getContext('2d');

var tableYear = [2002,2003,2004,2005];

new Chart(ctx, {
  type: "line",
  data: {
    labels: tableYear,
    datasets: [{ 
      data: [860,1140,1060,1060],
      label: "country1",
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900],
      label: "country2",
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000],
      label: "country3",
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});



// retrieve data from table1



let table1Value = []
let table1Countries = []
let table1Year = []




function getTableData(table, tableYear) {  
    const year = []
    const countries = []
    const value = []
    // get year data
    for (let i = 2; i < table.getElementsByTagName('tr')[1].getElementsByTagName('th').length; i++) {
        year.push(table.getElementsByTagName('tr')[1].getElementsByTagName('th')[i].innerText)
        console.log(i)
        console.log(year)
    }
    tableYear.push(year)
    console.log(tableYear)







}




; (() => {



})()