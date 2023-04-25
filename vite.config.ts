import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cart",
      remotes: {
        home: "http://localhost:3000/assets/remoteEntry.js",
        pdp: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "rxjs"],
      exposes: {
        "./cart": "./src/cart.ts",
        "./Login": "./src/Login.tsx",
        "./MiniCart": "./src/MiniCart.tsx",
        "./CartContent": "./src/CartContent.tsx",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
