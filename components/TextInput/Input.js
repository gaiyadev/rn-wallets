import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { SIZES } from "../../constants/sizes";
// import { icons, images } from "../constants";

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        ...styles.input,
        ...props.style,
      }}
    />
  );
};
const styles = StyleSheet.create({
  marginVertical: SIZES.padding,
  borderBottomColor: COLORS.white,
  borderBottomWidth: 1,
  height: 40,
  color: COLORS.white,
  ...FONTS.body3,
});
export default Input;
