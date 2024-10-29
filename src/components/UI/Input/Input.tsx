import { Input, ErrorMessage } from '../Input/Input.style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    errorText?: string; 
    isError?: boolean;  
}

export const InputElem = ({ errorText, isError = false, ...props }: InputProps) => {
    return (
        <div>
            <Input {...props} $iserror={isError} /> 
            {isError && errorText && <ErrorMessage>{errorText}</ErrorMessage>}
            
        </div>
    );
};
