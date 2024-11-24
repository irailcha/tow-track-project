const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'bundle.js',
clean: true,
},
mode: 'development',
devServer: {
static: './dist',
hot: true,
port: 3000,
},
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader',
},
},
{
test: /\.css$/,
use: ['style-loader', 'css-loader'],
},
{
test: /\.(png|jpe?g|svg)$/,
type: 'asset/resource',
},
],
},
resolve: {
extensions: ['.js', '.jsx'],
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
filename: 'index.html',
}),
],
};