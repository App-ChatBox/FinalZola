const { config } = require("dotenv");

require("dotenv").config();
const accountSid = process.env.ACOUNTSID_TWILIO;
const authToken = process.env.TOKEN_TWILIO;
const serviceId = process.env.SERVICESID_TWILIO;
const client = require("twilio")(accountSid, authToken);
/**
 * method to send smst verify otp
 * @param {*} req
 * @param {*} res
 * @param phone
 * @param messageSuccess
 */

const sendSmsOTP = async (phone) => {
  try {
    const verification = await client.verify.v2
      .services(serviceId)
      .verifications.create({ to: `+84${phone}`, channel: "sms" })
    if (verification) return true;
    else return false;
  } catch (error) {
    return false;
  }
};

const verifyOtp = async (phone, code) => {
  try {
    const verification_check = await client.verify.v2
      .services(serviceId)
      .verificationChecks
      .create({to:`+84${phone}`, code:code})
    if (verification_check.valid) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
module.exports = {
  sendSmsOTP: sendSmsOTP,
  verifOtp: verifyOtp,
};