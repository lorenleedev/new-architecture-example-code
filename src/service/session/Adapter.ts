import {SessionService} from "./port";
import useSessionStore from "../store/user";






export const useSessionService= ():SessionService => {
    const state =useSessionStore()

    const getCurrentUser = () => {
        return state.user
    }

    const signIn = async () => {
        //API CALL
        const res = {id:'mocked', email:'mocked'}

        state.updateUser(res)

        return res;
    }

    const signOut = async () => {
        //API CALL
        state.updateUser({id:'null', email:'null'})
    }

    return {
        getCurrentUser,
        signIn,
        signOut
    }
}
