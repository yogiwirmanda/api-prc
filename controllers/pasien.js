const db = require("../models");
const Pasien = db.pasien;
const Op = db.Sequelize.Op;

// CREATE: untuk enambahkan data kedalam tabel book
exports.create = (req, res) => {
  // validate request
  if (!req.body.page) {
    return res.status(400).send({
      message: "Page can not be empty",
    });
  }

  // daya yang didapatkan dari inputan oleh pengguna
  const book = {
    page: req.body.page,
    limit: req.body.limit,
  };

  // proses menyimpan kedalam database
  Pasien.create(book)
    .then((data) => {
      res.json({
        message: "Book created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the Pasien.",
        data: null,
      });
    });
};

exports.findAll = (req, res) => {
  const { start, length, search, draw } = req.query;
  var condition = search.value != '' ? {
    nama: { [Op.like]: `%${search.value}%` },
  } : null;
  const { limit, offset } = getPagination(start, length);
  Pasien.findAndCountAll({
      where: condition,
      limit,
      offset,
      attributes: ["id", "nama",'no_rm','no_ktp','tgl_lahir','alamat'],
    })
      .then((data) => {
        const response = getPagingData(draw, data, start, limit);
        res.send(response);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  };

  const getPagination = (page, size) => {
    const limit = size ? +size : 1;
    const offset = parseInt(page);
    return { limit, offset };
  };

  const getPagingData = (draw, dataRow, page, limit) => {
    const { count: recordsTotal, rows: data } = dataRow;
    const totalPages = Math.ceil(recordsTotal / limit);
    const recordsFiltered = recordsTotal;
    return { recordsTotal, recordsFiltered, data, totalPages, draw };
  };

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params
exports.update = (req, res) => {
  const id = req.params.id;
  Pasien.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Book updated successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot update book with id=${id}. Maybe book was not found or req.body is empty!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while updating the Pasien.",
        data: null,
      });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
  const id = req.params.id;
  Pasien.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Book deleted successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot delete book with id=${id}. Maybe book was not found!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while deleting the Pasien.",
        data: null,
      });
    });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
  Pasien.findByPk(req.params.id)
    .then((book) => {
      res.json({
        message: "Book retrieved successfully.",
        data: book,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving Pasien.",
        data: null,
      });
    });
};
