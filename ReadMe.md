  <!-- "devDependencies": {
    "@babel/core": "^7.23.9",
    "@babel/preset-env": "^7.23.9",
    "babel-loader": "^9.1.3",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.10.0",
    "file-loader": "^6.2.0",
    "mini-css-extract-plugin": "^2.8.0",
    "sass": "^1.70.0",
    "sass-loader": "^14.1.0",
    "style-loader": "^3.3.4",
    "terser-webpack-plugin": "^5.3.10",
    "webpack": "^5.90.1",
    "webpack-cli": "^5.1.4"
  } -->

Babel related packages ->
used to compile the modern js like es6 to the older version so that all the browser can able to understand the code

file-loader packages ->
used to bundle the jpg,png,jpeg etc type of files to the dist folder

css-loader, style-loader packages ->
used to access the files which are in .css extention

sass, sass-loader, style-loader packages ->
used to access the files which are in .scss .sass extention

terser-webpack-plugin packages ->
used to remove the as much as posible white spaces to make the bundle.js file size into smaller so that it can load to the browser quickly

mini-css-extract-plugin packages ->
used to extract the css datas from the bundle.js code and to make a seperate file for css so that we can reduce more of the sixe from the existing file

clean-webpack-plugin packages ->
while using the [contenthash] , file will be generated with the unique name like bundle.5721jkhvbsa6732.js
if it is not changes brouser will take it from the cache, if it is modified, browser will use it from the file receiving from the server
used to remove the unnecessary regenerated files of bundle, style etc
