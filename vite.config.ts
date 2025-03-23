import { defineConfig, PluginOption } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss() as PluginOption, react() as PluginOption],
});
