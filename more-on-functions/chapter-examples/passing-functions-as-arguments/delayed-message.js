function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 3000);

setTimeout(function () {
    console.log("code that passes anonymous functions are ubiquitous!")
}, 5000);
