import styled from "styled-components";

type ContainerProps = {
    bgCollor: string;
}

export const Container = styled.div <ContainerProps>`
    max-width: 600px ;
    margin:  auto;
    background-color: ${(props) => props.bgCollor};
    color: black;


    .link {
        color: red ;
        padding: 1rem;
    }


    span {
        font-weight:  bold;
        color: white ;
    }


    @media (max-width: 500px) {
        background-color: green;
        flex-direction: column ;
    }
`;

type BotaoProps = {
    bg: string;
    small?: boolean;
}

export const Botao = styled.button <BotaoProps>`
    background-color: ${(props) => props.bg} ;
    font-size: ${(props) => props.small? '15px' : '30px'} ;


   
`;