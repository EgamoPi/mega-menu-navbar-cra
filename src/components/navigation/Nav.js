import { createElement as $, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';

const Nav = () => {
	const [checked, setChecked] = useState(false);
	const handleClick = () => setChecked(!checked);

	console.log(checked);

	return $(
		NavBar,
		null,
		// Wrapper container. Contains : Nav links with Mege Menu but also Logo and Buttons (for mobile versions)
		$(
			'div',
			{ className: 'wrapper' },
			$('div', { className: 'logo' }, $(Link, { to: '/' }, 'Nav')),
			$('input', {
				type: 'radio',
				name: 'slider',
				id: 'menu-btn',
				checked: checked,
				onChange: handleClick,
			}),
			$('input', { type: 'radio', name: 'slider', id: 'close-btn' }),
			// ul - navigation links : Home, About, Services (Mega Menu) & Contact
			$(
				'ul',
				{ className: 'nav-links', onClick: handleClick },
				// close button for mobile version
				$(
					'label',
					{
						htmlFor: 'close-btn',
						className: 'btn close-btn',
					},
					$('i', { className: 'fas fa-times' })
				),
				$('li', null, $(Link, { to: '/' }, 'Home')),
				$('li', null, $(Link, { to: '/about' }, 'About')),
				// Mega Menu Component
				$(MegaMenu),
				$('li', null, $(Link, { to: '#' }, 'Contact'))
			),
			$(
				'label',
				{ htmlFor: 'menu-btn', className: 'btn menu-btn' },
				$('i', { className: 'fas fa-bars' })
			)
		)
	);
};

export default Nav;

const NavBar = styled.nav`
	/* 'nav' html element style  */
	position: fixed;
	z-index: 99;
	width: 100%;
	background: #333333;

	/* Styling the wrapper container */
	.wrapper {
		position: relative;
		max-width: 90vw;
		padding: 0 2rem;
		height: 9vh;
		line-height: 4.5rem;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* Styling Logo link */
	.wrapper .logo a {
		color: #f2f2f2;
		font-size: 2rem;
		text-decoration: none;
		font-weight: 600;
	}

	/* Styling the ul */
	.wrapper .nav-links {
		display: inline-flex;
	}

	.nav-links li {
		list-style: none;
	}

	.nav-links li a {
		color: #f2f2f2;
		text-decoration: none;
		font-size: 1rem;
		font-weight: 500;
		padding: 9px 15px;
		border-radius: 3px;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) ease;
	}

	.nav-links li a:hover {
		background: #3a3b3c;
	}

	.nav-links .mega-links li a:hover {
		background: #ff9d00;
		opacity: 0.8;
	}

	.nav-links .mobile-item {
		display: none;
	}

	/* Styling the Mega Menu */
	.nav-links li:hover .mega-box {
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) ease;
		top: 9vh;
		opacity: 1;
		visibility: visible;
	}

	.mega-box {
		position: absolute;
		left: 0;
		top: 9vh;
		width: 100%;
		padding: 0 2rem;
		background-color: #ff9d00;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
		visibility: hidden;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.mega-box .content {
		background-color: rgba(255, 255, 255, 0.1);
		// background: transparent;
		backdrop-filter: blur(15px);
		margin: 1rem 0rem;
		display: flex;
		width: 100%;
		justify-content: space-between;
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
		border-radius: 3px;
	}

	.mega-box .content .row {
		width: calc(25% - 20px);
		line-height: 45px;
	}

	.content .row img {
		width: 100%;
		height: 100%;
		padding: 10px 7px;
		object-fit: cover;
		border-radius: 6px;
	}

	.content .row header {
		color: #f2f2f2;
		font-size: 1.3rem;
		font-weight: 500;
	}

	.content .row .mega-links {
		margin-left: -1.8rem;
		border-left: 1px solid rgba(255, 255, 255, 0.09);
	}
	.row .mega-links li {
		padding: 0 1.2rem;
	}
	.row .mega-links li a {
		color: #d9d9d9;
		font-size: 1rem;
		display: block;
	}
	.row .mega-links li a:hover {
		color: #f2f2f2;
	}

	// Styling for mobile buttons on big screens
	.wrapper .btn {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		display: none;
	}
	.wrapper .btn.close-btn {
		position: absolute;
		right: 30px;
		top: 10px;
	}

	// Nav for small screens
	@media screen and (max-width: 970px) {
		.wrapper .btn {
			display: block;
		}

		.wrapper .nav-links {
			position: fixed;
			height: 100vh;
			width: 100%;
			//max-width: 350px;
			top: 0;
			left: -100%;
			//left: ${(props) => (props.onClick ? '-100%' : '0%')};
			background: #242526;
			display: block;
			padding: 4rem 1rem;
			line-height: 4rem;
			overflow-y: auto;
			box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
			transition: all cubic-bezier(0.075, 0.82, 0.165, 1) ease;
		}

		#menu-btn:checked ~ .nav-links {
			left: 0%;
		}
		#menu-btn:checked ~ .btn.menu-btn {
			display: none;
		}
		#close-btn:checked ~ .btn.menu-btn {
			display: block;
		}
		.nav-links li {
			margin: 15px 10px;
		}
		.nav-links li a {
			padding: 0 20px;
			display: block;
			font-size: 20px;
		}
		#showMega:checked ~ .mega-box {
			max-height: 100%;
		}
		.nav-links .desktop-item {
			display: none;
		}
		.nav-links .mobile-item {
			display: block;
			color: #f2f2f2;
			font-size: 20px;
			font-weight: 500;
			padding-left: 20px;
			cursor: pointer;
			border-radius: 5px;
			transition: all 0.3s ease;
		}
		.nav-links .mobile-item:hover {
			background: #3a3b3c;
		}
		.mega-box {
			position: static;
			top: 65px;
			opacity: 1;
			visibility: visible;
			padding: 0 20px;
			max-height: 0px;
			overflow: hidden;
			transition: all 0.3s ease;
		}
		.mega-box .content {
			box-shadow: none;
			flex-direction: column;
			padding: 20px 20px 0 20px;
		}
		.mega-box .content .row {
			width: 100%;
			margin-bottom: 15px;
			border-top: 1px solid rgba(255, 255, 255, 0.08);
		}
		.mega-box .content .row:nth-child(1),
		.mega-box .content .row:nth-child(2) {
			border-top: 0px;
		}
		.content .row .mega-links {
			border-left: 0px;
			padding-left: 15px;
		}
		.row .mega-links li {
			margin: 0;
		}
		.content .row header {
			font-size: 19px;
		}
		.content .row img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 6px;
		}
		/* custom scroll bar */
		::-webkit-scrollbar {
			width: 10px;
		}
		::-webkit-scrollbar-track {
			background: #242526;
		}
		::-webkit-scrollbar-thumb {
			background: #3a3b3c;
		}
	}
	input {
		display: none;
	}
`;
