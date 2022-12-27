export const addData = (data) => {
    return {
        type: 'ADD_DATA',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteData = (payload) => {
    return {
        type: 'DELETE_DATA',
        payload
    }
}
export const editData = (payload) => {
    return {
        type: 'EDIT_DATA',
        payload
    }
}