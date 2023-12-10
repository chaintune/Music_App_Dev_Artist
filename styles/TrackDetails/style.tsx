import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
  padding: 2vw;
  border-radius: 1vw;
  color: white;
  width: 90vw;
  margin: auto;
`;

export const Form = styled.form`
  /* display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2vw; */
`;
export const InputGroupColumn = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2vw;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1vh;
  width: auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5vh;
  font-family: 'Aileron';
    font-size: 1.2vw;
    font-weight: 400;
    text-align: left;
    color: rgb(255,255,255,0.6);

`;

export const Input = styled.input`
  padding: 1vw;
  font-size: 1.4vw;
  border-radius: 0.8vw;
  border: none;
  font-family: 'Aileron';
    font-weight: 400;
  background: #26282C66;
  color: white;
`;

export const Select = styled.select`
  padding: 1vw;
  font-size: 1.4vw;
  border-radius: 0.8vw;
  border: none;
  font-family: 'Aileron';
    font-weight: 400;
  background: #26282C66;
  color: white;
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 1vw 2vw;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  font-size: 1.5vh;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 5vw;
  height: 2.5vh;
`;

export const Slider = styled.span`
  /* position: absolute; */
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 2.5vh;
  &:before {
    position: absolute;
    content: "";
    height: 2vh;
    width: 2vh;
    left: 0.25vh;
    bottom: 0.25vh;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider} {
    background-color: #2196F3;
  }
  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }
  &:checked + ${Slider}:before {
    transform: translateX(3vw);
  }
`;
