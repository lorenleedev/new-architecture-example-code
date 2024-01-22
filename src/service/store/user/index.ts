import {create} from "zustand";
import {User} from "../../../domain/user";



interface SessionState {
    user: undefined | User;
    updateUser:(user:User)=>void;
}

const useSessionStore = create<SessionState>()((set) => ({
    user:undefined,
    updateUser: (user:User) => set(() => ({user}))
}))

export default useSessionStore;

