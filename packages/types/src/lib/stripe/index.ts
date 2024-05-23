import Stripe from "stripe";
import { PackageType } from "../events/bundles";

export interface LessonBundle {
  amtSessions: number;
  title: PackageType;
  discount: string;
  price: string;
  priceID: {
    test: Stripe.Checkout.SessionCreateParams.LineItem;
    live: Stripe.Checkout.SessionCreateParams.LineItem;
  };
}

export interface Price {
  name: "SVS Session" | "Regular Session" | "Open Jar Booking Fee";
  priceID: {
    live: Stripe.Checkout.SessionCreateParams.LineItem;
    test: Stripe.Checkout.SessionCreateParams.LineItem;
  };
}
