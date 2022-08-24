module.exports={  
  resolve: {
    extensions: ['.js', '.jsx'],
    preferRelative: true,
    fallback: {
      "timers": false,
      "util": false,
      "tty": false,
      "crypto": false,
      "path-browserify": false,
      "stream-browserify": false,
      "os-browserify": false,
      "assert": false,
      "stream": false,
      "os": false,
      "path": false,
      "fs": false
    }
  }
}