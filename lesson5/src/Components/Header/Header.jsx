import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export const Header = () => {
  const { userName } = useContext(UserContext);
  return (
    <div>Имя: {userName}</div>
  )
};