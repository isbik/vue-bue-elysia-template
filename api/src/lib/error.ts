interface HttpErrorParams {
  message: string;
  status?: number;
  code?: string;
  details?: any;
}

class AppHttpError extends Error {
  constructor(private params: HttpErrorParams) {
    super(params.message);
    this.name = "HttpError";
  }

  get status(): number {
    return this.params.status ?? 500;
  }

  get code(): string | undefined {
    return this.params.code;
  }

  get details(): any {
    return this.params.details;
  }

  toResponse() {
    const response: any = {
      message: this.message,
      code: this.code,
    };

    if (this.code) {
      response.code = this.code;
    }

    if (this.details) {
      response.details = this.details;
    }

    return Response.json(response, {
      status: this.status,
    });
  }
}

export { AppHttpError as AppHttpError };
