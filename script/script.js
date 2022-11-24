
var count = [0,0,0];

function like(id) {
    var x = document.querySelector(id);
    if (id == ".likes") {
        count[0]++;
        x.innerText = count[0] + " like(s)";
    }
    else if (id == ".likes2") {
        count[1]++;
        x.innerText = count[1] + " like(s)";
    }
    else if (id == ".likes3") {
        count[2]++;
        x.innerText = count[2] + " like(s)";
    }
    console.log(count);
}
