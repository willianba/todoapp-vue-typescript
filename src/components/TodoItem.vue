<template>
  <div class="todo-item" v-bind:class="{ 'is-complete':todo.completed }">
    <p>
      <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed"/>
      {{ todo.title }}
      <button @click="$emit('del-todo', todo.id)" class="del">X</button>
    </p>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator";
  import { Todo } from "@/types/Todo";

  @Component({
    components: { },
  })
  export default class TodoItem extends Vue {
    @Prop() private todo!: Todo;

    public markComplete(): void {
      this.todo.completed = !this.todo.completed;
    }
  }
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>
