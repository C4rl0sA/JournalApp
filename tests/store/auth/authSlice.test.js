import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
  notAuthenticatedState,
} from "../../fixtures/authFixtures";

describe("Pruebas en el authSlice", () => {
  test('Debe de regresar el estado inicial y llamarse "auth"', () => {
    const state = authSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);

    expect(authSlice.name).toBe("auth");
  });

  test("Debe de realizar la autenticacion", () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    // console.log(state);

    expect(state).toEqual({
      status: "authenticated", // "checking" - "Not-authenticated" - "Authenticated"
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test("Debe de realizar el logout sin argumentos", () => {
    const state = authSlice.reducer(initialState, logout(authenticatedState));
    // console.log(state);

    expect(state).toEqual({
      status: "not-authenticated", // "checking" - "Not-authenticated" - "Authenticated"
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: null,
    });
  });

  test("Debe de realizar el logout con argumentos ", () => {
    const errorMessage = "Credenciales no son correctas";
    const state = authSlice.reducer(
      initialState,
      logout({ authenticatedState, errorMessage })
    );

    expect(state).toEqual({
      status: "not-authenticated", // "checking" - "Not-authenticated" - "Authenticated"
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: "Credenciales no son correctas",
    });
  });

  test('Debe de cambiar el estado a "checking"', () => {
    const state = authSlice.reducer(initialState, checkingCredentials());
    expect(state.status).toEqual("checking");
  });
});
