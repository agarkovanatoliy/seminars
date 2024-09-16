import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import s from "./App.module.css";
import { HomePage } from './Components/HomePage/HomePage';
import { AboutPage } from './Components/AboutPage/AboutPage';
import { Box } from './Components/Box/Box';
import { List } from './Components/List/List';

const arr = ["пункт 1", "пункт 2", "пункт 3"];
const goods = [
  {
    id: 1,
    title: "Xiaomi",
    price: "30000",
  },
  {
    id: 2,
    title: "Samsung",
    price: "50000",
  },
  {
    id: 3,
    title: "iPhone",
    price: "80000",
  },
];

const App = () => {
  const renderItem = (item, i) => {
    const style = { borderBottom: `1px solid ${i % 2 ? "green" : "red"}` };
    return <article style={style}>{item}</article>;
  };

  const renderItemGoods = (item, i) => {
    const style = { borderBottom: `1px solid ${i % 2 ? "green" : "red"}` };
    return <>
      <article style={style}>{item.title}</article>
      <p>Цена&nbsp;&nbsp;&nbsp;&nbsp;{item.price}</p>
    </>
  };

  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ];

  const styleActiveLink = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };
  return (
    <BrowserRouter>
      <nav className={s.nav}>
        <NavLink className={styleActiveLink} to="/">
          Главная
        </NavLink>
        <NavLink className={styleActiveLink} to="/about">
          О нас
        </NavLink>
        <NavLink className={styleActiveLink} to="/text">
          Текст
        </NavLink>
        <NavLink className={styleActiveLink} to="/arr">
          Пункты
        </NavLink>
        <NavLink className={styleActiveLink} to="/goods">
          Страница товаров
        </NavLink>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/text"
          element={
            <Box customStyle="test">
              <p>Текст внутри Box</p>
            </Box>
          }
        />
        <Route
          path="/arr"
          element={
            <Box>
              <List items={arr} renderItem={renderItem} />
            </Box>
          }
        />
        <Route path="/goods" element={
            <Box>
              <List items={goods} renderItem={renderItemGoods} />
            </Box>
          }
        />
      </Routes>
      {/* ListPage  */}
      {/* DetailPage */}
    </BrowserRouter>
  );
};

export default App;
