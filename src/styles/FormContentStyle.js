import styled from 'styled-components';

export const Content = styled.div`
    font-family: 'IBM Plex Sans', sans-serif;
    height: 70%;
    overflow-y: scroll;
    padding: 1.5rem;
`;

export const MessageContent = styled.div`
    display: flex;
    justify-content: left;
    margin-top: .5rem;
    
`;

export const PicMessage = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Message = styled.form`
    background-color: #FFD6E5;
    display: flex;
    flex-direction: column;    
    margin-left: .25rem;
    padding-bottom: .5rem;
    span {
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: .1rem;
        padding: 1rem;
    }
    input {
        background-color: #FFD6E5;
        border-radius: 5%;
        height: 2rem;
        margin-bottom: .5rem;
        margin-left: 1rem;
        margin-right: 1rem;
        width: 12.5rem;
    }
    button {
        background-color: #FF8AB5;
        border: 1rem #CC6E91;
        color: #FFFFFF;
        cursor: pointer;
        height: 2rem;
        margin-left: 1rem;
        width: 5.5rem;
    }
`;

export const MessageRespContent = styled.div`
    display: flex;
    justify-content: right;
    margin-top: .5rem;
    
    `;

export const MessageResp = styled.div`
    background-color: ${props => props.validar ? "#FFD6E5" : "#E872D8"};
    display: flex;
    flex-direction: column;    
    margin-right: .25rem;
    padding-bottom: .5rem;
    span{
        font-size: 1rem;
        margin-top: .1rem;
        padding: 1rem;
    }
    p{
        font-size: .8rem;
        margin-top: .1rem;
        padding: 1rem;
        line-break: auto;
    }    
`;

export const ButtonFin = styled.button`
    background-color: #FF8AB5;
    border: 1rem #CC6E91;
    color: #FFFFFF;
    cursor: pointer;
    height: 2.2rem;
    margin-top: 1rem;
    width: 100%;
`;

