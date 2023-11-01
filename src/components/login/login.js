import { GoogleLogin } from 'react-google-login';

const cid = "1006579254303-v3hj0kl0fgkk0qiehc5n63r5vjsafkfh.apps.googleusercontent.com";

const LogIn = () => {

    const onSuccess = (res) => {
        console.log("Login Success! Current User: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed.", res);
    }


    return (
        <div id="signInButton">
        <GoogleLogin
        clientId = {cid}
        buttonText ="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
        </div>
    );
}

export default LogIn;
