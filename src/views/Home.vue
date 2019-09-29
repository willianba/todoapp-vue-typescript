<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script lang="ts">
  import axios, { AxiosResponse } from "axios";
  import { Component, Vue, Prop } from "vue-property-decorator";
  import { Todo } from "../types/Todo";
  import Todos from "../components/Todos.vue";
  import AddTodo from "../components/AddTodo.vue";


  @Component({
    components: {
      AddTodo,
      Todos
    }
  })
  export default class Home extends Vue {
    private todos: Todo[] = [];

    public deleteTodo(id: number): void {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res: AxiosResponse) => this.todos = this.todos.filter((todo: Todo) => todo.id !== id))
      .catch((error: Error) => console.error(error));
    }

    public addTodo(newTodo: Todo): void {
      const { title, completed } = newTodo;
      axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed })
        .then((res: AxiosResponse) => this.todos = [...this.todos, res.data])
        .catch((error: Error) => console.error(error));
    }

    public created(): void {
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((res: AxiosResponse) => this.todos = res.data)
        .catch((error: Error) => console.error(error));
    }
  }
</script>
