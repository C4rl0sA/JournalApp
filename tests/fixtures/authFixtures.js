export const initialState = {
  status: "checking", // "checking" - "Not-authenticated" - "Authenticated"
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};
export const authenticatedState = {
  status: "authenticated", // "checking" - "Not-authenticated" - "Authenticated"
  uid: "ABC123",
  email: "delassalasospino2003@gmail.com",
  displayName: "Carlos de las salas",
  photoURL: "https://demo.jpg",
  errorMessage: null,
};
export const notAuthenticatedState = {
  status: "not-authenticated", // "checking" - "Not-authenticated" - "Authenticated"
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: "ABC123",
  email: "demo@gmail.com",
  displayName: "Demo user",
  photoURL: "https://demo.jpg",
};
