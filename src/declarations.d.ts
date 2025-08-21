declare module "modern-normalize";
declare module "axios";

declare module "*.css";

interface ImportMetaEnv {
	readonly VITE_NOTEHUB_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

