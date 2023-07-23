module.exports = (sequelize, Sequelize) => {
    const Pasien = sequelize.define('pasiens', {
        no_rm: {
            type: Sequelize.STRING,
        },
        nama: {
            type: Sequelize.STRING,
        },
        no_ktp: {
            type: Sequelize.STRING,
        },
        tgl_lahir: {
            type: Sequelize.STRING,
        },
        alamat: {
            type: Sequelize.TEXT,
        },
    });
    return Pasien;
}
