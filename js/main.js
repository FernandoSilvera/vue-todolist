const toDo = [
  {
    text: "Meeting 3pm",
    done: true,
  },
  {
    text: "Groceries",
    done: false,
  },
  {
    text: "Finish Work",
    done: false,
  },
]

new Vue({
  el: "#app",

  data: {
    toDoList: toDo,
    toDoIndex: 0,
  },

  methods: {

  }
})