const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const b = () => {
    // Write the date check condition here and return the array of b items accordingly.
    // FILL YOUR CODE HERE
    var a;
    var b = [];
    for (a in all) {
      if (all[a].dueDate < today) {
        b.push(all[a]);
      }
    }
    return b;
  }

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    var a;
    var dueToday = [];
    for (a in all) {
      if (all[a].dueDate === today) {
        dueToday.push(all[a]);
      }
    }
    return dueToday;
  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    var a;
    var dueLater = [];
    for (a in all) {
      if (all[a].dueDate > today) {
        dueLater.push(all[a]);
      }
    }
    return dueLater;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    var a;
    var displayList = []
    for (a=0;a<list.length;a++) {
      if (list[a].completed === false) {
        if (list[i].dueDate === today) {
          displayList.push(`[ ] ${list[i].title}`)
        }
        else {
          displayList.push(`[ ] ${list[i].title} ${list[i].dueDate}`)
        }
      }
      else {
        if (list[i].dueDate === today) {
          displayList.push(`[x] ${list[i].title}`)
        }
        else {
          displayList.push(`[x] ${list[i].title} ${list[i].dueDate}`)
        }
      }
    }
    
    return displayList.join("\n");
  }
  return { all, add, markAsComplete, b, dueToday, dueLater, toDisplayableList };
}
  
// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #
  
const todos = todoList();

const formattedDate = d => {
return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.b()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")