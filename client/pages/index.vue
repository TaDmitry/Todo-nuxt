<template>
	<div class="todo-container">
		<div class="todo-input">
			<!-- eslint-disable-next-line vue/html-self-closing -->
			<input v-model="newTodo" type="text" placeholder="Введите задание" @keyup.enter="addTodo" />
			<button @click="addTodo">Добавить</button>
		</div>

		<ul class="todo-list">
			<li v-for="todo in todos" :key="todo.id" class="todo-item" :class="{ done: todo.done }">
				<!-- eslint-disable-next-line vue/html-self-closing -->
				<input v-model="todo.done" type="checkbox" />

				<template v-if="editingId !== todo.id">
					<div class="todo-content">
						<span class="todo-text">{{ todo.text }}</span>
						<span class="todo-date">({{ todo.createdAt }})</span>
					</div>
					<div class="todo-actions">
						<button @click="startEditing(todo)">Изменить</button>
						<button @click="deleteTodo(todo.id)">Удалить</button>
					</div>
				</template>

				<template v-else>
					<!-- eslint-disable-next-line vue/html-self-closing -->
					<input v-model="todo.text" type="text" @keyup.enter="finishEditing" />
					<div class="todo-actions">
						<button @click="finishEditing">Сохранить</button>
					</div>
				</template>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const STORAGE_KEY = "nuxt-todos";

const newTodo = ref("");
const todos = ref([]);
const editingId = ref(null);

// Загружаем задачи из localStorage
const loadTodos = () => {
	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved) {
		try {
			todos.value = JSON.parse(saved);
		} catch (error) {
			console.error("Ошибка загрузки задач", error);
		}
	}
};

// Сохраняем задачи в localStorage
const saveTodos = () => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value));
};

// Добавление новой задачи
const addTodo = () => {
	const text = newTodo.value.trim();
	if (!text) return;

	todos.value.push({
		id: Date.now(),
		text,
		done: false,
		createdAt: new Date().toLocaleString(),
	});
	newTodo.value = "";
};

// Удаление задачи по ID
const deleteTodo = (id) => {
	todos.value = todos.value.filter((todo) => todo.id !== id);
};

// Начало редактирования
const startEditing = (todo) => {
	editingId.value = todo.id;
};

// Завершение редактирования
const finishEditing = () => {
	editingId.value = null;
};

// Загрузка списка при монтировании
onMounted(loadTodos);
// Автоматически сохраняем изменения при любом изменении
watch(
	todos,
	() => {
		saveTodos();
	},
	{ deep: true }
);
</script>

<style lang="scss" scoped>
.todo-container {
	color: $white;
	padding: 1rem;
	font-family: Arial, sans-serif;
}

.todo-input {
	display: flex;
	align-items: center;
	margin-bottom: 15px;

	input {
		flex: 1;
		padding: 10px;
		border: 1px solid $black-333;
		border-radius: 6px;
		background-color: lighten($black-180, 10%);
		color: $white;
		margin-right: 10px;
		font-size: 16px;
		font-family: "Oswald", sans-serif;

		&:focus {
			outline: none;
			border-color: $accent-color;
		}
	}

	button {
		padding: 10px 15px;
		border: none;
		border-radius: 6px;
		background-color: $accent-color;
		color: $white;
		cursor: pointer;
		font-size: 16px;
		transition: background-color 0.3s;
		font-family: "Oswald", sans-serif;

		&:hover {
			background-color: darken($accent-color, 10%);
		}
	}
}

.todo-list {
	list-style: none;
	padding: 0;

	.todo-item {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid $black-333;
		padding: 10px 0;

		input[type="checkbox"] {
			margin-right: 10px;
			width: 18px;
			height: 18px;
			cursor: pointer;
		}

		.todo-content {
			display: flex;
			flex-direction: column;
			flex: 1;
			min-width: 0;

			.todo-text {
				font-size: 18px;
				color: var(--text);
				font-family: "Oswald", sans-serif;
				overflow-wrap: break-word;
				word-break: break-all;
			}

			.todo-date {
				font-size: 14px;
				color: var(--text);
				font-family: "Oswald", sans-serif;
				font-style: italic;
			}
		}

		&.done {
			.todo-text {
				text-decoration: line-through;
				opacity: 0.7;
			}
		}

		input[type="text"] {
			flex: 1;
			padding: 5px;
			border: 1px solid $black-333;
			border-radius: 6px;
			background-color: lighten($black-180, 10%);
			color: $white;
			font-size: 16px;
			margin-right: 10px;

			&:focus {
				outline: none;
				border-color: $accent-color;
			}
		}

		.todo-actions {
			display: flex;
			gap: 5px;
			margin: 5px 0 0 12px;

			button {
				padding: 5px 10px;
				border: none;
				border-radius: 6px;
				background-color: $accent-color;
				color: white;
				cursor: pointer;
				transition: background-color 0.3s;
				font-size: 14px;
				font-family: "Oswald", sans-serif;

				&:hover {
					background-color: darken($accent-color, 10%);
				}
			}
		}
	}
}

@media (max-width: 375px) {
	.todo-input {
		flex-direction: column;
		align-items: stretch;

		input {
			margin: 0 0 10px 0;
		}
	}
}
</style>
