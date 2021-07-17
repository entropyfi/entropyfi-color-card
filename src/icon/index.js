import { readFileSync, readdirSync } from 'fs'

let idPerfix = ''
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g

const hasViewBox = /(viewBox="[^>+].*?")/g

const clearReturn = /(\r)|(\n)/g

const findSvgFile = dir => {
	const svgRes = []
	const dirents = readdirSync(dir, {
		withFileTypes: true
	})
	for (const dirent of dirents) {
		if (dirent.isDirectory())
			svgRes.push(...findSvgFile(dir + dirent.name + '/'))
		else {
			const svg = readFileSync(dir + dirent.name)
				.toString()
				.replace(clearReturn, '')
				.replace(svgTitle, ($1, $2) => {
					let width = 0
					let height = 0
					let content = $2.replace(clearHeightWidth, (s1, s2, s3) => {
						if (s2 === 'width') width = s3
						else if (s2 === 'height') height = s3
						return ''
					})
					if (!hasViewBox.test($2))
						content += `viewBox="0 0 ${width} ${height}"`
					return `<symbol id="${idPerfix}-${dirent.name.replace(
						'.svg',
						''
					)}" ${content}>`
				})
				.replace('</svg>', '</symbol>')
			svgRes.push(svg)
		}
	}
	return svgRes
}

export const svgBuilder = (path, perfix = 'icon') => {
	if (path === '') return
	idPerfix = perfix
	const res = findSvgFile(path)
	return {
		name: 'svg-transform',
		transformIndexHtml(html) {
			return html.replace(
				'<body>',
				`<body><svg style="display:none">${res.join('')}</svg>`
			)
		}
	}
}
