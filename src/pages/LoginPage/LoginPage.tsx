import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../../components/UI/Typography/Heading";
import { Container } from "../../components/UI/Container/Container.style";
import { InputElem } from "../../components/UI/Input/Input"; 
import { SButton } from "../../components/UI/Button/Button.style";
import { RegistrationInfo } from "../../components/UI/Registrationinfo/Registrationinfo.tsx";
import { StyleLoginPage } from "./LoginPage.style";
import "./LoginPage.scss";
import { useForm, Controller } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const loginFormScheme = yup.object({
  userEmail: yup.string().required("обязательное поле").email("введите правильный email"),
  userPassword: yup.string().required("обязательное поле").min(4, "Пароль должен содержать не менее 4 символов"),
});

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onLoginSubmit = (data: ILoginForm) => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const user = existingUsers.find(
      (user: ILoginForm) =>
        user.userEmail === data.userEmail && user.userPassword === data.userPassword
    );

    if (user) {
      navigate("/main"); // перенаправляем на главную страницу
    } else {
      alert("Неправильный email или пароль!");
    }
  };

  return (
    <Container>
      <StyleLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)} action="#">
          <Controller
            name="userEmail" 
            control={control}
            render={({ field }) => (
              <InputElem
                type="text"
                placeholder="Ваш email..."
                errorText={errors.userEmail?.message}
                isError={!!errors.userEmail} 
                {...field}
              />
            )}
          />
          <Controller
            name="userPassword" 
            control={control}
            render={({ field }) => (
              <InputElem
                type="password"
                placeholder="Пароль"
                errorText={errors.userPassword?.message} 
                isError={!!errors.userPassword} 
                {...field}
              />
            )}
          />
          <SButton type="submit" isPrimary={true}>
            Войти
          </SButton>
        </form>
        <Link to="/reset-password">
          <span className="link-text">Забыли пароль?</span>
        </Link>
        <RegistrationInfo />
      </StyleLoginPage>
    </Container>
  );
};
