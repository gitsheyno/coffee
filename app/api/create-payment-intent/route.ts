// app/api/create-payment-intent/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Product } from "../../shop/types/index";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-03-01", // Use the latest API version
});

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    // Calculate order amount based on items
    const calculateOrderAmount = (
      items: (Product & { quantity: number })[]
    ) => {
      const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const shipping = 5.99;
      const tax = subtotal * 0.07; // 7% tax example
      return Math.round((subtotal + shipping + tax) * 100); // Convert to cents for Stripe
    };

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        order_items: JSON.stringify(
          items.map((item) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
          }))
        ),
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
