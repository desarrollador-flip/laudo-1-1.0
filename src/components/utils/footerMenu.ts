import type { NavItem } from '../../types/navigation';

export const footerMenu: NavItem[] = [
    {
        id: 'privacy',
        to: '/politica-privacidad',
        label: 'Privacy Policy',
        title: 'Conoce la politica de privacidad',
        dataLink: 'footer-privacidad-link',
        type: 'route',
    },
    {
        id: 'terminos',
        to: '/terminos-servicios',
        label: 'Terms of Service',
        title: 'Conoce los terminos y servicios',
        dataLink: 'footer-terminos-link',
        type: 'route',
    },
    {
        id: 'compliance',
        to: '/compliance',
        label: 'Compliance',
        title: 'Conoce la compliance',
        dataLink: 'footer-compliance-link',
        type: 'route',
    },
    {
        id: 'regulatory',
        to: '/regulatory disclosure',
        label: 'Regulatory Disclosure',
        title: 'Conoce la Regulatory Disclosure',
        dataLink: 'footer-regulatory-link',
        type: 'route',
    },
    {
        id: 'soporte',
        to: '/soporte',
        label: 'Contact Support',
        title: 'Contacta con soporte',
        dataLink: 'footer-soporte-link',
        type: 'route',
    },
];
