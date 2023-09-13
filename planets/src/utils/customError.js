export class CustomError {
  message;
  status;
  data;

  constructor(message, status, data) {
    this.message = message;
    this.data = data;
    this.status = status ? status : 500;
  }
}
