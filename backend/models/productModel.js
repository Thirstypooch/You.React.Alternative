import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true},
  rating: { type: Number, required: true},
  comment: { type: String, required: true},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
},{
  timestamps: true
})

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  aspect: {
    type: String,
  },
  description: {
    type: String,
    required: true
  },
  fit: {
    type: String,
  },
  use: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  allIngredients: {
    type: String,
  },
  aroma: {
    type: String,
  },
  warning: {
    type: String,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  countInStock: {
    type: Number,
    default: 0,
    required: true
  }
}, {
  timestamps: true
})  

const Product = mongoose.model('Product', productSchema)

export default Product