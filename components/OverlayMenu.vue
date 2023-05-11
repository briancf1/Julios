<template>
<div>
	<a href="https://juliosmexican.square.site">
		<button v-show="!isActive" type="button" class="button">ORDER ONLINE</button>
	</a>
	<div class="button_container" :class="{active: isActive, inactive: !isActive}" @click="enableMenu">
		<span class="top"></span>
		<span class="middle"></span>
		<span class="bottom"></span>
	</div>
	<div class="button_container_back" :class="{aboutUsActive: aboutUsIsActive, aboutUsInactive: !aboutUsIsActive}" @click="enableAboutUs">
		<span class="top"></span>
		<span class="middle"></span>
		<span class="bottom"></span>
	</div>
	<div id="overlay" class="overlay" :class="{open: isActive}">
		<nav class="overlay-menu">
			<ul :style="{display: tocIsActive ? 'inline-block': 'none'}">
				<li><a href="#">MENU</a></li>
				<li><a href="https://juliosmexican.square.site">ORDER ONLINE</a></li>
				<li><a @click="enableAboutUs">ABOUT US</a></li>
				<li><a href="#">CONTACT US</a></li>
				<li><a href="https://www.instagram.com/julioscapemay/">PHOTOS</a></li>
			</ul>
			<div class="aboutUs" :class="{aboutUsActive: aboutUsIsActive, aboutUsInactive: !aboutUsIsActive}">
				<p id="aboutUsHeader">ABOUT US</p>
				<p>
					Known by his friends and loved ones as “Julio”, Julian Canchola a 20+ year Cape May Local, 
					never lost his passion for the flavors of his home country. Born in Mexico City, he and 
					wife Alma came to the United States in 1999 with their two young sons aspiring for nothing 
					more than to provide their children with the ‘American Dream’.
				</p>
				<p>
					Having worked a variety of jobs in his early life, from mailman to accountant, (no seriously...you should see the books)
					 it was his first experience as a line cook at the Virginia Hotel that sparked it all. From then on,
					  there was no stopping Chef Julio, as he had found what brings him the most joy in life, serving
					   the Cape May community through his food.
				</p>
				<p>While without Julio there would inherently be no Julio’s, it was his youngest son Dennis Canchola who made opening a 
					restaurant in his father’s name possible. Together, they built upon their shared love of food from the ground up, 
					making each decision hand-in-hand, Julio’s ultimately became so much more than a family dream.
				</p>
				<p id="noteHeader">Note from the Cancholas</p>
				<p class="note">We are so excited to invite you into the space we curated and to feed you this Summer!</p>
				<p class="note">Can’t wait to see you soon!</p>
				<p class="note" style="text-align: end;">Julio & Dennis</p>
			</div>
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
			isActive: false,
			aboutUsIsActive: false,
			tocIsActive: false
		}
	},
	methods: {
		enableMenu(): void {
			this.isActive = !this.isActive;
			this.tocIsActive = true;
			this.aboutUsIsActive = false;
			this.$emit('isOverlayActive', this.isActive);
		},
		enableAboutUs(): void {
			this.aboutUsIsActive = !this.aboutUsIsActive;
			this.tocIsActive = !this.tocIsActive;
			//this.$emit('isOverlayActive', this.aboutUsIsActive);
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
@font-face {
  font-family: "CardenioBold";
  src: local("CardenioBold"),
   url(/CardenioModernBold.ttf) format("truetype");
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

.aboutUs {
	transform: translateY(-5vh);
}

#aboutUsHeader, #noteHeader{
	font-family: 'CardenioBold';
	font-size: 35px;
}

.note{
	font-style: italic;
}

.aboutUsActive{
	display: inline-block;
	text-align: left;
	color: $color-active;
	width: 75%;
	font-size: 25px;
	overflow-y: scroll;
	height: 80vh;
	scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */

	p {
		animation: fadeInTop_p 1s ease forwards;
		animation-delay: .4s;
		opacity: 0;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		
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
			&:nth-of-type(6) {
				animation-delay: 1.2s;
			}
			&:nth-of-type(7) {
				animation-delay: 1.4s;
			}
			&:nth-of-type(8) {
				animation-delay: 1.6s;
			}
		}
}

.aboutUsActive::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}

.aboutUsInactive{
	display: none;
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

.button_container_back {
	position: fixed;
	top: 5%;
	left: 10%;
	height: $button-height;
	width: $button-width;
	cursor: pointer;
	z-index: 100;
	transition: opacity .25s ease;

	&:hover {
		opacity: .7;
	}
	
	.top {
		transform: translateY(6px) translateX(-2px) rotate(-45deg);
		background: $color-active;
		width: 50%;
	}

	.middle {
		background: $color-active;
	}
		
	.bottom {
		transform: translateY(-6px) translateX(-2px) rotate(45deg);
		background: $color-active;
		width: 50%
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
		top: 55%;
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
    font-size: 3.125rem;
    line-height: 1;
    height: 4rem;
    min-width: 8.625rem;
    border: 1px solid;
    padding: .1875em .4em;
    transition: color .5s,background-color .5s,border-color .5s;
	appearance: none;
	background: none;
	border-radius: 0;
	font-family: $font-family;
	top: 3.5%;
	position: fixed;
	left: 10%;
	cursor: pointer;
}

.socialMediaIcons{
  position: fixed;
  bottom: 0;
}

#facebookIcon{
  max-width: 25px;
  min-width: 25px;
}

$breakpoint-phone: 767px;
@media (max-width: $breakpoint-phone) {
	.button {
		font-size: 2.00rem;
		top: 3%;
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

@keyframes fadeInTop_p {
	from {transform: translateY(100px); opacity: 0;}
    to {transform: translateY(0px); opacity: 1;}
}
</style>