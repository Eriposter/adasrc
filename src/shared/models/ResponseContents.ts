interface Status {
    status: string;
    color: string;
  }
  
  export interface ResponseContent<T> {
    total: number;
    items: T;
    statuses: Status[];
    _links: { self: { href: string; method: string } };
  }
  