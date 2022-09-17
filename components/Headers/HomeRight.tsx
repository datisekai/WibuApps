import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import NavigationProps from "../../models/NavigationProps";
import useColorScheme from "../../hooks/useColorScheme";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const HomeRight: FC<NavigationProps> = ({ navigation }) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("Modal")}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name='heart'
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Modal")}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name='search'
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    </View>
  );
};

export default HomeRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
