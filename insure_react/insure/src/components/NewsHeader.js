import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 50px  
`

const NewsHeader = ({title}) => {
    return (<>
      <HeaderBlock>{title}</HeaderBlock>
      </>
    );
};

export default NewsHeader;