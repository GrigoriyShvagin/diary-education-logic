export interface User {
  email: string;
  username: string;
  full_name: string;
  is_active: boolean;
  role: "admin" | "user";
}

export interface MeResponse {
  email: string;
  username: string;
  full_name: string;
  is_active: boolean;
  role: "admin" | "user";
}

export interface ApiResponse<T> {
  response: T;
}

export type UserMeApiResponse = ApiResponse<MeResponse>;
