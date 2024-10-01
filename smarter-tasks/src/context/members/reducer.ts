interface Member{
    id: number;
    name: string;
    email:string;
}
// interface Action {
//     type: string;
//     payload?: any;
//   }
export interface MembersState {
    members: Member[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  export const initialState: MembersState = {
    members: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
  };
  export type MembersActions = 
  | { type: 'FETCH_PROJECTS_REQUEST' }
  | { type: 'FETCH_PROJECTS_SUCCESS'; payload: Member[] }
  | { type: 'FETCH_PROJECTS_FAILURE'; payload: string }
  | { type: 'ADD_MEMBER_SUCCESS'; payload: Member }
export const reducer = (state: MembersState=initialState, action: MembersActions): MembersState => {
    // >>> Dialogue one: In switch statement, we will check the action type and return corresponsing state, like we were doing in the if-statements.
    switch (action.type) {
      case "FETCH_PROJECTS_REQUEST":
        return {
          ...state,
          isLoading: true
        };   
      case "FETCH_PROJECTS_SUCCESS":
        return {
          ...state,
          isLoading: false,
          members: action.payload,
        };      
      case "FETCH_PROJECTS_FAILURE":
        return {
          ...state,
          isLoading: true,
          isError: true, 
          errorMessage: action.payload
        }; 
        case 'ADD_MEMBER_SUCCESS':
            // Here I'll insert new new project object, which is coming in this 
            // `action.payload`, to the `projects` array present in state.
            return { ...state, members: [...state.members, action.payload] };            
      default:
        return state;
    }
  }