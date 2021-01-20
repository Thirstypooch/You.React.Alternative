import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc  Create new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if(orderItems && orderItems === 0) {
    res.status(400)
    throw new Error('No hay items para ordenar')
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
    })

    const createOrder = await order.save()

    res.status(201).json(createOrder)
  }
})

// @desc  Get order by ID
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email')

  if(order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('La order no fué hallada')
  }
})

export { addOrderItems, getOrderById }