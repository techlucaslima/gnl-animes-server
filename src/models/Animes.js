import pool from "../config/db.js";

export default class Animes {
  static async findAll() {
    const [rows] = await pool.query("SELECT * FROM animes");
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query("SELECT * FROM animes WHERE id = ?", [id]);
    return rows[0];
  }

  static async findByName(letters) {
    const [rows] = await pool.query("SELECT * FROM animes WHERE name LIKE ?", [`%${letters}%`]);
    return rows;
  }
}