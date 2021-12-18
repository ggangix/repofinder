import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRepos, getUser } from "../../services/api";
import UserContext from "../../store/userContext";
import UserReposWrapper from "../../components/userReposWrapper";
import UserInfoWrapper from "../../components/userInfoWrapper";
import "./style.scss";

function User() {
  const { userData, setUserData } = useContext(UserContext);
  const [userRepos, setUserRepos] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    const lookForUser = async (e) => {
      setUserData(await getUser(username));
    };

    if (!userData.name) return lookForUser();
    if (username) getAllRepos(username);
  }, [setUserData, userData.name, username]);

  const getAllRepos = async (username) => {
    const userRepos = await getRepos(username);
    setUserRepos(userRepos);
  };

  return (
    <div className="user">
      {userData.name && <UserInfoWrapper userData={userData} />}
      {userRepos.length > 0 && <UserReposWrapper userRepos={userRepos} />}
    </div>
  );
}

export default User;
