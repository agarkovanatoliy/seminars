import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useTheme } from "../../Contexts/ThemeContext";
import withLoadingIndicator from "../WithLoadingIndicator/WithLoadingIndicator";
import { Counter } from "../Counter/Counter";
import { useDispatch } from "react-redux";
import {
  updateEmail,
  updateName,
  updateNameAndEmail,
} from "../../store/userReducer";

const Profile = ({ data }) => {
  const { setUserName } = useContext(UserContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const { theme, toggleTheme } = useTheme();

  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      dispatch(updateNameAndEmail({ name, email }));
    } else if (name.trim()) {
      dispatch(updateName(name));
    } else if (email.trim()) {
      dispatch(updateEmail(email));
    }
    setName("");
    setEmail("");
  };
  return (
    <div className="">
      <form
        onSubmit={handlerSubmit}
        style={{ background: "#ccc", padding: "20px" }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit">Отправить</button>
      </form>
      <p>{data}</p>
      <button onClick={() => setUserName(prompt("Напишите своё имя", "Макс"))}>
        Сменить имя
      </button>

      <button
        className={`btn-${theme === "light" ? "light" : "dark"}`}
        onClick={toggleTheme}
      >
        Сменить тему
      </button>
      <Counter />
      {/* {theme === "light" ? <img src={lightImg} alt="light" /> : null} */}
    </div>
  );
};

const MainWithLoading = withLoadingIndicator(Profile);

export default MainWithLoading;
