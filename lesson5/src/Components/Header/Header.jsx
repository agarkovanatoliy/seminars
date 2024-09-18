import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const { userName, setUserName } = useContext(UserContext);
  const { name, email } = useSelector((state) => state.user);
  return (
    <header>
      <div>UserName(Context): {userName}</div>
      <div>Имя(Redux): {name}</div>
      <div>E-mail(Redux): {email}</div>
      <button onClick={() => setUserName("Гость")}>Выйти</button>
    </header>
  )
};