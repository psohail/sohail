import styled from "styled-components";

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9rem;
`;

function Logo() {
  return (
    <LogoBox>
      <img src="logo.png" alt="Logo" />
    </LogoBox>
  );
}

export default Logo;
