import React, { useState, forwardRef, Fragment } from "react";
import { TextInput, View, Text, Pressable, Platform } from "react-native";
import { ErrorIcon } from "@assets/SVGs";
import { useStyles, UnistylesRuntime } from "react-native-unistyles";
import styleSheet from "./styles";
import { COLORS } from "src/styles/themes";
import { moderateScale } from "@utils/scaling";
import { TextContainer } from "..";
import { Eye, EyeOff } from "lucide-react-native";

export default forwardRef(
  (
    {
      error,
      title = "",
      onPress = null,
      leftIcon = null,
      rightIcon = null,
      editable = true,
      isCount = false,
      isValid = false,
      totalDigits = null,
      isCounterWhite = false,
      password = false,
      totalCount = "",
      containerStyle = {},
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const { styles, theme } = useStyles(styleSheet);
    const [isPassword, setIsPassword] = useState(password);

    let borderColor = COLORS.inputBorderColor;
    const backgroundColor = onPress
      ? theme.colors.inputBG2
      : editable
        ? theme.colors.inputBG2
        : theme.colors.inputBG2;
    const isDarkMode = UnistylesRuntime.themeName === "dark";

    if (isFocused) borderColor = COLORS.blue;
    if (error) borderColor = COLORS.error;
    if (isValid) borderColor = theme.colors.appPrimary;

    if (!!onPress && Platform.OS == "android") {
      return (
        <Pressable style={[{}, containerStyle]} onPress={editable ? null : onPress}>
          {!!title && <TextContainer text={title} style={styles.titleText} />}
          {!!totalCount && (
            <Text style={styles.countText}>{`${props?.value?.length}/${totalCount}`}</Text>
          )}
          <View style={[styles.container, { backgroundColor, borderColor }]}>
            {leftIcon}
            <TextInput
              ref={ref}
              {...props}
              editable={editable}
              secureTextEntry={isPassword}
              placeholderTextColor={COLORS.textGray}
              style={[
                styles.textInput,
                { marginLeft: leftIcon ? moderateScale(6) : 0 },
                props?.style,
              ]}
              onFocus={() => {
                setIsFocused(true);
                props?.onFocus?.();
              }}
              onBlur={(e) => {
                setIsFocused(false);
                props?.onBlur?.(e);
              }}
            />
            {password ? (
              <Fragment>
                {isPassword ? (
                  <Pressable onPress={() => setIsPassword(!isPassword)}>
                    <EyeOff color={isDarkMode ? COLORS.white : COLORS.black} size={24} />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => setIsPassword(!isPassword)}>
                    <Eye color={isDarkMode ? COLORS.white : COLORS.black} size={24} />
                  </Pressable>
                )}
              </Fragment>
            ) : (
              <Fragment>{rightIcon}</Fragment>
            )}
          </View>
          {!!error ? (
            <View style={styles.errorContainer}>
              <ErrorIcon style={styles.icon} />
              <Text style={styles.errorText}>{error || "Error"}</Text>
            </View>
          ) : (
            <View style={styles.emptyErrorContainer}>
              <Text style={styles.emptyErrorText}>{"Empty"}</Text>
            </View>
          )}
        </Pressable>
      );
    }

    return (
      <View style={[{}, containerStyle]}>
        {!!title && <TextContainer text={title} style={styles.titleText} />}
        {!!totalCount && (
          <Text style={styles.countText}>{`${props?.value?.length}/${totalCount}`}</Text>
        )}
        <View style={[styles.container, { backgroundColor, borderColor }]}>
          {leftIcon}
          <TextInput
            ref={ref}
            {...props}
            editable={editable}
            secureTextEntry={isPassword}
            onPressIn={editable ? null : onPress}
            placeholderTextColor={COLORS.textGray}
            style={[
              styles.textInput,
              { marginLeft: leftIcon ? moderateScale(6) : 0 },
              props?.style,
            ]}
            onFocus={() => {
              setIsFocused(true);
              props?.onFocus?.();
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props?.onBlur?.(e);
            }}
          />
          {password ? (
            <Fragment>
              {isPassword ? (
                <Pressable onPress={() => setIsPassword(!isPassword)}>
                  <EyeOff color={isDarkMode ? COLORS.white : COLORS.black} size={24} />
                </Pressable>
              ) : (
                <Pressable onPress={() => setIsPassword(!isPassword)}>
                  <Eye color={isDarkMode ? COLORS.white : COLORS.black} size={24} />
                </Pressable>
              )}
            </Fragment>
          ) : (
            <Fragment>{rightIcon}</Fragment>
          )}
        </View>
        {!!error ? (
          <View style={styles.errorContainer}>
            <ErrorIcon style={styles.icon} />
            <Text style={styles.errorText}>{error || "Error"}</Text>
          </View>
        ) : (
          <View style={styles.emptyErrorContainer}>
            <Text style={styles.emptyErrorText}>{"Empty"}</Text>
          </View>
        )}
      </View>
    );
  },
);
