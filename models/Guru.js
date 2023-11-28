const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    NIP: {
        type: 'string',
        required: [true, 'Silahkan masukan nik anda'],
        unique: true
    },
    NAMA: {
        type: 'string',
        required: [true, 'Silahkan masukan nama anda'],
    },
    JENIS_KELAMIN: {
        type: 'string',
        required: [true, 'Silahkan masukan alamat anda']

    },
    AGAMA: {
        type: 'string',
        required: [true, 'Silahkan masukan no telp anda']

    },
    ALAMAT: {
        type: 'string',
        required: [true, 'Silahkan masukan pendidikan terakhir anda']
    },
    NO_TELP: {
        type: 'string',
        required: [true, 'Silahkan masukan jenis kelamin anda']

    },
    PENDIDIKAN_TERAKHIR: {
        type: 'string',
        required: [true, 'Silahkan masukan mapel yang anda ampu']

    }
})

module.exports = mongoose.model('Listteacher', UserSchema)