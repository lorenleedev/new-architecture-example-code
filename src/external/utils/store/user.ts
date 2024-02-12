import {create} from "zustand";
import {User} from "../../../internal/domain/user/domain/user.entity.ts"; // TODO: 엔티티와 동일한 타입을 사용하는게 맞을까?

interface UserState {
  user: User;
  setUser:(user:User)=>void;
}

const useUserStore = create<UserState>()((set) => ({
  user: {
    id: '123',
    email: 'eee@ddd.com'
  },
  setUser: (user:User) => set(() => ({user}))
}))

export default useUserStore;

