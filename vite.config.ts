import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        name: "cart",
        remotes: {
          home: env["VITE_HOME_URL"],
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
  };
});
