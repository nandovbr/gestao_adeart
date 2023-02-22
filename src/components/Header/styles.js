import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: linear-gradient(45deg, #37620C, #68B81A, #87E12E, #68B81A, #37620C);
  background-size: 400% 400%;
  animation: gradient 12s ease infinite;
  font-family: 'Candara', sans-serif;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;

export const Header = styled.h1``;

export const Title = styled.div`
  padding-top: 20px;
  color: #fff;
`;
