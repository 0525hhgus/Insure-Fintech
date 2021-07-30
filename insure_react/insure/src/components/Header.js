import styled from "styled-components";

const HeaderBlock = styled.div`
  padding: 20px;
  margin: 20px;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <>
      <HeaderBlock>{title}</HeaderBlock>
    </>
  );
};

export default Header;
