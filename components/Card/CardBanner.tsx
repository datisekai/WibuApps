import React, { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import Color from "../../constants/Colors";
import { BannerModel } from "../../models/ComicModel";
import { getImage } from "../../utils";

const CardBanner: FC<BannerModel> = ({
  href,
  img,
  name,
  newChapters,
  info,
}) => {
  return (
    <View>
      <ImageBackground source={{ uri: getImage(img) }} style={styles.image}>
        <View style={styles.bottomImage}>
          <Text style={styles.text} numberOfLines={1}>
            {name}
          </Text>
          <View style={styles.viewInfo}>
            <View style={styles.info}>
              <Icon style={styles.infoIcon} name='eye' />
              <Text style={styles.infoText}>{info["\nLượt xem"]}</Text>
            </View>
            <View style={styles.info}>
              <IconMaterial style={styles.infoIcon} name='access-time' />
              <Text style={styles.infoText}>{info["\nNgày cập nhật"]}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardBanner;

const styles = StyleSheet.create({
  image: {
    width: 200,
    aspectRatio: 168 / 223,
    position: "relative",
  },
  bottomImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: "rgba(0,0,0,0.616)",
  },
  text: {
    color: Color.dark.text,
    textAlign: "center",
    fontSize: 15,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  infoText: {
    color: Color.dark.text,
    fontSize: 13,
    marginLeft: 4,
  },
  infoIcon: {
    color: Color.dark.text,
    fontSize: 15,
  },
});
