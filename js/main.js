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
    toDoText: "",
  },

  methods: {
    delItem(index) {
      this.toDoList.splice(index, 1);
    },
    addItem(text) {
      this.toDoList.push({
        text: text,
        done: false,
      })
    },
  }
})