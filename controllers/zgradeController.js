import Zgrada from "../models/Zgrada.js";
import Upit from "../models/Upit.js";

export const fetchAllZgrade = async (req, res) => {
  try {
    const zgrada = await Zgrada.find();
    res.send(zgrada);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const fetchZgradaById = async (req, res) => {
  try {
    const { id } = req.params;
    const filteredZgrada = await Zgrada.findById(id);
    res.send(filteredZgrada);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const addZgrada = async (req, res) => {
  try {
    await Zgrada.create(req.body);
    res.status(200).send("Nova zgrada uspesno dodata");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteZgradaById = async (req, res) => {
  try {
    const { id } = req.params;
    await Zgrada.deleteOne({ _id: id });
    res.status(200).send("Uspesno uklonjena zgrada");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const changeZgradaById = async (req, res) => {
  try {
    const { id } = req.params;
    await Zgrada.updateOne({ _id: id }, req.body);
    res.status(200).send("Uspesno napravljena promena");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const preDeleteMiddleware = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exists = await Upit.exists({ idZgrade: id });
    if (exists) {
      const error = new Error(
        "Nemoguce je brisati zgradu koji se koristi u upitu"
      );
      res.status(500).send(error.message);
    } else {
      next();
    }
  } catch (err) {
    next(err.message);
  }
};
