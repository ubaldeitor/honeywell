import { IStudent } from '../types';
import * as constants from '../constants';
//define action interfaces
export interface AddStudentAction {
    type: constants.ADD_STUDENT;
    student: IStudent;
}
export interface DeleteStudentAction {
    type: constants.DELETE_STUDENT;
    id: string;
}
export interface GetStudentAction {
    type: constants.GET_STUDENT;
    id: string;
}
//define actions
export function addStudent(newStudent: IStudent): AddStudentAction {
    return {
        type: constants.ADD_STUDENT,
        student: newStudent
    }
}
export function deleteStudent(idDelete: string): DeleteStudentAction {
    return {
        type: constants.DELETE_STUDENT,
        id: idDelete
    }
}

export function getStudent(idStudent: string): GetStudentAction {
    return {
        type: constants.GET_STUDENT,
        id: idStudent
    }
}

export type StudentActionType = AddStudentAction | DeleteStudentAction | GetStudentAction;