import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        userReference: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },

        orderItems: [
            {
                productReference: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product',
                },
                quantity: { type: Number, required: true },
                bookingDates: {
                    startDate: { type: Date, required: true, default: Date.now() },
                    endDate: { type: Date, required: true, default: Date.now() }
                },
            },
        ],

        shippingAddress: {
            address: { type: String, required: true },
        },

        pricingDetails : {

            totalRentalCharges: {
                type: Number,
                required: true,
                default: 0.0,
            },
    
            totalRefundableDeposit: {
                type: Number,
                required: true,
                default: 0.0,
            },
    
            totalDeliveryPickupCharges: {
                type: Number,
                required: true,
                default: 0.0,
            },
    
            totalServiceTax: {
                type: Number,
                required: true,
                default: 0.0,
            },
    
            grandTotal: {
                type: Number,
                required: true,
                default: 0.0,
            },    
        },

        paymentOutcome: {
            type: { type: String, required: true },
            reference: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'PaypalPaymentOutcome',
            },
        },

        paymentDate: {
            type: Date,
        },

        status: { type: String, required: true },

    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model('Order', orderSchema)

export {Order}
