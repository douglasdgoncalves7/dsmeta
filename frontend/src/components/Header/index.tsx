import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMEta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://www.linkedin.com/in/douglas-diego-gon%C3%A7alves-798b32219/" target="_blank">@Douglas
                        Diego</a>
                </p>
            </div>

        </header>

    )
}
export default Header
