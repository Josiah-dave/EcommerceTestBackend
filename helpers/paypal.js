const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ab2UTOaF_qIAftXW_6NCiBFh1lYqk7vgnhpWqCPyjG9h-8lj7avDcVh1AU8012TaiQNjSWFCRJ2oq-d1",
  client_secret: "EDQZ7WEIapwpTBIBfZTPj2NZwrVzSLD7j7at-ketUmzxzI7SexdDimtDd-QsRr0qouFppBkReKaZeqeM",
});

module.exports = paypal;
