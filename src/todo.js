export class todo {

	constructor(title, desc, duedate, priority) {
		this.title = title;
		this.desc = desc;
		this.duedate = duedate;
		this.priority = priority;
		this.id = crypto.randomUUID();
	}

	

	set title (title) {
		this._title = title;
	}

	set desc (desc) {
		this._desc = desc;
	}

	set duedate (duedate) {
		this._duedate = duedate;
	}

	set priority (priority) {
		this._priority = priority;
	}

	get title () {
		return this._title;
	}

	get desc () {
		return this._desc;
	}

	get duedate () {
		return this._duedate;
	}

	get priority () {
		return this._priority;
	}

}
