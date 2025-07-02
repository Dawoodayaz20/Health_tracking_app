import { createContext, useContext } from "react"
import { ID, Models } from "react-native-appwrite";
import { account } from "./appwrite";

type AuthContextType = {
    // user: Models.User<Models.Preferences> | null;
    signUp: (email: string, password: string) => Promise<string | null>;
    signIn: (email: string, password: string) => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: {children: React.ReactNode}) {
  
    const signUp = async (email: string, password: string): Promise<string | null> => {
        try {
            await account.create(ID.unique(), email, password);
            return await signIn(email, password);
        } catch (error) {
            if (error instanceof Error) {
                return error.message;
            }
            return "An error occured during signIp";
        }
    }

    const signIn = async (email: string, password: string) => {
        try{
        await account.createEmailPasswordSession(email, password)
        return null;
    } catch (error){
        if (error instanceof Error){
            return error.message
        }

        return "An error occured during signup"
    }
    }


    return (
        <AuthContext.Provider value={{signUp, signIn }}>
            {children}
        </AuthContext.Provider>
);
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("UseAuth must be inside of the Auth Provider")
    }

    return context
}