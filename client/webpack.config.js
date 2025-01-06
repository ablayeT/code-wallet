const path = require("path");

module.exports = {
  entry: "./src/renderer.js", // Point d'entrée de votre application
  output: {
    filename: "bundle.js", // Fichier de sortie
    path: path.resolve(__dirname, "public"), // Répertoire de sortie
  },
  resolve: {
    fallback: {
      fs: false, // Désactive l'accès au système de fichiers dans le navigateur
      path: require.resolve("path-browserify"), // Utilise path-browserify pour remplacer path
    },
    extensions: [".js", ".jsx"], // Extensions à prendre en charge
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Traiter les fichiers JavaScript et JSX
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"], // Prise en charge de React
          },
        },
      },
      {
        test: /\.css$/, // Traiter les fichiers CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // Redirige toutes les requêtes vers index.html
  },
  mode: "development", // Mode de développement
};
