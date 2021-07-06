const transporter = process.env.TRANSPORTER || 'TCP';

const brokerConfig = {
  transporter,
  errorHandler(err: any, info: any) {
    console.log("Error:", err, info);
  }
};

export default brokerConfig;
