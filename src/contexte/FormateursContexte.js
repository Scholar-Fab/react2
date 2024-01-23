import { createContext, useState } from "react";
import dataFormateurs from "../data/dataFormateurs";

export const FormateursContexte = createContext();

export const FormateursContexteProvider = ({ children }) => {
    const [tabFormateurs, setTabFormateurs] = useState(dataFormateurs);

    return (
        <FormateursContexte.Provider value={{ tabFormateurs, setTabFormateurs }}>
            {children}
        </FormateursContexte.Provider>
    );
};