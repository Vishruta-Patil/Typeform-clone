import { typeFormReducer } from "reducer/typeformReducer";
import  { createContext, useContext, useReducer } from "react";

const TypeFormContext = createContext();
const useTypeForm = () => useContext(TypeFormContext);

const initialState = {
    questionNo: 0,
    response: {
        firstName: "",
        lastName: "",
        industry: "",
        role: [],
        goal: [],
        email: "",
        phoneNO: "",
        phoneExtension: 91
    },
    errorMessage: ""
}

const TypeFormProvider = ({children}) => {
    const [typeFormState, typeFormDispatch] = useReducer(typeFormReducer, initialState);
    return (
        <TypeFormContext.Provider value={{typeFormState, typeFormDispatch}}>
            {children}
        </TypeFormContext.Provider>
    )
}

export {useTypeForm, TypeFormProvider}