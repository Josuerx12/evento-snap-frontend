export type UserOutput = {
  id: string;
  name: string;
  email: string;
  birthdate?: Date;
  accountType: "personal" | "company";
  document?: string;
  personalInfo?: PersonalInfoOutput | null;
  companyInfo?: CompanyInfoOutput | null;
  createdAt: Date;
  updatedAt: Date;
};

export type PersonalInfoOutput = {
  id: string;
  cpf: string;
};

export type CompanyInfoOutput = {
  id: string;
  cnpj: string;
  companyName?: string;
};
