export default class CustomError {
  message;
  status;
  error_data;
  aditional_data;

  constructor(message, status, errorData, aditionalData) {
    this.status = status ? status : 500;
    this.message = message;
    this.error_data = errorData;
    this.aditional_data = aditionalData;
  }
}
