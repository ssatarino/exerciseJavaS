
function openEmail() {
    console.log("Made it")
    var is_checked = document.querySelector("#subscribe").checked;
    console.log(is_checked);
    if (is_checked == true) {
        document.querySelector("#emailDiv").style.display = "block";
    }
    else if (is_checked == false) {
        document.querySelector("#emailDiv").style.display = "none";
    }
}