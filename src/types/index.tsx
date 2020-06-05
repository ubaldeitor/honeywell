export interface IStudent {
    idStudent: number;
    name: string;
    surname: string;
    phone: number;
    email: string;
    address: string;
    zipCode: string;
    gpa: number;
}

export interface StudentStore {
    students: Array<IStudent>;
    activeStudent: IStudent;
}