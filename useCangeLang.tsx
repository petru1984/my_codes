import { useNavigate, useLocation } from "react-router-dom";

const useChangeLang = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (newLang) => {
    const parts = location.pathname.split("/");

    // dacă nu există lang în URL
    if (!parts[1]) {
      parts[1] = newLang;
    } else {
      parts[1] = newLang;
    }

    navigate(parts.join("/"));
  };
};