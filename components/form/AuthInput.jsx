import React from 'react'
import styled from "styled-components";

const AuthInput = ({ place,label, withIcon, image, type, onChange, name, value, errors,classs }) => {
  return (
    <InputLabelCon className={classs}>
      <Label>{label}</Label>
      <InputCon>
        {withIcon && <img src={image} alt="img" />}
        <input type={type} placeholder={place} onChange={onChange} name={name} value={value} />
      </InputCon>
      {errors?.inputName === name && errors?.isError && <ErrorMessage>{errors.message}</ErrorMessage>}
    </InputLabelCon>

  )
}
const InputLabelCon = styled.div`
    width: 100%;
    margin-bottom:20px;
`;

const Label = styled.p`
  color: var(--grey-700, #101113);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: capitalize;
  margin-bottom:8px;
`;

const ErrorMessage = styled.div` 
    color: red;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top:5px;
`;

const InputCon = styled.div`
    width: 100%;
    height:47px;
    display:flex; 
    align-items:center;
    border-radius: 12px;
    border: 1px solid var(--grey-200, #B6B7BB);
    background: #FFF; 
    padding: 12px 16px;
    img{
        margin-right:10px;
        width:25px;
        height:25px;
    }
    input{
      width:100%;
      background:none;
      border:none;
      outline:none; 
      color: var(--pure-black, #000);
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 100% */
      &::placeholder {
        color: var(--grey-400, #6B6C74); 
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
      }

    }
`;

export default AuthInput