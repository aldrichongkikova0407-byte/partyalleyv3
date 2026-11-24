interface LinkData {
	href: string;
	label: string;
	isExternal: boolean;
	variant: 'text' | 'primary' | 'secondary';
}

export const brand = {
	name: 'Party Alley',
	image: '/partey-alley-logo.avif',
	homeLink: {
		href: '/',
		label: 'Party Alley home',
		isExternal: false,
	},
} as const;

export const mainNavigation = [
	{ href: '/', label: 'Home', isExternal: false, variant: 'text' },
	{ href: '/about/', label: 'About Us', isExternal: false, variant: 'text' },
	{ href: '/services/', label: 'Services', isExternal: false, variant: 'text' },
	{ href: '/portfolio/', label: 'Portfolio', isExternal: false, variant: 'text' },
	{ href: '/contact/', label: 'Contact Us', isExternal: false, variant: 'text' },
] as const satisfies readonly LinkData[];

export const sharedCta = {
	href: '/contact/',
	label: 'Get a Quote',
	isExternal: false,
	variant: 'primary',
} as const satisfies LinkData;
