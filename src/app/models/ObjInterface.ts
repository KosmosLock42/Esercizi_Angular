//Enums




export enum Role {
    role1 = "staff",
    role2 = "student",
    role3 = "manager",
    role4 = "admin",
  }
  
  export enum Gender {
    gender1 = "male",
    gender2 = "female",
    gender3 = "other",
  }
  
  //Interface
  
  interface Place {
    city: string;
    street: string;
    postalCode: string;
  }
  
  interface Company {
    id?: number;
    name?: string;
    description?: string;
    location?: Place;
  };
  
  export interface UserInter {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Place;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies?: Company[];
    gender: Gender;
  }
  

  