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
        jk: {
            type: Sequelize.STRING,
        },
        status_kawin: {
            type: Sequelize.STRING,
        },
        tgl_lahir: {
            type: Sequelize.STRING,
        },
        alamat: {
            type: Sequelize.TEXT,
        },
        status_prolanis: {
            type: Sequelize.STRING,
        },
        status_prb: {
            type: Sequelize.STRING,
        },
        cara_bayar: {
            type: Sequelize.STRING,
        },
        no_bpjs: {
            type: Sequelize.STRING,
        },
    });
    return Pasien;
}
