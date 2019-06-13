import styled from "styled-components";

const EmployeeWrapperStyle = styled.div`
  margin: 20px;
  h1 {
    color: red;
  }

  .innerDiv {
    background-color: black;
    width: 240px;
    height: 220px;
  }
`;

const InnerDiv = styled.div`
  background-color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
`;

export { EmployeeWrapperStyle, InnerDiv };
