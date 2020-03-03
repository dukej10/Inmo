document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

function showUpdateMessage(message){
    let eleme = document.querySelector("#updatedModal");
    let instance = M.Modal.getInstance(elem);
    document.querySelector("#strUpdateMessage").innerHTML = message;
    instance.open();
}