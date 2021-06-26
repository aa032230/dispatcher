<template>
    <div>
        <td-title :title="title" />
        <td-form @dispatch="dispatch" />
        <td-list :todoData="todoData" @dispatch="dispatch" />
    </div>
</template>

<script>
import TdTitle from './TdTitle';
import TdForm from './TdForm';
import TdList from './TdList';
import { useDispatchTodoList } from '@/dispatchers';
export default {
    name: 'TodoList',
    components: {
        TdTitle,
        TdForm,
        TdList
    },
    data() {
        return {
            title: 'Todo List',
            todoData: []
        };
    },
    methods: {
        dispatch(...args) {
            useDispatchTodoList(this)(...args);
        }
    }
};
</script>

<style>
</style>