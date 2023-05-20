import { GoogleLogout } from "react-google-login";
const clientId =
  "589723816804-1uj5qgn673fha0jhfti1f4us51as8s7h.apps.googleusercontent.com";
function Logout({ LogOutOnSuccess, onFailure }) {
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="LogOut"
        onLogoutSuccess={LogOutOnSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
export default Logout;
