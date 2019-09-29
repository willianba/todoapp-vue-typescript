<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script lang="ts">
  import axios, { AxiosResponse } from "axios";
  import { Component, Vue, Prop } from "vue-property-decorator";
  import { Todo } from "./types/Todo";
  import Todos from "./components/Todos.vue";
  import AddTodo from "./components/AddTodo.vue";
  import Header from "./components/layout/Header.vue";

  @Component({
    components: {
      Header,
      AddTodo,
      Todos
    }
  })
  export default class App extends Vue {
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

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666
  }
</style>
