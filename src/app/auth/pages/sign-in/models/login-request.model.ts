export interface LoginRequest {
  email: string;
  password: string;
  gRecaptchaResponse: string | null;
  clientId: string | null;
  loginRedirectUrl: string| null;
  companyId: string| null;
}
