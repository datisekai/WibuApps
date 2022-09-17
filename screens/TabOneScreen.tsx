import { useQuery } from "@tanstack/react-query";
import { ScrollView, StyleSheet } from "react-native";
import HomeAPI from "../actions/Home";

import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const { data: dataBanner } = useQuery(["banner"], HomeAPI.banner);
  const { data: dataHome } = useQuery(["home"], () => HomeAPI.home(1));

  return (
    <ScrollView style={{ marginHorizontal: 8 }}>
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
