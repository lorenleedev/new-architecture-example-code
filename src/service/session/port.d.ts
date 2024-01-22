import {User} from "../../domain/user";


interface SessionService {
    getCurrentUser():User|undefined;
    signIn():Promise<User>;
    signOut():Promise<void>;
}
