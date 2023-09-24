import React from "react";
import styled from "styled-components";

type Props = {
  type?: "text" | "password" | "email";
  labelText?: string;
  errorMessage?: string;
  name: string;
  onChange(value: string): void;
  value: any;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  input {
    border-radius: 10px;
    border: 3px solid #000;
    background: #fff;
    height: 40px;
  }
`;

export const InputComponent = ({
  type,
  labelText,
  errorMessage,
  onChange,
  value,
  ...props
}: Props) => {
  return (
    <Container>
      <label htmlFor={props.name}>{labelText}</label>
      <input value={value} onChange={({target}) =>  onChange(target?.value)} type={type as any} {...props} />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </Container>
  );
};
