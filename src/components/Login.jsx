import GoogleLogin, { useGoogleLogin } from "react-google-login";
const clientId =
  "589723816804-1uj5qgn673fha0jhfti1f4us51as8s7h.apps.googleusercontent.com";
function Login({ user, onSuccess, onFailure }) {
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
export default Login;
