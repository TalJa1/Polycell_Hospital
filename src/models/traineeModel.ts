export interface Trainee {
  id: string;
  name: string;
  code: string;
  phone: string;
  birthdate: string;
  profile: Profile;
  title: string;
  email: string;
}


export interface Profile {
  id: string
  status: string
}