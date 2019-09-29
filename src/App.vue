<template>
  <div id="app">
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator";
  import { Todo } from "./types/Todo";
  import Todos from "./components/Todos.vue";

  @Component({
    components: {
      Todos
    }
  })
  export default class App extends Vue {
    private todos: Todo[] = [
      {
        id: 1,
        title: "Todo One",
        completed: false
      },
      {
        id: 2,
        title: "Todo Two",
        completed: true
      },
      {
        id: 3,
        title: "Todo Three",
        completed: false
      }
    ];

    public deleteTodo(id: number): void {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
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
</style>
