window.onload = function() { 

    console.log("1. Loading page")

    /*
        URL's
        mymts://action:screen/screen_id:5234264e-7618-8884-2f92-bfcbd3048e80

        Methods:
        location.assign("_url_")
        location.href = "_url_"
    */ 

    function createButton() {
        console.log("2. Create button")
        var btn = document.createElement("a")
        btn.id = "btn"
        btn.href = "mymts://action:screen/screen_id:5234264e-7618-8884-2f92-bfcbd3048e80"
        document.body.appendChild(btn)
    }

    function btnClick() {
        console.log("3. Click button")
        var btn = document.getElementById("btn")
        btn.click()
    }

    createButton()

    setTimeout(function() {
        btnClick()
    }, 1000)
    
}