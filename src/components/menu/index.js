// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react';
import { Route, Link } from 'react-router-dom';

const MENU = [
    {title: 'Главная', link: '/'},
    // {title: 'Форум', link: ''},
    // {title: 'Регистрация', link: ''},
    // {title: 'Файлы для игры', link: ''},
    // {title: 'Правила', link: ''},
    // {title: 'Как начать играть?', link: ''},
    // {title: 'Видео', link: ''},
    // {title: 'Администрация', link: ''},
    {title: 'О сервере', link: '/about'},
    // {title: 'Гильдии сервера', link: ''},
    // {title: 'Координатная карта', link: ''},
    // {title: 'Галерея', link: ''},
];

const MENU_TABLES = [
    {title: 'Расы', link: '/tables/races'},
    // {title: 'Команды сервера', link: '/tables/'},
    // {title: 'Классы', link: '/tables/'},
    // {title: 'Навыки', link: '/tables/'},
    // {title: 'Таблица животных', link: '/tables/'},
    // {title: 'Ездовые животные', link: '/tables/'},
    // {title: 'Характеристики', link: '/tables/'},
    // {title: 'Alchemy', link: '/tables/'},
    // {title: 'Некро Магия', link: '/tables/'},
    // {title: 'Magery', link: '/tables/'},
    // {title: 'Blacksmithy', link: '/tables/'},
    // {title: 'Bowcraft', link: '/tables/'},
    // {title: 'Carpentry', link: '/tables/'},
    // {title: 'Lumberjacking', link: '/tables/'},
    // {title: 'Mining', link: '/tables/'},
    // {title: 'Tailoring', link: '/tables/'},
    // {title: 'Tinkering', link: '/tables/'},
    // {title: 'Постройки Сервера', link: '/tables/'},
    // {title: 'Начисляемый опыт', link: '/tables/'},
];

function Menu() {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <>
            <div className="box mainmenu">
                <div className="bhead" />
                {MENU.map(({link, title}) => (<dl><dt><Link to={link}>{title}</Link></dt></dl>))}

                <dl className="expanding last">
                    <dt><a onClick={() => setMenuOpened(!menuOpened)}>Таблицы</a></dt>
                    {MENU_TABLES.map(({link, title}) => menuOpened && (
                        <dd>
                            <Link to={link}>{title}</Link>
                        </dd>
                    ))}
                </dl>
                <div className="bfoot" />
            </div>
        </>
    );
}

export default Menu;
