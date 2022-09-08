import mongoose from 'mongoose'

function offAge(Date) {
    return
}
const peopleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cpf: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 11
    },
    birthDate: {
        type: Date,
        validate: birthDate => {
            let now = new Date()
            let age = Math.floor((now - birthDate) / 31536000000)
            if (age > 17) {
                return true
            } else {
                return false
            }
        },
        required: true
    },
    email: {
        type: String,
        validate: /^[0-9]*$/,
        required: true
    },
    password: { type: String, required: true, minlength: 6 },
    address: { type: String, required: true },
    number: { type: String, required: true },
    complement: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: {
        type: String,
        validate: /^\d{5}(?:[-\s]\d{4})?$/,
        required: true,
        minlength: 8,
        maxlength: 8 | 9
    }
}, {
    versionKey: false
})
const peoples = mongoose.model('peoples', peopleSchema)
export default peoples
