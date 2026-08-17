import { SmartLink } from '../../utils/SmartLink';
import { NavItems } from '../utils/NavItems';

import { footerMenu } from '../utils/footerMenu';

import logo from '../../assets/images/common/logo.svg';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-brand">
                <SmartLink to="/" aria-label="Ir a la página de inicio" dataLink="footer-logo-btn">
                    <img src={logo} alt="Logotipo de Laudo en el pie de página" loading="lazy" decoding="async" />
                </SmartLink>
                <p>© 2026 Laudo. All rights reserved. Professional Legal &amp; Financial<br />Services.</p>
            </div>

            <ul>
                {footerMenu.map((item) => (
                    <li key={item.id}>
                        <NavItems item={item} />
                    </li>
                ))}
            </ul>

        </footer>
    );
}
