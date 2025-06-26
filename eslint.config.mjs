import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ["next"],
		settings: {
			next: {
				rootDir: "packages/my-app/",
			},
		},
	}),
];

// const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
