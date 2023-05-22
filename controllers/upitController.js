import Upit from "../models/Upit.js";

export const fetchUpiti = async (req, res) => {
  try {
    if (req.query.startDate && req.query.endDate) {
      const upiti = await Upit.find({
        createdAt: { $gte: req.query.startDate, $lte: req.query.endDate },
      });
      res.send(upiti);
    } else {
      const upiti = await Upit.find()
        .populate("idStatusa", "naziv")
        .populate("idZgrade", ["ulica", "broj"])
        .populate("idRadnika", ["ime", "prezime", "mailAdresa"])
        .select(["-__v"]);
      res.send(upiti);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const createNewUpit = async (req, res) => {
  try {
    await Upit.create(req.body);
    res.send("Uspesno dodat Upit");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const fetchUpitById = async (req, res) => {
  try {
    const { id } = req.params;
    const currentUpit = await Upit.findById(id)
      .populate("idStatusa", "naziv")
      .populate("idZgrade", ["ulica", "broj"])
      .populate("idRadnika", ["ime", "prezime", "mailAdresa"])
      .select(["-__v"]);
    res.send(currentUpit);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const editUpit = async (req, res) => {
  try {
    const { id } = req.params;
    await Upit.updateOne({ _id: id }, req.body);
    res.send("Uspesno promenjeni podaci o upitu");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteUpit = async (req, res) => {
  try {
    const { id } = req.params;
    await Upit.deleteOne({ _id: id });
    res.send("Uspesno obrisan upit");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
