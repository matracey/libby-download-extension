export class Response {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  static handleResponse(response: Response) {
    if (response?.message != null) {
      console.info(`Received response in pop-up: ${response.message}`);
    }
  }
}
