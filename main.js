$(document).ready( () => {
	let todos = [{ name: 'one', completed: false }, { name: 'two', completed: false }];
	const loadAllTodos = () => {
		$('#todos').empty();
		let counter = 0;
		for (let name of todos) {
			if (name.completed === false) {
				$('#todos').append(`<div class="col s3 card">
														<li class="item card-title" data-todo-id="${counter}">${name.name}
														<div class="card-action"> 
														<button data-todo-id="${counter}" class="deleteItem">Delete</button>
														<button data-todo-id="${counter}" class="editItem">Edit</button></li>`);
			} else {
				$('#todos').append(`<div class="col s3 card">
														<li class="completed card-title" data-todo-id="${counter}">${name.name} 
														<div class="card-action"> 
														<button data-todo-id="${counter}" class="deleteItem">Delete</button>
														<button data-todo-id="${counter}" class="editItem">Edit</button></li>`);
			} counter += 1;
		}
	}

	$('#load_all_todos').on('click', (e) => {
		loadAllTodos();
	});

	$('#load_incomplete_todos').on('click', (e) => {
		let incomplete = [];
		for (let todo of todos) {
			if (todo.completed === false) {
				incomplete.push(todo);
			}
		}
		for (let name of incomplete) {
			$('#todos').empty();
			$('#todos').append(`<div class="col s3 card">
													<li class="card-title item">${name.name}</li>`);
		}
	});

	$('#load_completed_todos').on('click', (e) => {
		let completed = [];
		for (let todo of todos) {
			if (todo.completed === true) {
				completed.push(todo);
			}
		}
		for (let name of completed) {
			$('#todos').empty();
			$('#todos').append(`<div class="col s3 card">
													<li class="card-title item">${name.name}</li>`);
		}
	});

	$('#add').on('submit', (e) => {
		e.preventDefault();
		let todo = { name: $('#addTodo').val(),
								 completed: false };
		todos = [...todos, todo];
		$('#addTodo').val('');
		loadAllTodos();
	});

	$(document).on('click', '.item', (e) => {
		let id = $(e.target).data('todo-id');
		let todo = todos[id];
		todo.completed = true;
		loadAllTodos();
	});

	$(document).on('click', '.completed', (e) => {
		let id = $(e.target).data('todo-id');
		let todo = todos[id];
		todo.completed = false;
		loadAllTodos();
	});

	$(document).on('click', '.deleteItem', (e) => {
		let id = $(e.target).data('todo-id');
		todos.splice(id, 1);
		loadAllTodos();
	});

	$(document).on('click', '.editItem', (e) => {
		let id = $(e.target).data('todo-id');
		let todoEdit = todos[id];
		let todoName = todoEdit.name
		$('#editTodo').val(todoName);
		$('#editId').val(id);
		$('#edit_form').slideDown();
		$('#add').slideUp();
	});

	$('#edit').submit( (e) => {
		e.preventDefault();
		let form = e.target;
		let id = $('#editId').val();
		let editing = { name: $('#editTodo').val(),
							 completed: false };
		todos.splice(id, 1, editing);
		loadAllTodos();
		$('#editTodo').val('');
		$('#edit_form').slideUp();
		$('#add').slideDown();
	});

	loadAllTodos();


});



//ALL DONE IN es6
//have form for user to add todo item
//todo item shows up in list
//if user clicks item it gets marked complete or not complete
//have a visual indicator of complete

//BONUS
//ability to delete todos
//filter todos by complete / imcomplete / all
//edit todo name
