# webpack-webassembly-tester
Experimenting with webpacks new webassembly support

Keep an eye on https://github.com/webpack/webpack/tree/next

## To run

You need to checkout the latest versions of webpack and webpack-dev-middleware and link them into the project.

```commandline
mkdir wasm-demo

# build next branch of webpack
git clone https://github.com/webpack/webpack.git
cd webpack
git checkout next
npm i
npm link

cd ..

# build latest webpack-dev-middleware
git clone https://github.com/webpack/webpack-dev-middleware.git
cd webpack-dev-middleware
npm i
npm link

cd ..

# checkout and build this repository
git clone git@github.com:rhmoller/webpack-webassembly-tester.git
cd webpack-webassembly-tester
npm i
npm link webpack
npm link webpack-dev-middleware

# run
npm start
```
