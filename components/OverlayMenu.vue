<template>
<div>
	<button v-show="!isActive" type="button" class="button">ORDER ONLINE</button> 
	<div class="button_container" :class="{active: isActive, inactive: !isActive}" @click="enableMenu">
		<span class="top"></span>
		<span class="middle"></span>
		<span class="bottom"></span>
	</div>
	<div id="overlay" class="overlay" :class="{open: isActive}">
		<nav class="overlay-menu">
			<ul>
				<li><a href="#">HOME</a></li>
				<li><a href="#">MENU</a></li>
				<li><a href="#">ORDER ONLINE</a></li>
				<li><a href="#">ABOUT US</a></li>
				<li><a href="#">CONTACT US</a></li>
			</ul>
		</nav>
	</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: 'OverlayMenu',
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		enableMenu(): void {
			this.isActive = !this.isActive;
			this.$emit('isOverlayActive', this.isActive);
		}
	}
	
})
</script>

<style lang="scss">

@import url(https://fonts.googleapis.com/css?family=Merriweather);

@font-face {
  font-family: "Cardenio";
  src: local("Cardenio"),
   url(/CardenioStd.ttf) format("truetype");
}

$color-background: #181C0B;
$color-main: white;
$color-active: white;
$color-link: white;
$button-height: 27px;
$button-width: 35px;
$font-family: 'Cardenio';

body {
background: $color-background;
}

.container {
	position: absolute;
	width: 100%;
	text-align: center;
	top: 30%;
	left: 0;
	margin:  0 auto;
	font-family: $font-family;
	p {
		font-size: 20px;
	}

	a {
		display: inline-block;
		position: relative;
		text-align: center;
		color: $color-main;
		text-decoration: none;
		font-size: 20px;
		overflow: hidden;
		top: 5px;
		
		&:after {
			content: '';
			position: absolute;
			background: $color-main;
			height: 2px;
			width: 0%;
			transform: translateX(-50%);
			left: 50%;
			bottom: 0;
			transition: .35s ease;
		}
		&:hover:after,
		&:focus:after,
		&:active:after {
			width: 100%;
		}
	}
}

.button_container {
	position: fixed;
	top: 5%;
	right: 10%;
	height: $button-height;
	width: $button-width;
	cursor: pointer;
	z-index: 100;
	transition: opacity .25s ease;

	&:hover {
		opacity: .7;
	}
	
	&.active {
		.top {
		transform: translateY(11px) translateX(0) rotate(45deg);
		background: $color-active;
		}
		.middle {
		opacity: 0;
		background: $color-active;
		}
		
		.bottom {
		transform: translateY(-11px) translateX(0) rotate(-45deg);
		background: $color-active;
		}
	}
	
	&.inactive {
		.top {
		transform: translateY(11px) translateX(0) rotate(0deg);
		background: $color-main;
		}
		.middle {
		opacity: 0;
		background: $color-main;
		}
		
		.bottom {
		transform: translateY(-11px) translateX(0) rotate(-90deg);
		background: $color-main;
		}
	}

	span {
		background: $color-main;
		border: none;
		height: 5px;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition:  all .35s ease;
		cursor: pointer;
		
		&:nth-of-type(2) {
		top: 11px;
		}
		
		&:nth-of-type(3) {
		top: 22px;
		}
	}
}

.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 0%;
	opacity: 0;
	visibility: hidden;
	backdrop-filter: blur(17px);
	-webkit-backdrop-filter: blur(17px);
	transition: opacity .35s, visibility .35s, height .35s;
	overflow: hidden;
	background: transparent;
	
	&.open {
		opacity: 1;
		visibility: visible;
		height: 100%;
		
		li {
		animation: fadeInTop .75s ease forwards;
		animation-delay: .4s;
		
			&:nth-of-type(2) {
				animation-delay: .4s;
			}
			&:nth-of-type(3) {
				animation-delay: .60s;
			}
			&:nth-of-type(4) {
				animation-delay: .80s;
			}
			&:nth-of-type(5) {
				animation-delay: 1s;
			}
		}
	}
	nav {
		position: relative;
		height: 70%;
		top: 60%;
		transform: translateY(-50%);
		font-size: 50px;
		font-family: $font-family;
		font-weight: 400;
		text-align: center;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0 auto;
		display: inline-block;
		position: relative;
		height: 100%; 
		
		li {
		display: block;
		height: 25%;
		height: calc(100% / 5);
		min-height: 50px;
		position: relative;
		opacity: 0;
		
			a {
				display: block;
				position: relative;
				color: $color-link;
				text-decoration: none;
				overflow: hidden;
				
				&:hover:after,
				&:focus:after,
				&:active:after {
					width: 100%;
				}
				
				&:after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 50%;
					width: 0%;
					transform: translateX(-50%);
					height: 3px;
					background: $color-link;
					transition: .35s;
				}
			}
		}
	}
}

.button {
	text-transform: uppercase;
    letter-spacing: .05em;
    color: $color-link;
    font-feature-settings: "smcp";
    font-variant: small-caps;
    font-size: 2.125rem;
    line-height: 1;
    height: 2.75rem;
    min-width: 8.625rem;
    border: 1px solid;
    padding: .1875em .4em;
    transition: color .5s,background-color .5s,border-color .5s;
	appearance: none;
	background: none;
	border-radius: 0;
	font-family: $font-family;
	top: 4.5%;
	position: fixed;
	left: 10%;
	cursor: pointer;
}

$breakpoint-phone: 767px;
@media (max-width: $breakpoint-phone) {
	.button {
		font-size: 1.25rem;
		top:4%;
	}
}

@keyframes fadeInTop {
	0% {
		opacity: 0;
		top: 20%;
	}
	100% {
		opacity: 1;
		top: 0;
	}
}
</style>