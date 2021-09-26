import React from "react";
import styled, { keyframes } from "styled-components";

const KeyFramLoading = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacitu: 1;
    }
`;

const LoadingSkeleton = styled.div`
    background-color: gray;
    border-radius: 6px;
    margin-bottom: 10px;
    min-width: ${(props) => props.width};
    height: ${(props) => props.heigth};
    animation: ${KeyFramLoading} 500ms infinite alternate;
`;

export default ({width, heigth}) => <LoadingSkeleton width={width} heigth={heigth} />;