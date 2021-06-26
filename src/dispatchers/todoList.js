import { todoReducers } from '@/reducers'
import { ADD, REMOVE, COMPLETED } from '@/actions/todoList'
export default (ctx) => {
    const { addItem, removeItem, changeComplete } = todoReducers(ctx.todoData)
    return function (type, arg) {
        switch (type) {
            case ADD:
                ctx.todoData = addItem(arg)
                break;
            case REMOVE:
                ctx.todoData = removeItem(arg)
                break;
            case COMPLETED:
                ctx.todoData = changeComplete(arg)
                break;
            default:
                break;
        }
    }
}
