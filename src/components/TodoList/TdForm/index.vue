<template>
    <div class="td-form">
        <form @submit="submitText">
            <input type="text" v-model.trim="todoText" placeholder="Input what you wanna Add!" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'TdForm',
    data() {
        return {
            todoText: ''
        };
    },
    methods: {
        submitText(e) {
            e.preventDefault();
            if (!this.todoText.length) return;
            this.$emit('dispatch', 'ADD', {
                id: Date.now(),
                text: this.todoText,
                completed: false
            });

            this.todoText = '';
        }
    }
};
</script>

<style>
</style>