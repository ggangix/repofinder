import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/api";
import UserContext from "../../store/userContext";

const Home = () => {
  const userInputEl = useRef(false);
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const [error, setError] = React.useState("");

  const lookForUser = async (e) => {
    e.preventDefault();
    const user = userInputEl.current.value;
    const userData = await getUser(user);

    // Display an error message if something is not right
    if (userData.message) return setError(userData.message);
    // If everything is ok, set the user data in the store and navigate to the user page
    setUserData(userData);
    navigate(`/user/${user}`);
  };

  return (
    <div>
      <h2> Please enter a github username </h2>
      <form onSubmit={lookForUser}>
        <input type="text" ref={userInputEl} />
        <button type="submit" onClick={lookForUser}>
          Submit
        </button>
      </form>
      {error && (
        <div className="error">
          <p>Sorry: {error}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
