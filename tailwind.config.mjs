/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '360px', // Celulares pantalla muy chica
			'sm': '400px', // Celulares
			'md': '768px', // Celulares Horizontal y Tablet Vertical
			'lg': '1024px', // Tablet Horizontal y Laptops
			'xl': '1280px', // Laptops y escritorios chicos
			'2xl': '1536px', // Escritorios grandes
		  },
		extend: {
			colors: {
				primaryColor: '#00FFF0',
				secondaryColor: '#AD00FF',
				thirdColor: '#ffba00',
				fourthColor: '#fc466b'
      		},
			backgroundImage: {
				'mainBkg': "url('/BG.png')",
				'soialsBkg': "url('/section2BG.webp')",
				'clientesBkg': "url('/ClientesBKG.jpg')",
			}
		},
	},
	plugins: [],
}
