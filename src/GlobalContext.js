import React, { useEffect } from "react";
import { TOKEN_POST } from "./api";

export const GlobalContext = React.createContext();

export function GlobalStorage({children}) {
    const [darkMode, setDarkMode] = React.useState(false);
    

    async function userLogin(username, password) {
        const { url, options } = TOKEN_POST(username, password);
        const response = await fetch(url, options);
        const {token} = response.json();
        window.localStorage.setItem("token", token);
    }
    return (
      <GlobalContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </GlobalContext.Provider>
    );
}

