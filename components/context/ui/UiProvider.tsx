import { FC, useReducer, ReactNode } from "react";
import { UiContext, uiReducer } from "./";

export interface UiState {
    isMenuOpen: boolean;
}

export interface UiProviderProps {
    children: ReactNode;
}

const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
}

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleSideMenu = () => {
        dispatch({ type: "[UI] -ToggleMenu" });
    }
    
    return (
        <UiContext.Provider value={{
            ...state,
            toggleSideMenu,
        }}>
            {children}
        </UiContext.Provider>
    );
};
