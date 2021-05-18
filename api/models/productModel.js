const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:{
        type:String ,required :true,
    },
    category:{
        type:String
    },
    price:{
        type:Number,
    },
    color:{
        type:String
    },
    quantity:{
        type:Number,
        default:1,
    },
    description:{
        type:String
    },
    size:{
        type:String
    },
    image:{

        type:String
    },

});

module.exports = mongoose.model('Product', productSchema);