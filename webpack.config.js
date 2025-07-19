import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const mode = "development";
export const entry = "./src/index.js";
export const output = {
  filename: "main.js",
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, "dist"),
  clean: true,
};
export const devtool = "eval-source-map";
export const devServer = {
  watchFiles: ["./src/template.html"],
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/template.html",
  }),
];
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
  ],
};
