import auth0 from "auth0-js";
import history from "../history";

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: "mood-curie.auth0.com",
    clientID: "fwKGmMskS6szk9XlF696WG1KNQnoT5Db",
    redirectUri: "https://yourmood.netlify.com/callback",
    // redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid profile email"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    // this.renewSession = this.renewSession.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  //deleted // handleAuthentication() for PR - have it saved in my notes
  

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        console.log("auth result", authResult);
        console.log("profile", authResult.idTokenPayload);
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000;

        // assign gathered values to localStorage for persistence in the application
        localStorage.setItem("jwt", authResult.idToken);
        localStorage.setItem("email", authResult.idTokenPayload.email);
        localStorage.setItem("name", authResult.idTokenPayload.name);
        localStorage.setItem("img_url", authResult.idTokenPayload.picture);
        localStorage.setItem("isLoggedIn", true);
        history.replace("/authorization");

        resolve();
      });
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }




  // setSession(authResult) {
  //   // Set isLoggedIn flag in localStorage
  //   localStorage.setItem("isLoggedIn", "true");

  //   // Set the time that the access token will expire at
  //   let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  //   this.accessToken = authResult.accessToken;
  //   this.idToken = authResult.idToken;
  //   this.expiresAt = expiresAt;

  //   // navigate to the home route
  //   history.replace("/authorization");
  //   //changed from home to profile
  // }

  // renewSession() {
  //   this.auth0.checkSession({}, (err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       this.setSession(authResult);
  //     } else if (err) {
  //       this.logout();
  //       console.log(err, 'renew session');
  //     }
  //   });
  // }

  getProfile(cb) {
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile, "get profile");
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("jwt");
    localStorage.removeItem("img_url");
    localStorage.removeItem("lsid");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("team_id");
    localStorage.removeItem("type");
    // navigate to the home route
    history.replace("/home");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
