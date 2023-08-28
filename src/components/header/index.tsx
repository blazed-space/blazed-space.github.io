import { config } from '../../config/site';
import { mainMenu } from "../../config/menu";

export default function Header(){
    return (
        <header className="border-b" role="banner">
            <nav role="navigation" className="navbar bg-base-100">
                <div className="flex-1">
                    <a href="/#/" title={config.name} className="btn btn-ghost normal-case text-xl">
                        <img src="/images/beaker-dark.svg" alt="Logo" className="w-10 h-10" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {
                            mainMenu.nav.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}