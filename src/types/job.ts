export type Company = {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
};

export type Job = {
  id: string;
  type: string;
  title: string;
  location: string;
  description: string;
  salary: string;
  company: Company;
};

export type NewJob = {
  type: string;
  title: string;
  location: string;
  description: string;
  salary: string;
  company: Company;
};
