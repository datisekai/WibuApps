import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { ComicModel, NewChapter } from "../../models/ComicModel";
import { getImage } from "../../utils";
import Colors from "../../constants/Colors";

const CardHome: FC<ComicModel> = ({
  href,
  img,
  name,
  description,
  id,
  newChapter,
  newChapters,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{ uri: getImage(img) }}
      ></ImageBackground>
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <View style={styles.listChapter}>
        {newChapters?.map((item: NewChapter) => (
          <View style={styles.chapter}>
            <Text style={styles.colorChapter}>{item.name}</Text>
            <Text style={styles.colorChapter}>{item.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 168 / 223,
    borderRadius: 5,
  },
  container: {
    width: 180,
    marginTop: 16,
  },
  name: {
    color: Colors.dark.text,
    fontSize: 15,
    marginTop: 8,
  },
  chapter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  colorChapter: {
    color: Colors.dark.text,
  },
  listChapter: {
    marginTop: 8,
  },
});
