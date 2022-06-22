
// add element above table

    let h1 = document.createElement('h1')
    let text = document.createTextNode('TEST')
    h1.appendChild(text)

    const table1 = document.getElementById('table1')

    // parentNode property returns the parent of the specified node
    let parentNode = table1.parentNode
    // insert h1 before table1
    parentNode.insertBefore(h1, table1)



;(() => {



})()