import React, { Fragment } from "react";
import { Image, View } from "react-native";
import FastImage from "react-native-fast-image";
import { moderateScale, scale } from "@utils/scaling";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const Avatar = ({
  uri = "",
  imageStyles = {},
  hoobahoo = false,
  contain = false,
  withDefault = false,
}) => {
  const { styles, theme } = useStyles(stylesheet);

  const calHeight = imageStyles?.height ? imageStyles?.height : 40;
  const calWidth = imageStyles?.width ? imageStyles?.width : 40;

  if (!uri) {
    return (
      <View
        style={{
          borderRadius: 100,
          ...imageStyles,
          alignItems: "center",
          justifyContent: "center",
          width: calWidth + 5,
          height: calHeight + 5,
          backgroundColor: theme.colors.imageBG,
        }}
      >
        <Image
          style={[
            styles.profileImage,
            {
              width: calWidth - 5,
              height: calHeight - 5,
            },
          ]}
          source={
            !!uri
              ? {
                  uri: uri || "",
                  priority: FastImage.priority.high,
                }
              : hoobahoo
                ? require("@assets/Images/HoobahooPlaceHolder.png")
                : require("@assets/Images/profilePlaceHolder.png")
          }
          resizeMode={!uri ? "contain" : "cover"}
        />
      </View>
    );
  }

  if (withDefault) {
    return (
      <Image
        style={[styles.profileImage, imageStyles]}
        source={
          !!uri
            ? {
                uri: uri || "",
                priority: FastImage.priority.high,
              }
            : hoobahoo
              ? require("@assets/Images/HoobahooPlaceHolder.png")
              : require("@assets/Images/profilePlaceHolder.png")
        }
        resizeMode={!uri ? "contain" : "cover"}
      />
    );
  }
  return (
    <FastImage
      style={[styles.profileImage, imageStyles]}
      source={
        !!uri
          ? {
              uri: uri || "",
              priority: FastImage.priority.high,
            }
          : hoobahoo
            ? require("@assets/Images/HoobahooPlaceHolder.png")
            : require("@assets/Images/profilePlaceHolder.png")
      }
      resizeMode={!uri ? FastImage.resizeMode.contain : FastImage.resizeMode.cover}
    />
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {},
  profileImage: {
    width: scale(35),
    height: scale(35),
    borderRadius: 100,
    backgroundColor: theme.colors.imageBG,
  },
}));

export default Avatar;
