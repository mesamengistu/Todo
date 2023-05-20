import { useEffect, useState, useRef } from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import { gapi } from "gapi-script";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import Account from "./Account";
const clientId =
  "589723816804-1uj5qgn673fha0jhfti1f4us51as8s7h.apps.googleusercontent.com";
function Profile() {
  const wrapperReff = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperReff.current && !wrapperReff.current.contains(event.target)) {
        setAccountManage(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperReff]);
  const [accountManage, setAccountManage] = useState(false);
  const LogOutOnSuccess = (res) => {
    console.log("LOGIN SUCCESS Current user: ", res);
    setUser({});
  };
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS Current user: ", res.profileObj);
    setUser(res.profileObj);
  };
  const onFailure = (res) => {
    console.log("LOGIN SUCCESS Current user: ", res);
  };
  const [user, setUser] = useState({});
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  return (
    <div className="row">
      <div className="  ps-3  g-0">
        {Object.keys(user).length === 0 ? (
          <Login onSuccess={onSuccess} onFailure={onFailure} />
        ) : (
          <div>
            <div className="account-container">
              <img
                src={user.imageUrl}
                alt="Photo"
                className="user-photo img-fluid rounded-circle"
              />
              <label className="user-name">{user.name}</label>
              <label
                className="user-email"
                onClick={(e) => {
                  e.stopPropagation();
                  setAccountManage(!accountManage);
                }}
                ref={wrapperReff}
              >
                {user.email}
                <HiOutlineChevronUpDown />
                {accountManage && <Account />}
              </label>
            </div>
            <div style={{ display: "none" }}>
              <Logout LogOutOnSuccess={LogOutOnSuccess} onFailure={onFailure} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Profile;
