import { Team } from "../components/Team";
import { MentalBlog } from "../components/MentalBlog";
import { ContainerMental } from "../components/ContainerMental";
import { Statistic } from "../components/Statistics";
import { CategoriesMental } from "../components/CategoriesMental";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
// import Contact from "./Contact";

function MentalPage() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser === 0) {
          navigate("/");
        }
      }, [currentUser, navigate]);

  return (
    <div className="app">
      <ContainerMental />
      <CategoriesMental />
      <Statistic />
      <MentalBlog />
      <Team />
      {/* <Contact /> */}
    </div>
  );
}

export default MentalPage;