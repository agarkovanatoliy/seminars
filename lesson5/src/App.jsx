import { useEffect, useState } from "react";
import "./App.css";
import { UserContext } from "./Contexts/UserContext";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import MainWithLoading from "./Components/Profile/Profile";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {
  const [userName, setUserName] = useState("Гость");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData("Привет НОС");
    }, 2000)
  }, [setIsLoading])
  return (
    <Provider store={store}>
    <ThemeProvider>
      <UserContext.Provider value={{ userName, setUserName }}>
        <Header />
        <MainWithLoading data={data} isLoading={isLoading} />
      </UserContext.Provider>
      <Footer />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
