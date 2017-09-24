module.export = {
  entry:[
    './src/index.jsx'
  ],
  output: [
    './bundle.js'
  ],
  module: {
    loaders:[{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve:{
    extensions: ['', 'js', 'jsx']
  }
}
