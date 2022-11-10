window.onload = function() { 

    console.log("1. Loading page")

    // URL's
    // location.assign('mymts://action:screen/screen_id:5234264e-7618-8884-2f92-bfcbd3048e80')
    // window.location = "mymts://action:screen/screen_id:5234264e-7618-8884-2f92-bfcbd3048e80"

    // window.location = "mymts://action:screen/screen_id:5234264e-7618-8884-2f92-bfcbd3048e80"

    function createButton() {
        console.log("2. Create button")
        var btn = document.createElement("a")
        btn.id = "btn"
        btn.href = "mymts://action:screen/screen_id:5234264e-7618-8884-2f92-bfcbd3048e80"
        btn.style.width = "10px"
        btn.style.height = "10px"
        document.body.appendChild(btn)
    }

    function btnClick() {
        console.log("3. Click button")
        var btn = document.getElementById("btn")
        btn.click()
    }

    createButton()
    btnClick()
    
}