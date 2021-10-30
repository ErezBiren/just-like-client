export const logIn = (email, password) => {
  let url = `http:\\aaa?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`;

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
