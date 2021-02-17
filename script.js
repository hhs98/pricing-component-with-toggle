let cswitch = document.querySelector("#switch")
cswitch.addEventListener("change", function () {
    if (cswitch.checked) {
        document.querySelector(".basic h1").outerHTML = "<h1><span>&dollar;&nbsp;</span>19.99</h1>"
        document.querySelector(".professional h1").outerHTML = "<h1><span>&dollar;&nbsp;</span>24.99</h1>"
        document.querySelector(".master h1").outerHTML = "<h1><span>&dollar;&nbsp;</span>39.99</h1>"
    }
    else {
        document.querySelector(".basic h1").outerHTML = "<h1><span>&dollar;&nbsp;</span>199.99</h1>"
        document.querySelector(".professional h1").outerHTML = "<h1><span>&dollar;&nbsp;</span>249.99</h1>"
        document.querySelector(".master h1").outerHTML = "<h1><span>&dollar;&nbsp;</span>399.99</h1>"
    }
})