function todovalidate() {
    let promise = new Promise(function (resolve, reject) {
        let a = 0;
        let b = 0;
        let i = 0;
        for (i = 0; i < 200; i++) {
            if (todos[i].checked) {
                a++;

            }
            else {
                b++;

            }
        }
        if (b - a == 10) {
            resolve();
        }
        else {
            reject(b - a);
        }
    })
    promise.then(function () {
        document.getElementById("lead").innerHTML = "Tasks have been Successfully Completed ";
        alert("Congrats!! 5 Tasks have been Successfully Completed ");

    });
}

let todos = [];
let i = 0;
let len;
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let todoList = document.getElementById("todolist");
            let x = "";
            len = response.length;

            for (i = 0; i < response.length; i++) {
                let list = response[i];
                x = list.title;
                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                todos[i] = checkbox;

                if (list.completed == true) {
                    let label = document.createElement("label");
                    checkbox.setAttribute("checked", "true");
                    checkbox.setAttribute("class", "disabled");

                    todoList.appendChild(checkbox);
                    todoList.appendChild(label);
                    label.appendChild(document.createTextNode(x));
                    label.setAttribute("class", "checkedbox");
                }
                else {
                    let label = document.createElement("label");
                    label.setAttribute("class", "active");
                    checkbox.removeAttribute("class", "disabled");
                    todoList.appendChild(checkbox);
                    todoList.appendChild(label);
                    label.appendChild(document.createTextNode(x));
                    label.setAttribute("class", "active");
                }
                let linebreak = document.createElement("br");
                todoList.appendChild(linebreak);
            }
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();

}