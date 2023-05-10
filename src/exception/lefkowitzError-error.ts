export class LefkowitzError extends Error {
  constructor(message: string, private context: string) {
    super(message);
    this.name = 'ValidationError';
    Object.setPrototypeOf(this, LefkowitzError.prototype);
  }

  getErrorMessage() {
    return `Something went wrong:  ${this.message}  , ${this.context}`;
  }
}
