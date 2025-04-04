import { Request, Response } from "express";
import db from "../models/skymgroupModel";

export const getHomeData = async (req: Request, res: Response) => {
  try {
    const [models] = await db.query("SELECT * FROM ai_models");
    const [languages] = await db.query("SELECT * FROM programming_languages");
    const [jobs] = await db.query("SELECT * FROM ai_jobs");

    res.json({ models, languages, jobs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
};

export const getModelDetails = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM ai_models WHERE id = ?",
      [req.params.id]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching model details", error });
  }
};

export const getLanguageLibraries = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM libraries WHERE language_id = ?",
      [req.params.id]
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error fetching libraries", error });
  }
};
