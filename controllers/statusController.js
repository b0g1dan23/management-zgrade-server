import Status from "../models/Status.js";
import Upit from "../models/Upit.js";

export const fetchAllStatuses = async (_, res) => {
  try {
    const statuses = await Status.find();
    res.send(statuses);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const createNewStatus = async (req, res) => {
  try {
    await Status.create(req.body);
    res.send("Uspesno napravljen novi status");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const fetchStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const currentStatus = await Status.findById(id);
    res.send(currentStatus);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const editStatus = async (req, res) => {
  try {
    const { id } = req.params;
    await Status.updateOne({ _id: id }, req.body);
    res.send("Uspesno odradjena promena");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteStatus = async (req, res) => {
  try {
    const { id } = req.params;
    await Status.deleteOne({ _id: id });
    res.send("Uspesno odradjeno brisanje");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const preDeleteMiddleware = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exists = await Upit.exists({ idStatusa: id });
    if (exists) {
      const error = new Error(
        "Nemoguce je brisati status koji se koristi u upitu"
      );
      res.status(500).send(error.message);
    } else {
      next();
    }
  } catch (err) {
    next(err.message);
  }
};
