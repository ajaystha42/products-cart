/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_HOME_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "home/Header";
declare module "home/Footer";
declare module "home/products";
declare module "home/MainLayout";
