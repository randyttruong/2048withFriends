import { GoogleLogout } from 'react-google-login';

const cid = "1006579254303-v3hj0kl0fgkk0qiehc5n63r5vjsafkfh.apps.googleusercontent.com";

const Logout = () => {

  const onSuccess = (res) => {
    console.log("Logout successful.");
  };

  return (
    <div>
      <GoogleLogout
        clientId = {cid}
        buttonText = {"Logout"}
        onLogoutSuccess={onSuccess}

      />
    </div>

  );
}

export default Logout;
