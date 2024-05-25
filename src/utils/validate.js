export const checkValid = (email, password) => {
  const emailCorrect =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const passwordCorrect = /^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.* ).{8,16}$/.test(
    password
  );

  if (!emailCorrect) {
    return "Email address is not valid";
  }
  if (!passwordCorrect) {
    return "Password is not valid";
  }
  return null;
};
