import Animes from "../models/Animes.js";

export default class AnimesService {
  static async getAllAnimes() {
    return await Animes.findAll();
  }

  static async getAnimeById(id) {
    const anime = await Animes.findById(id);
    if (!anime) {
      throw new Error("Anime not found");
    }

    return anime;
  }

  static async getAnimeByName(letters) {
    return await Animes.findByName(letters);
  }
}