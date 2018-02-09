'use strict';

var tasksCounter = 0;
var priority = '';

var taskList = document.querySelector('.tasks .container');
taskList.addEventListener('click', deleteTask);
var priorityButtons = document.querySelector('.priority');
priorityButtons.addEventListener('click', function(e){
	if (e.target.classList.contains('high')) priority = 'high';
	else if (e.target.classList.contains('med')) priority = 'med';
	else if (e.target.classList.contains('low')) priority = 'low';	
	else if (e.target.classList.contains('ns')) priority = 'ns';
});
var newTaskBtn = document.querySelector('.createbtn');
newTaskBtn.addEventListener('click', addNewTask);

function deleteTask(e) {
	console.log(e);
	if (e.target.classList.contains('done')) {
		tasksCounter++;
		var task = e.target.parentElement.parentElement;
		taskList.removeChild(task);
	}
	else if (e.target.classList.contains('notdone')) {
		var task = e.target.parentElement.parentElement;
		taskList.removeChild(task);
	}
	if(document.getElementsByClassName('task').length == 0) {
		var noTasks = document.createElement('p');
		var tasktext = '';
		noTasks.innerHTML = 'Вы выполнили ' + tasksCounter + ' задач(и). Задач на сегодня больше нет.';
		taskList.appendChild(noTasks);
	}
}

function addNewTask(e) {
	var name = document.querySelector('.nameinput').value;
	if (name !== '' && (priority == 'high' || priority == 'med' || priority == 'low' || priority == 'ns')) {
		var newTask = document.createElement('div');
		newTask.className = 'task';
		var newPrior = document.createElement('i');
		newPrior.className = priority + ' prior';
		newTask.appendChild(newPrior);
		var newTaskName = document.createElement('span');
		newTaskName.className = 'taskname';
		newTaskName.innerHTML = name;
		newTask.appendChild(newTaskName);
		var newDonenessButtons = document.createElement('div');
		newDonenessButtons.className = 'doneness';
		newTask.appendChild(newDonenessButtons);
		var newDoneButton = document.createElement('button');
		newDoneButton.className = 'done';
		newDoneButton.innerHTML = 'done';
		newDonenessButtons.appendChild(newDoneButton);
		var newNotDoneButton = document.createElement('button');
		newNotDoneButton.className = 'notdone';
		newNotDoneButton.innerHTML = 'not done';
		newDonenessButtons.appendChild(newNotDoneButton);
		taskList.appendChild(newTask);
		priority = '';
	}
	else {
		if (name) alert('Вы не указали приоритет задачи.')
		else alert('Вы не указали имя задачи.')
	}
}