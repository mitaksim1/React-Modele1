module.exports = {
    mode: 'development',
    // Tableau pour les entrées, on peut éventuellement en avoir plusieurs
    entry: ['./src/index.js'],
    module: {
      rules: [
        // Pour les fichiers JS (expression régulière)
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/',
              },
            },
          ],
        },
      ],
    },
    devServer: {
      contentBase: './dist',
      open: true,
      historyApiFallback: true,
    },
  };