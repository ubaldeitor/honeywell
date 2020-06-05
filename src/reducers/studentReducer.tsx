import { StudentStore } from "../types";
import { StudentActionType } from "../actions";
import { ADD_STUDENT, DELETE_STUDENT, GET_STUDENT } from "../constants";

const initialState: StudentStore = {
  students: [],
  activeStudent: {
    idStudent: 0,
    name: '',
    surname: '',
    address: '',
    phone: 0,
    email: '',
    gpa: 0,
    zipCode: ''
  }
}
export function studentReducer(state = initialState, action: StudentActionType): StudentStore {
  console.log('Excet reducer', action);
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.student]
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          student => student.email !== action.id
        )
      };
    case GET_STUDENT:
      return {
        ...state,
        activeStudent: state.students.find(
          item => item.email === action.id
        )!
      };
    default:
      return state;
  }
}