const { body, validationResult } = require("express-validator");
/**************************************** */
const fromValidator = () => {
  return [body("from").exists()];
};
/**************************************** */
const toValidator = () => {
  return [body("from").exists()];
};
/**************************************** */
const amountValidator = () => {
  return [body("amount").exists()];
};
/**************************************** */
module.exports = {
  fromValidator,
  toValidator,
  amountValidator,
};
/**************************************** */
