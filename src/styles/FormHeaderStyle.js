import styled from 'styled-components';

export const Header = styled.div`
    background-color: #E872D8;
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 100%;    
`;

export const HeaderTitle = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    margin-left:  2rem;
    margin-right: 2rem;
    h3 {
        font-family: 'IBM Plex Sans', sans-serif;
        padding-left: .5em;
    }    
`;
export const HeaderSubtitle = styled.div`
    align-items: center;
    margin-top: 1.5rem;
    margin-left:  2rem;
    margin-right: 2rem;
    span {
        font-family: 'IBM Plex Sans', sans-serif;
        padding-left: .3em;
    }    
`;
