const AWS = require("aws-sdk");
const bcrypt = require("bcryptjs");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { email, password } = body;

  if (!email || !password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Email aur password required hai" }),
    };
  }

  const params = {
    TableName: "Users",
    Key: {
      email,
    },
  };

  try {
    const data = await docClient.get(params).promise();
    if (!data.Item) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "User not found" }),
      };
    }

    const isValid = await bcrypt.compare(password, data.Item.password);
    if (!isValid) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Incorrect password" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Login successful" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Login error", error: err }),
    };
  }
};
