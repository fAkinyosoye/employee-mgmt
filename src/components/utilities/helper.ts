import { Colors } from "../atoms";

export const colourStyles = {
  control: (styles: any, state: any) => ({
    ...styles,
    backgroundColor: "white",
    borderRadius: "6px",
    height: 34,
    borderColor: state.isFocused
      ? `1px solid ${Colors.boiGreen}`
      : `1px solid ${Colors.lightBlack}`,
    "&:hover": {
      borderColor: state.isFocused
        ? `${Colors.boiGreen}`
        : `${Colors.boiGreen}`,
    },
    boxShadow: "none",
    paddingLeft: "10px",
    color: "#3B58A8",
    width: "100%",
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: "black",
    fontSize: "14px",
  }),
};

export const decodeLogin = (data: any) => {
  // const user = jwt(data.data.token); // decode your token here
  localStorage.setItem("personEmail", data?.data?.personEmail); // change this to employeeID or token later
  // localStorage.setItem("token", data.data.token);
  localStorage.setItem("user", JSON.stringify(data.data));
};

export const getLoginData = () => {
  // let token: any = localStorage.getItem("token");
  // try {
  //   jwtDecode(token);
  //   const { exp }: any = jwtDecode(token);
  //   if (Date.now() >= exp * 1000) {
  //     logoutUser();
  //   }
  // } catch (err) {
  //   // return false;
  // }
  let rawUserData: any = localStorage.getItem("user");
  let user = JSON.parse(rawUserData);
  return user;
};

export const staffStatus = [
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Inactive",
    value: "Inactive",
  },
];
