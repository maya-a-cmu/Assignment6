//Show how many courses were added
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    var type = document.getElementById("result").innerHTML = "My Courses (" + localStorage.clickcount + ")";
  } else {
    var type = document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


//delete courses

function deleteListCourse(item) {
    console.log(item);
    item.parentNode.removeChild(item);
}

//Select the course section
    function  changeSection() {
        var sec=0
        d = document.getElementById("course").value;
        var classinfo = { day: d, section: 1};
        localStorage.setItem("myclass", JSON.stringify(classinfo));
        alert(classinfo.section)
        alert(classinfo.day)
    }

    function readValue() {
        var x = localStorage.getItem("myclass");
        document.getElementById("demo").innerHTML = x;
    }
