import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from "./components/SingIn";
import UserPage from "./components/UserPage";

import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  const [data, setData] = useState({});
  const [isPage, setIsPage] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`http://${window.location.hostname}/api`);
      const data = await res.json();
      setData(data);

      if (!data.isFound) {
        setLoading(false);
        setIsPage(false);
        return;
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className="App">
          <BrowserRouter>
            <Routes>
              {!data.subdomin && (
                <>
                  <Route path="/sing-up" element={<SignUp />} />
                  <Route path="/sing-in" element={<SignIn />} />
                </>
              )}
              {!data.subdomin && <Route path="/" element={<HomePage />} />}
              {data.subdomin && <Route path="/*" element={isPage ? <UserPage subDomin={data.subdomin} /> : <h1>Page not found</h1>} />}
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
