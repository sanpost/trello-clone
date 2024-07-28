"use client";   

import { useFormState } from "react-dom";
import { create } from "@/actions/create-board";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";


export const Form = () => {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(create, initialState);

    return (
        <form action={dispatch}>
            <div className="flex flex-col space-y-2 mb-2">
                <FormInput errors={state?.errors} />
                <FormButton />
            </div>
        </form>
    );
};

