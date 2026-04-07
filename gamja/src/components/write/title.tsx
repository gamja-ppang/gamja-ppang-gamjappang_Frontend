import styled from "styled-components";

interface Type {
  title: string;
  setTitle: (val: string) => void;
}

const Title = ({ title, setTitle }: Type) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <Wrap
        placeholder="제목을 작성하세요"
        onChange={onChange}
        value={title}
      ></Wrap>
    </>
  );
};

export default Title;

const Wrap = styled.input`
  font-size: 40px;
  font-weight: 700;
  width: 937px;
  border: none;
  display: flex;
  justify-content: center;
  margin-left: 93px;

  &:focus {
    outline: none;
  }
`;
