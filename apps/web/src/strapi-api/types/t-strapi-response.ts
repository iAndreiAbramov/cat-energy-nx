export type TStrapiResponse<T> = {
  id: number;
  data: {
    id: number | string;
    attributes: T;
  }[];
  meta: Record<string, unknown>;
};
