import styled from "styled-components";

interface type {
  placeholder: string;
  type: string;
  onChange: (e: any) => void;
}

export const Input = ({ placeholder, type, onChange }: type) => {
  return (
    <>
      <Wrapper
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      ></Wrapper>
    </>
  );
};

const Wrapper = styled.input`
  width: 370px;
  height: 52px;
  border-radius: 15px;
  font-size: 15px;
  border: 1px solid rgb(213, 189, 175);
  margin: 10px;
  padding: 0px 10px;

  &:focus {
    outline: none;
  }
`;
