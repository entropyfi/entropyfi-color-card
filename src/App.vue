<template>
	<main>
		<header>
			<div class="logo">
				<div>
					<LOGO icon />
					<I name="logoText" text />
				</div>
			</div>
		</header>
		<div class="main" v-for="(el, i0) in color" :key="i0">
			<div title>
				<h1>{{ el.title }}</h1>
				<hr />
			</div>
			<div colorCard v-for="(item, i) in el.colorBlock" :key="i">
				<div class="tag center">
					<div>
						<h2>{{ item.type }}</h2>
					</div>
				</div>
				<div class="Color center" :style="`background: ${item.color}`">
					<h3>{{ item.color }}</h3>
				</div>
				<div class="and center">
					<div>
						<div other class="center">
							<div :style="`background: ${item.other1}`"></div>
							<div :style="`background: ${item.other2}`"></div>
						</div>
						<div info>
							<p>{{ item.tips }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			color: [
				{
					title: 'title',
					colorBlock: [
						{
							type: 'type title',
							tips: 'tips',
							color: '#34cffe',
							other1: '#fdfdfd',
							other2: '#333'
						}
					]
				}
			]
		}
	}
}
</script>

<script setup>
import LOGO from './logo.vue'
</script>

<style lang="less" scoped>
main {
	position: relative;
	width: 100vw;
	height: 100vh;
	.main {
		position: relative;
		margin-top: 25px;
		padding: 8px 55px;
		display: flex;
		align-items: center;
		> [title] {
			margin-right: 20px;
			padding: 25px 45px;
			> h1 {
				color: #fff;
			}
			> hr {
				width: 100%;
				height: 3px;
				background: #35363a;
				border-radius: 8px;
				margin-top: 2px;
			}
		}
		[colorCard] + [colorCard] {
			margin-left: 10px;
		}
		[colorCard] {
			width: 185px;
			height: 150px;
			background: #21252b;
			border-radius: 5px;
			box-shadow: 0 3px 3px rgb(26 26 26 / 10%);
			.and {
				width: 100%;
				height: 48px;
				border-radius: 0 0 5px 5px;
				> div {
					> [other] {
						> div {
							width: 42px;
							height: 15px;
						}
						> div:first-child {
							border-radius: 2px 0 0 2px;
						}
						> div:last-child {
							border-radius: 0 2px 2px 0;
						}
					}
					> [info] {
						> p {
							color: hsla(0, 0%, 100%, 0.26);
							font-size: 13px;
							font-weight: 600;
							font-family: 'ZCOOL+KuaiLe';
							line-height: 1;
							margin-top: 8px;
							margin-bottom: -5px;
							text-align: center;
						}
					}
				}
			}
			.Color {
				width: 100%;
				height: 100px;
				border-radius: 5px 5px 0 0;
				> h3 {
					color: #fff;
					opacity: 0.69;
				}
			}
			.tag {
				position: absolute;
				width: 112px;
				border-radius: 0 0 5px 0;
				background: linear-gradient(
					221.79deg,
					rgba(255, 255, 255, 0.1) 9.26%,
					rgba(255, 255, 255, 0) 94.58%
				);
				z-index: 2;
				> div {
					padding: 6px 10px;
					> h2 {
						color: #fff;
						font-size: 14px;
						line-height: 1;
					}
				}
			}
		}
	}
	> header {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 28px 26px 0;
		.logo {
			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			appearance: none;
			line-height: 1.2;
			user-select: none;
			padding: 0 18px;
			> div {
				position: relative;
				width: 150px;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				> [icon] {
					width: 40px;
					height: 40px;
				}
				> [text] {
					height: 40px;
					width: 85px;
					margin-left: 8px;
				}
			}
		}
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>

<style>
*,
body,
html {
	position: relative;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	border: 0;
	background: 0 0;
	word-wrap: break-word;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;
	font-family: Titillium Web, -apple-system, system-ui, BlinkMacSystemFont,
		Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
		Helvetica Neue, sans-serif;
}

body {
	position: relative;
	background: #202124;
}

a,
span {
	color: #fff;
	text-decoration: none;
	font-weight: lighter;
	font-size: 12px;
	position: relative;
}

:not(body) {
	transition: all 0.5s cubic-bezier(0.22, 0.58, 0.12, 0.98);
}

::-webkit-scrollbar {
	width: 6px;
	height: 6px;
	border-radius: 6px;
	background: rgba(0, 0, 0, 0.05);
	-webkit-appearance: none;
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
	display: none;
	background: 0 0;
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
	display: none;
	background: 0 0;
}

::-webkit-scrollbar-thumb {
	width: 4px;
	height: 4px;
	border-radius: 6px;
	background-color: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
	display: none;
	background: 0 0;
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
	display: none;
	background: 0 0;
}

::selection {
	background: #333;
	color: #fff;
}
</style>
