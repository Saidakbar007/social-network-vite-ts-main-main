import { SButton } from "./Button.style"; 

interface TButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isPrimary: boolean;
}

export const Button = ({ buttonText, isPrimary, ...props }: TButtonProps) => {
  return (
    <SButton isPrimary={isPrimary} {...props}>
      {buttonText}
    </SButton>
  );
};
