
declare namespace Express {
  export interface Request {
    user?: {
      id: string;
      email?: string;
      role?: Role | null;
      company?: Company | null;
      profile?: Profile | null;
    };
  }
}
