import axiosClient from "../axios/axiosClient";
import { BannerModel, ComicModel } from "../models/ComicModel";

interface HomeStructure {
  banner: () => Promise<BannerModel[]>;
  home: (page?: number) => Promise<ComicModel[]>;
}

const HomeAPI: HomeStructure = {
  banner: async () => {
    try {
      const result = await axiosClient.get("/home/banner");
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  },
  home: async (page = 1) => {
    try {
      const result = await axiosClient.get(`/home?page=${page}`);
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default HomeAPI;
