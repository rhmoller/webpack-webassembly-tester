import("./square.wasm").then(squareModule => {
    const container = document.createElement("div");
    container.innerText = "Hello, WebAssembly.";
    container.innerText += " square(2) is " + squareModule.square(2);
    document.body.appendChild(container);
});
