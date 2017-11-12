# webpack-webassembly-tester
Experimenting with webpacks new webassembly support

## To run

* Replace my webpack dependency with your own build of the feature/webassembly branch in package.json

If you then try to run the browser will refuse to load the module.wasm because it is not served as application/wasm which is required by WebAssembly.compileStreaming().

## A dirty hack to make it work

In node_modules/webpack-dev-middleware/middleware.js in line 70 change this

```javascript
        // server content
        var content = context.fs.readFileSync(filename);
        content = shared.handleRangeHeaders(content, req, res);
        res.setHeader("Content-Type", mime.lookup(filename) + "; charset=UTF-8");
        res.setHeader("Content-Length", content.length);
```
to this
```javascript
        var content = context.fs.readFileSync(filename);
        content = shared.handleRangeHeaders(content, req, res);
        var fileMime = mime.lookup(filename);
        if (filename.indexOf(".wasm") !== -1) {
          fileMime = "application/wasm";
          res.setHeader("Content-Type", fileMime);
        } else {
          res.setHeader("Content-Type", fileMime + "; charset=UTF-8");
        }
        res.setHeader("Content-Length", content.length);
```
