import type { NavItem } from '../../types/navigation';

export const navbarMenu: NavItem[] = [
    {
        id: 'inicio',
        to: '/',
        label: 'Inicio',
        title: 'Ir al inicio',
        dataLink: 'navbar-inicio-link',
        type: 'route',
    },
    {
        id: 'funciona',
        to: '/como-funciona',
        label: '¿Cómo funciona?',
        title: 'Descuscubre como funciona Laudo',
        dataLink: 'navbar-funciona-link',
        type: 'route',
    },
    {
        id: 'requisitos',
        to: '/requisitos',
        label: 'Requisitos de Laudo',
        title: 'Revisa los requisitos de Laudo',
        dataLink: 'navbar-requisitos-link',
        type: 'route',
    },
    {
        id: 'contacto',
        to: '/contacto',
        label: 'Contacto',
        title: 'Contacta con un experto',
        dataLink: 'navbar-contacto-link',
        type: 'route',
    },
    {
        id: 'faq',
        to: '/faq',
        label: 'Q&A',
        title: 'Consulta las preguntas frecuentes',
        dataLink: 'navbar-faq-link',
        type: 'route',
    },
];
