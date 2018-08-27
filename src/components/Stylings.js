import styled from 'styled-components';

export const StyledSearch = styled.input`
    display: block;
    width: 100%;
    max-width: 270px;
    height: 40px;
    margin: 20px auto;
    border: 0;
    border-bottom: solid 1px #bbb;
    padding: 0;
    padding-left: 10px;
    font-size: 20px;
    color: #333;
    transition: border 200ms;

    &::placeholder {
        color: #aaa;
        transition: color 200ms;
    }

    &:focus {
        outline: none;
        border-bottom: solid 1px #333;
    }

    &:focus::placeholder {
        color: transparent;
    }
`

export const StyledPageTitle = styled.div`
    display: inline-block;
    height: 100%;
    line-height: 80px;
    font-size: 24px;
    color: #333;
`

export const StyledButton = styled.div`
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 120px;
    border: solid 1px #333;
    border-radius: 3px;
    padding: 10px;
    font-size: 16px;
    color: #333;
    text-align: center;
    user-select: none;
    cursor: pointer;
    transition: background 200ms, color 200ms;
    
    &:hover {
        background: #008000;
        color: #fff;
    }

    &:active {
        background: #007000;
    }
`

export const StyledView = styled.div`
    text-align: center;
    white-space: normal;
`
