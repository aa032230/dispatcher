<template>
    <ul class="todo-list">
        <list-item v-for="(item, index) of todoData" :key="index" :item="item" @handleItem="handleItem" />
    </ul>
</template>

<script>
import ListItem from './Item';
export default {
    name: 'TdList',
    components: { ListItem },
    props: {
        todoData: Array
    },
    methods: {
        handleItem(...args) {
            this.$emit('dispatch', ...args);
        }
    }
};
</script>

<style>
</style>