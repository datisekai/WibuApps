import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import HomeAPI from "../components/actions/Home";
import CardBanner from "../components/Card/CardBanner";

import EditScreenInfo from "../components/EditScreenInfo";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import { Text, View } from "../components/Themed";
import { ComicModel } from "../models/ComicModel";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const { data: dataBanner } = useQuery(["banner"], HomeAPI.banner);
  const { data: dataHome } = useQuery(["home"], () => HomeAPI.home(1));

  return (
    <ScrollView>
      {dataBanner && <Section1 label='Truyện đề cử' data={dataBanner} />}
      {dataHome && <Section2 label='Truyện mới cập nhật' data={dataHome} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
