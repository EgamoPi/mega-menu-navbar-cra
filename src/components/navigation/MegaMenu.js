import { createElement as $ } from 'react';
import { Link } from 'react-router-dom';
import { megaMenuItems } from './megaMenuItems';
import plants from '../../img/plants.jpeg';

const MegaMenu = () => {
	return $(
		'li',
		null,
		$(Link, { to: '#', className: 'desktop-item' }, 'Mega Menu'),
		$('input', { type: 'checkbox', id: 'showMega' }),
		$('label', { htmlFor: 'showMega', className: 'mobile-item' }, 'Mega Menu'),
		// Mega Menu Main container
		$(
			'div',
			{ className: 'mega-box' },
			// Mega Menu 2nd container
			$(
				'div',
				{ className: 'content' },
				// 1st section of Mege Menu (each section has a className of row)
				$(
					'div',
					{ className: 'row' },
					$('img', { src: plants, alt: 'Mege menu Image' })
				),
				// 2nd section of Mege Menu (each section has a className of row)
				megaMenuItems.map((item, index) => {
					return $(
						'div',
						{ className: 'row', key: index },
						$('header', null, item.header),
						$(
							'ul',
							{ className: 'mega-links' },
							$(
								'li',
								null,
								$(Link, { to: item.links.pathToFirst }, item.links.firstItem)
							),
							$(
								'li',
								null,
								$(Link, { to: item.links.pathToSecond }, item.links.secondItem)
							),
							$(
								'li',
								null,
								$(Link, { to: item.links.pathToThird }, item.links.thirdItem)
							)
						)
					);
				})
			) // End of content div
		) // End of main container div
	); // End of Mega Menu
};

export default MegaMenu;
