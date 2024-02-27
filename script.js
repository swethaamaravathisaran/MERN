//add task
function addtask()
{
    var task =document.getElementById('task-input').value;
    //not to add task when input is empty
    if(task.trim() !== ''){
     console.log('Task:',task)
     //to count the number of tasks
     var taskCount= document.getElementById('task-list').childElementCount;
     var totaltask = document.getElementById('task-count');
     totaltask.innerHTML = taskCount+1;
     //to create a list of tasks
    var taskItem =document.createElement('li')
    taskItem.textContent = task
    taskItem.className ='border border-gray-200 bg-white-200 rounded-lg p-10 shadow-md py-4 px-10 mt-3 items-center flex justify-between'
    //to add delete button
    var deleteButton =document.createElement('button')
    deleteButton.textContent =   'Delete Task'
    deleteButton.className=' bg-red-500 text-white-500 px-4 py-2 rounded-full p-6 shadow-md gap-3  '
    deleteButton.addEventListener('click',function(){
        taskItem.remove()
        var taskCount= document.getElementById('task-list').childElementCount;
        var totaltask = document.getElementById('task-count');
        totaltask.innerHTML = taskCount;
    })
    taskItem.appendChild(deleteButton)
  document.getElementById('task-list').appendChild(taskItem)
}
}
function deleteall() {
  // delete all tasks
   document.getElementById('task-list').innerHTML = ''
   var totaltask = document.getElementById('task-count');
   totaltask.innerHTML = 0
}