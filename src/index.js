import("./square.wasm").then(squareModule => {
    document.writeln("Hello WebAssembly");
    document.writeln(squareModule.square(2));
});
