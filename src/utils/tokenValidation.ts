import { parseCookies } from "nookies";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, PreviewData } from "next";
import { ParsedUrlQuery } from "node:querystring";
export class TokenValidation {
  private readonly callback?: GetServerSideProps;

  /**
   * Creates a token validation
   * @param getProps (Optional) custom implementation for getting the server side props
   */
  constructor(getProps?: GetServerSideProps) {
    this.callback = getProps;
  }

  /**
   * Shortcut for new TokenValidation().validate.
   * Usage: export const getServerSideProps = TokenValidation.validate;
   * @param context passed automatically from Next.js
   * @returns handled automatically on Next.js
   */
  static validator(): (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => Promise<
    GetServerSidePropsResult<{
      [key: string]: string;
    }>
  > {
    return new TokenValidation().build().validator;
  }

  /**
   * Method for validating token & optionally running getProps method specified on constructor
   * Usage: export const getServerSideProps = new TokenValidation(myGetProps).validate
   * @param context passed automatically from Next.js
   * @returns handled automatically on Next.js
   */
  public build(): {
    validator: (context: GetServerSidePropsContext) => Promise<
      GetServerSidePropsResult<{
        [key: string]: string;
      }>
    >;
  } {
    const callBackFn = this.callback;
    return {
      validator: async (context: GetServerSidePropsContext) => {
        const { "tracking.plataform.token": token } = parseCookies(context);

        if (token === null) {
          return {
            redirect: {
              destination: "/",
              permanent: false,
            },
          };
        }

        if (callBackFn != null) {
          return await callBackFn(context);
        }

        return {
          props: {},
        };
      },
    };
  }
}
