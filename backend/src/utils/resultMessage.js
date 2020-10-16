const resultSuccessMessage = (status, message) => {
  const sendMessage = {
    statusCode: status,
    message,
  };

  return sendMessage;
};

export default resultSuccessMessage;
