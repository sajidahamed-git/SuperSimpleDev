array = [

]

function addtodo(){
    let task = document.querySelector('.input').value
    let date = document.querySelector('.date').value
    array.push({task,date})
    renderHTML()
    console.log(array);    
}
function renderHTML(){
    let inner_HTML =''
    for (let index = 0; index < array.length; index++) {
        const arrayObject = array[index]
        console.log(arrayObject);
        const task = arrayObject.task
        const date = arrayObject.date

        const htmlString = `<div class = "lineitem">
        <div>${task}</div>
        <div>${date}</div>
        <button class = "delete-button" onclick = deleteTodo(${index})>Delete</button> 
        </div>
        `;

        inner_HTML = inner_HTML + htmlString

    }
    document.querySelector('.listtasks').innerHTML = inner_HTML
}

function deleteTodo(index) {
    array.splice(index, 1); // Remove the item from the array
    renderHTML(); // Re-render the tasks
}