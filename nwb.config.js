module.exports = {
  type: 'react-component',
  npm: {
    cjs: false,
    esModules: false,
    umd: false
  },
  polyfill: false,
  webpack: {
    config(config) {
      config.resolve.extensions = [".js", ".ts", ".tsx", ".css"];
      config.module.rules.push({
        "test": /\.tsx?$/,
        "loader": "awesome-typescript-loader"
      });
      return config;
    }
  }
}
