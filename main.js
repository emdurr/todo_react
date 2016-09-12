$(document).ready( () => {
	let todos = ['one', 'two'];
	const loadTodos = () => {
		$('#todos').empty();
		let counter = 1;
		for (let name of todos) {
			$('#todos').append(`<li class="item" data-todo-id="${counter}">${name}</li>`);
			counter += 1;
		}
	}
	
	$('#add').on('submit', (e) => {
		e.preventDefault();
		let todo = $('#addTodo').val();
		todos = [todo, ...todos];
		$('#addTodo').val('');
		loadTodos();
	});

	$(document).on('click', '.item', (e) => {
		$(e.target).toggleClass('completed');
	});
	loadTodos();


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
