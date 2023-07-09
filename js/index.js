var i;
var close = document.getElementsByClassName("close");
var done = document.getElementsByClassName("done");

function addNewTask() {
    var tbody = document.getElementById("myList");
    var row = tbody.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.className = "col-1 done";
    cell2.className = "col-2";
    cell3.className = "col-3";
    cell4.className = "col-4";
    cell5.className = "col-5 close";

    // set value in table column
    cell1.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    cell2.innerHTML = document.getElementById("timeInput").value;
    cell3.innerHTML = document.getElementById("listInput").value;
    cell4.innerHTML = document.getElementById("urlInput").value;
    cell5.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

    // clear value after inserting data 
    document.getElementById("listInput").value = "";
    document.getElementById("urlInput").value = "";

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    for (i = 0; i < done.length; i++) {
        done[i].onclick = function () {
            var div = this.parentElement;
            div.className = "checked";
        }
    }
}