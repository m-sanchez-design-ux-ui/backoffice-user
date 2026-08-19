export interface LoginRequest {
  email: string;
  password: string;
  clientId: string | null;
  loginRedirectUrl: string | null;
  companyId: string | null;
}
