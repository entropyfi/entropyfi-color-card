import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/icon/index.js'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), svgBuilder('./src/assets/svg/')],
	resolve: {
		// Define path control table
		alias: [
			{ find: '@', replacement: '/src' },
			{ find: 'views', replacement: '/src/views' },
			{ find: 'components', replacement: '/src/components' }
		]
	},
	server: {
		port: 10241
	}
})
