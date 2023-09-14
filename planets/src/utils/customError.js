export class CustomError {
  message;
  status;
  data;

  constructor(message, status, data) {
    this.status = status ? status : 500;
    this.message = message;
    this.data = data;
  }
}
