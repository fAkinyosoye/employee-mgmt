import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import logoImg from "../../assets/images/uploadedwebclientlogo.jpg";
import {
  LoginRequest,
  useLoginMutation,
} from "../../redux/services/auth-services";
import { Button, Header1, Input, Label, Subtitle } from "../atoms";
import { decodeLogin } from "../utilities/helper";
import { dashboard } from "../utilities/routerPaths";

const Login = () => {
  const [login] = useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginRequest>();

  const navigate = useNavigate();

  const submit = async (data: LoginRequest): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await login(data).unwrap();
      if (
        res?.statusCode === 200 &&
        (res?.data?.personStaffRole === "Internal Control" ||
          res?.data?.personStaffRole === "Operational Excellence")
      ) {
        decodeLogin(res);
        localStorage.setItem("personEmail", res?.data?.personEmail); // change this to employeeID or token later
        setIsLoading(false);
        navigate(dashboard);
      }
    } catch (error: any) {
      toast.error(
        error?.data?.responseMessage ===
          "Invalid input parameter.Main error -- Invalid username or password."
          ? "Invalid username or password."
          : error?.data?.responseMessage
      );
      // console.log(error);
      setIsLoading(false);
    }
  };

  return !localStorage.getItem("personEmail") ? (
    <Wrapper>
      <form
        // onSubmit={(e: any) => submitHandler(e)}
        onSubmit={handleSubmit(submit)}
        className="mx-auto my-auto w-4/5 lg:w-2/5 flex flex-col bg-white p-5 lg:p-12 shadow-md rounded-lg"
      >
        <img
          src={logoImg}
          alt="logoImg"
          width="270px"
          height="54px"
          className="mx-auto mb-5"
        />
        <Header1 className="text-center" mt="2rem" mb="0">
          Login
        </Header1>
        <Subtitle className="text-center">
          Sign in to the Employee Management Portal
        </Subtitle>

        <Label>Username</Label>
        <Input
          className="mb-2"
          type="username"
          placeholder="username"
          register={{
            ...register("emailOrUserName", {
              required: "This field is required",
            }),
          }}
          error={errors?.emailOrUserName?.message}
        />

        <Label>Password</Label>
        <Input
          type="password"
          placeholder="********"
          register={{
            ...register("password", {
              required: "This field is required",
              minLength: 8,
            }),
          }}
          error={
            errors?.password?.type === "minLength"
              ? "Minimum of 8 characters"
              : errors?.password?.message
          }
        />

        <Button
          isLoading={isLoading}
          text="Submit"
          type="submit"
          className="mt-2 py-2"
        />
      </form>
    </Wrapper>
  ) : (
    <Navigate to={dashboard} replace={true} />
  );
};

const Wrapper = styled.section`
  background-color: #09dc84;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export { Login };
