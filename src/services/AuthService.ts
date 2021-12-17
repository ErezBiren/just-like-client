export const logIn = (email: string, password: string) => {
  let url = `http:\\aaa?key=${import.meta.env.VITE_FIREBASE_WEB_API_KEY}`;

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
