import React, { useState } from "react";
import * as S from "./style";
import TextInput from "components/TextInput/TextInput";
import Button from "components/Button/Button";
import firebase, { AuthService } from "linkbookFirebase";

interface HomeProps {
  changeUser: (newUser: any) => void;
}

const Home: React.FC<HomeProps> = ({ changeUser }) => {
  const [isCreateUser, setIsCreateUser] = useState<boolean>(false);
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const onLoginInfoChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value, type },
    } = e;
    if (type === "email") setLoginEmail(value);
    else if (type === "password") setLoginPassword(value);
  };

  const changeIsCreateUser = () => setIsCreateUser((prev) => !prev);
  const onLoginError = (error: string): void => {
    if (error.includes("invalid"))
      window.alert("Email or Password is not correct.");
    else if (error.includes("no user"))
      window.alert("There is no such user, maybe you should Sign up first :D");
    else
      window.alert("Something went wrong... please try again a while after.");
  };
  // --------- Google does this for me -------------------
  // const emailPasswordValidation = (): string => {
  //   let errorMessage = "";
  //   if (loginEmail.length === 0)
  //     errorMessage = "Ummm... You should enter your email first.";
  //   else if (!loginEmail.includes("@"))
  //     errorMessage =
  //       "Are you sure that is your email address? Please check again.";
  //   else if (!loginEmail.includes("."))
  //     errorMessage =
  //       "Are you sure that is your email address? Please check again.";
  //   else if (
  //     loginEmail.match(
  //       new RegExp(/[a-zA-Z0-9\.]+(\@)[a-zA-Z0-9\.]+(\.)[a-z]+/)
  //     ) !== null
  //   )
  //     errorMessage =
  //       "Your email address is not a email form. Try another email.";
  //   else errorMessage = "no problem";
  //   return errorMessage === "no problem" ? "good" : errorMessage;
  // };
  const createUser = async (): Promise<void> => {
    try {
      const { user } = await AuthService.createUserWithEmailAndPassword(
        loginEmail,
        loginPassword
      );
      changeUser(user);
    } catch (error) {
      window.alert("Something went wrong...Please try again a while later.");
    }
  };
  const loginUser = async (): Promise<void> => {
    try {
      const { user } = await AuthService.signInWithEmailAndPassword(
        loginEmail,
        loginPassword
      );
      changeUser(user);
    } catch (error) {
      onLoginError(String(error));
    }
  };
  const onEmailLoginFormSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (isCreateUser) createUser();
    else loginUser();
  };

  const onGoogleLogin = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await AuthService.signInWithPopup(provider);
      changeUser(user);
    } catch (error) {
      console.log("Error in google login: ", error.toString());
    }
  };
  const onGithubLogin = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      const provider = new firebase.auth.GithubAuthProvider();
      const { user } = await AuthService.signInWithPopup(provider);
      changeUser(user);
    } catch (error) {
      console.log("Error in github login: ", error.toString());
    }
  };

  return (
    <S.HomeContainer>
      <S.EmailLoginForm onSubmit={onEmailLoginFormSubmit}>
        <TextInput
          type="email"
          name="loginEmail"
          value={loginEmail}
          placeholder="Email"
          isRequired={true}
          onChangeFunc={onLoginInfoChange}
        />
        <TextInput
          type="password"
          name="loginPassword"
          value={loginPassword}
          placeholder="Password"
          isRequired={true}
          onChangeFunc={onLoginInfoChange}
        />
        <Button
          type="submit"
          displayContent={isCreateUser ? "Sign UP" : "Login"}
        />
        <Button
          type="button"
          displayContent={isCreateUser ? "Change to Login" : "I'm a new user!"}
          onClickFunc={changeIsCreateUser}
        />
      </S.EmailLoginForm>
      <S.SocialLoginContainer>
        <Button
          type="button"
          displayContent="Login with Google"
          onClickFunc={onGoogleLogin}
        />
        <Button
          type="button"
          displayContent="Login with Github"
          onClickFunc={onGithubLogin}
        />
      </S.SocialLoginContainer>
    </S.HomeContainer>
  );
};

export default Home;
