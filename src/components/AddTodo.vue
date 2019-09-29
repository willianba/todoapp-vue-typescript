<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo" />
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script lang="ts">
import uuid from "uuid";
import Vue from "vue";
import Component from "vue-class-component";
import { Todo } from "../types/Todo";
import { Emit } from "vue-property-decorator";

@Component({ })
export default class AddTodo extends Vue {
  private title: string = "";

  @Emit("add-todo")
  public addTodo(event: Event): Todo {
    event.preventDefault();
    const newTodo: Todo = {
      id: uuid.v4(),
      title: this.title,
      completed: false
    };
    this.title = "";
    return newTodo;
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>
