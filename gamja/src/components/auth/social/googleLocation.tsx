export const googleHandleLogin = () => {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    response_type: "code",
    scope: "email profile",
  };

  const queryString = new URLSearchParams(options).toString();

  window.location.href = `${rootUrl}?${queryString}`;
};
