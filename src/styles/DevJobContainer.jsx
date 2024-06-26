import styled from "styled-components";

const StyledDevJobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  max-width: 1460px;
  margin: 0 auto;
  padding: 0 2.4rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 6rem;
  }
`;

const LayOut = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  margin: -50px auto 0 auto;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  @media (min-width: 768px) {
    margin: -60px auto 0 auto;
  }
`;

const StyledDetailsContainer = styled(StyledDevJobContainer)`
  max-width: 730px;
  margin-top: -5rem;
`;

export { StyledDetailsContainer, StyledDevJobContainer, LayOut };
