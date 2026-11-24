import './Header.css'

export function Header(){
    return (
        <header>
            <div>
                <a href="#inicio">
                <span>🌍orbit.</span>
                </a>

                <nav>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#series">Series</a></li>
                    <li><a href="#peliculas">Películas</a></li>
                    <li><a href="#tienda">Tienda</a></li>
                    <li><a href="#soporte">Soporte</a></li>
                </ul>
                </nav>

                <input type="text" />

                <search>
                <form>
                    <label>🔍</label>
                    <input type="search" placeholder="Buscar títulos..."/>
                    <button type="submit">Buscar</button>
                </form>
                </search>

                <div>
                    <button type="button">☀️</button>
                    <a href="">🏪</a>
                    <button type="button">Iniciar sesión</button>
                </div>
            </div>
        </header>
    )
}