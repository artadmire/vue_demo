/* 
  使用LocalStorage存储数据的工具模块
*/
const TODOS_KEY = 'todos_key'
export default {
    setTodos(todos) {
        window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    },
    getTodos() {
        return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
    }
}