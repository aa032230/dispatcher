function todoReducers(data) {
    function addItem(newItem) {
        return data.concat(newItem)
    }

    function removeItem(id) {
        return data.filter(item => item.id !== id)
    }

    function changeComplete(id) {
        return data.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }

            return item
        })
    }

    return {
        addItem,
        removeItem,
        changeComplete
    }
}

export default todoReducers