import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Color from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { BannerModel, ComicModel } from "../../models/ComicModel";
import CardBanner from "../Card/CardBanner";

interface Section1Props {
  data: BannerModel[];
  label?: string;
}

const Section1: FC<Section1Props> = ({ data, label }) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      {label && (
        <Text style={{ ...styles.label, color: Color[colorScheme].text }}>
          {label}
        </Text>
      )}
      <FlatList
        horizontal={true}
        data={data}
        style={{ marginTop: 8 }}
        renderItem={({ item }) => <CardBanner {...item} />}
        keyExtractor={(item: ComicModel) => item.href}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      />
    </View>
  );
};

export default Section1;

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  container: {
    marginTop: 16,
    flex: 1,
  },
});
