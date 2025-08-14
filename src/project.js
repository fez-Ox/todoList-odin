class project {
	
	constructor(name, color) {
		this.name = name | "inbox";
		this.todoArr = [];
		this.color = color;
	}
	
	fuction addTodo(todo) {
		todoArr.append(todo);
	}

	function removeTodo(todoId) {
		let indexToDelete = todoArr.findIndex((value, index, array) => {
			return value.id = todoId;
		});

		todoArr.splice(indexToDelete, 1);
	}

	function print() {
		for (let i = 0; i < this.todoArr.length; i++) {
			console.log(this.todoArr[i].title);
		}
	}

	set name(name) {
		this._name = name;
	}

	set color(color) {
		this._color = color;
	}
	
	get name() {
		return this._name;
	}

	get color() {
		return this._color;
	}
}
