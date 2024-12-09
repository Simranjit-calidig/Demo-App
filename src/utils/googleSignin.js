import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

export const googleLogin = async () => {
  try {
    await GoogleSignin.signOut(); 
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error) {
    switch (error.code) {
      case statusCodes.SIGN_IN_CANCELLED:
        console.log("User cancelled the login process.");
        break;
      case statusCodes.IN_PROGRESS:
        console.log("Sign in is in progress.");
        break;
      case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
        console.log("Play services are not available or outdated.");
        break;
      default:
        console.log("An error occurred during Google login:", error);
    }
    throw error; 
  }
};
