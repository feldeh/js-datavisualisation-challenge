

const table1 = document.getElementById('table1')


// add element above table

const canvas = document.createElement('canvas')


// const parentNode = table1.parentNode
// parentNode.insertBefore(canvas, table1)

table1.before(canvas)

const ctx = canvas.getContext('2d');

var pays = [100,200,300,400,500,600,700,800,900,1000];

new Chart(ctx, {
  type: "line",
  data: {
    labels: pays,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});



// retrieve data from table1



const tableData = []



function getData(table) {
    const tableData = []

    for (let i = 0; i < table.rows.length; i++) {
        const tr = table.rows[i]
        const rowData = []
        for (let j = 0; j < tr.cells.length; j++) {
            const td = tr.cells[j]
            // console.log(td)
        }
    }
}




; (() => {



})()