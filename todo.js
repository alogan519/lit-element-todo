import { css, html, LitElement } from 'lit-element/lit-element.js';

class Todo extends LitElement {
	static get properties() {
		return {
			name: {type: String},
			id: {type: Number}
		}
	}

	static get styles() {
		return css`
			.todo-wrapper {
				display: flex;
				padding-top: 0.5rem;
				padding-bottom: 0.5rem;
			}
			.todo {
				padding-left: 5px;
				padding-right: 5px;
			}
		`;
	}

	render() {
		return html`
			<div class="todo-wrapper">
				<slot></slot>
				<div class="todo">${this.name}</div>
				<button type="button" @click="${this.deleteTodo}">Delete</button>
			</div>
		`
	}

	deleteTodo() {
		let deleteEvent = new CustomEvent( 'delete-todo', {
			detail: {
				message: 'delete button clicked',
				id: this.id
			},
			bubbles:true,
			composed: true
		});
		this.dispatchEvent(deleteEvent);
	}
}

customElements.define('d2l-labs-todo', Todo);
