export const verifyMessageErrorFirebase = (error: Array<string>, callback: (error: string) => void) => {
  console.log("file: index.ts:2 | verifyMessageErrorFirebase | error", error);
  error?.map((error) => {
    switch (error) {
      case "auth/wrong-password":
        callback("Verifique seus dados estão corretos");
        break;
      case "auth/user-not-found":
        callback("Usuário não está cadastrado em nossa base");
        break;
      case "auth/email-already-in-use":
        callback("Este E-mail já está sendo utilizado");
        break;
    }
  });
};
