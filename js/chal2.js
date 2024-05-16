function copyEmail() {


    
    console.log("Made it")
    var billing = document.querySelector("#bill");
    var homeEqualsBilling = document.querySelector("#sameAddress").checked;
    var home = document.querySelector("#home");
    console.log(homeEqualsBilling);
    console.log(billing.value);

    
    if (homeEqualsBilling) {
        console.log("Made it")
        home.value = billing.value;
        home.disabled = true;
    }
    else {
        console.log("Made it 2")
        home.value = "";
        home.disabled = false;
    }
}


function changeAddress() {
    console.log("Made it");
    var home = document.querySelector("#home");
    var business = document.querySelector("#bill");
}

