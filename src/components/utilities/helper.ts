import { Colors } from "../atoms";

export const colourStyles = {
  control: (styles: any, state: any) => ({
    ...styles,
    backgroundColor: "white",
    borderRadius: "6px",
    height: 34,
    border: state.isFocused
      ? `1px solid ${Colors.boiGreen}`
      : `1px solid ${Colors.lightBlack}`,
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
