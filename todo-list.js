import { css, html, LitElement } from 'lit-element/lit-element.js';
import './todo.js';
import '@brightspace-ui/core/components/icons/icon.js';

class TodoList extends LitElement {

	static get properties() {
		return {
			prop1: { type: String },
			todos: { type: Array },
			newTodo: { type: String }
		};
	}

	static get styles() {
		return css`
			:host {
				display: inline-block;
			}
			:host([hidden]) {
				display: none;
			}
		`;
	}

	constructor() {
		super();

		this.prop1 = 'todo-list';
		this.todos = [
			{name: "lit element template"},
			{name: "create some todos"},
			{name: "maybe a button would be sweet"}
		];
		this.addEventListener( 'delete-todo', this.handleDeleteTodo);
	}

	render() {
		return html`
			<h2>Hello ${this.prop1}!</h2>
			<input type="text" id="new-todo" placeholder="New Todo">
			<button type="button" @click="${this.addTodo}">Add Todo</button>
			
			<ul>
			${this.todos.map(
			(todo, index) => html`
						<div>
							<d2l-labs-todo name="${todo.name}" id="${index}">
								<d2l-icon icon="tier1:awards" ></d2l-icon>
							</d2l-labs-todo>
						 </div>
					`
		)}
			</ul>
		`;
	}

	addTodo() {
		const newTodo = this.shadowRoot.getElementById('new-todo').value;
		this.todos = [
			...this.todos,
			{ name: newTodo }
		];
	}

	handleDeleteTodo(event) {
		let deletedId = event.detail.id;
		this.todos.splice(deletedId, 1);
		this.requestUpdate();
	}
}
customElements.define('d2l-labs-todo-list', TodoList);
