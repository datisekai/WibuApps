import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { ComicModel } from "../../models/ComicModel";
import Colors from "../../constants/Colors";
import CardHome from "../Card/CardHome";
import { HStack } from "@react-native-material/core";

interface Section2Props {
  data: ComicModel[];
  label?: string;
}

const Section2: FC<Section2Props> = ({ data, label }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <ScrollView contentContainerStyle={styles.list}>
        {data.map((item: ComicModel) => (
          <CardHome {...item} key={item.href} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Section2;

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.dark.text,
    marginBottom: 8,
  },
  container: {
    marginTop: 16,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
