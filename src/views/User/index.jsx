import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useParams } from "react-router-dom";
import { getRepos, getUser } from "../../services/api";
import UserContext from "../../store/userContext";
import UserReposWrapper from "../../components/userReposWrapper";
import UserInfoWrapper from "../../components/userInfoWrapper";
import "./style.scss";

function User() {
  const { userData, setUserData } = useContext(UserContext);
  const [userRepos, setUserRepos] = useState([]);
  const [search, setSearch] = useState("");
  const { username } = useParams();

  useEffect(() => {
    const lookForUser = async (e) => {
      setUserData(await getUser(username));
    };

    if (!userData.name) return lookForUser();
    if (username) getAllRepos(username);
  }, [setUserData, userData.name, username]);

  const filteredRepos = useMemo(() => {
    return userRepos.filter((repo) => {
      return repo.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [userRepos, search]);

  const searchRepos = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const getAllRepos = async (username) => {
    const userRepos = await getRepos(username);
    setUserRepos(userRepos);
  };

  return (
    <div className="user">
      <input
        type="text"
        onChange={searchRepos}
        placeholder="Search for a repository"
        disabled={!userRepos}
      />
      {filteredRepos.length === 0 && (
        <p className="noRepos">
          No repositories found for {""}
          {!!!search && <strong>{username}</strong>}
          {!!search && <strong>{search}</strong>}
        </p>
      )}
      <div className="userData">
        {userData.name && <UserInfoWrapper userData={userData} />}
        {filteredRepos.length > 0 && (
          <UserReposWrapper userRepos={filteredRepos} />
        )}
      </div>
    </div>
  );
}

export default User;
