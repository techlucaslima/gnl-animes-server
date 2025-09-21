import AnimesService from "../services/animesService.js"

export default class AnimesController {
  static async getAll(req, res) {
    try {
      const animes = await AnimesService.getAllAnimes();
      res.json(animes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const anime = await AnimesService.getAnimeById(req.params.id);
      res.json(anime);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  static async getByName(req, res) {
    try {
      const animes = await AnimesService.getAnimeByName(req.params.name);
      res.json(animes);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}