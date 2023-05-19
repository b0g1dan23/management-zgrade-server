import Radnik from "../models/Radnik.js";
import Upit from "../models/Upit.js";

export const fetchRadnici = async (req, res) => {
  try {
    const radnici = await Radnik.find();
    res.send(radnici);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const createNewRadnik = async (req, res) => {
  try {
    await Radnik.create(req.body);
    res.send("Uspesno dodat radnik");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const fetchRadnikById = async (req, res) => {
  try {
    const { id } = req.params;
    const currentRadnik = await Radnik.findById(id);
    res.send(currentRadnik);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const editRadnik = async (req, res) => {
  try {
    const { id } = req.params;
    await Radnik.updateOne({ _id: id }, req.body);
    res.send("Uspesno promenjeni podaci o radniku");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteRadnik = async (req, res) => {
  try {
    const { id } = req.params;
    await Radnik.deleteOne({ _id: id });
    res.send("Uspesno obrisan radnik");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const preDeleteMiddleware = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exists = await Upit.exists({ idRadnika: id });
    if (exists) {
      const error = new Error(
        "Nemoguce je brisati radnika koji se koristi u upitu"
      );
      res.status(500).send(error.message);
    } else {
      next();
    }
  } catch (err) {
    next(err.message);
  }
};
