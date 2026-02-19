import Subscriber from "../model/subscriber.model.js";
import { sendMail } from "../utils/sendMail.js";

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Already subscribed" });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    await sendMail(email);

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
