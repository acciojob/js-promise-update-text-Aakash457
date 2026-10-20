function createPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}

createPromise().then((result) => {
    document.getElementById("output").textContent = result;
});