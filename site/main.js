import * as wasm from "web_assembly";


document.getElementById("btn").addEventListener("click", function() {
    var x = document.getElementById("first").value
    var y = document.getElementById("second").value
    wasm.add(x,y);
  });

