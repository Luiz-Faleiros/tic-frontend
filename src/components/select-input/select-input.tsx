import React from "react";
import styled from "styled-components";

interface SelectComponentProps {
  value: string;
  labelText: string;
  name: string;
  options: { value: string; label: string; styleclass: string;}[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 50%;

  label {
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  select {
    border-radius: 5px;
    padding: 0 15px;
    appearance: menulist-button;
    border: 2px solid #000;
    background: #fff;
    height: 40px;
    outline: none;
  }
`;

const SelectComponent: React.FC<SelectComponentProps> = ({
  value,
  labelText,
  name,
  options,
  onChange,
}) => {
  return (
    <Container>
      <label>{labelText}</label>
      <select className="outline-none" name={name} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value} className={option.styleclass}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default SelectComponent;
