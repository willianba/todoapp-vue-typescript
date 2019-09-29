<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Emit } from "vue-property-decorator";
  import TodoItem from "./TodoItem.vue";
  import { Todo } from "../types/Todo";

  @Component({
    components: {
      TodoItem
    },
  })
  export default class Todos extends Vue {
    @Prop() private todos!: Todo[];
  }
</script>

<style scoped>

</style>
