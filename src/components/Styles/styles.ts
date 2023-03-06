import styled from "styled-components";

type ContainerProps = {
    bgCollor: string;
}

export const Container = styled.div <ContainerProps>`
    background-color: ${(props) => props.bgCollor};
    color: black;
`;

type BotaoProps = {
    bg: string;
    small?: boolean;
}

export const Botao = styled.button <BotaoProps>`
    background-color: ${(props) => props.bg} ;
    font-size: ${(props) => props.small? '15px' : '30px'} ;
`;