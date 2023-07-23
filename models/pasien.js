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
    });
    return Pasien;
}
