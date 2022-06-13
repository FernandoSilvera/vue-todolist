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
    newToDoText: "",
  },

  methods: {
    delItem(index) {
      this.toDoList.splice(index, 1);
    },
    addItem(text) {
      if(text === "") {
        return;
      } else {
        this.toDoList.push({
          text: text.trim(),
          done: false,
        })
      }
    },
  }
})