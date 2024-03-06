import { Loader2 } from "lucide-react"
import styled, { keyframes } from "styled-components"
import { PaginationInfo } from "src/types/types"

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`

export const InfiniteLoader2 = styled(Loader2)`
    animation: ${rotate} 1s linear infinite;
`

export const Button = styled.button`
    background-color: #313439;
    color: #fff;
    font-family: Lato, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    border-radius: 4px;
    border: none;
    padding: 8px 31px;
    width: 170px;
    display: block;
    margin: 0 auto;
    margin-bottom: 100px;
    &:hover {
        background-color: #54585f;
        transition: 0.1s all;
    }
    &:disabled {
        background-color: #83878e;
    }
    @media (max-width: 450px) {
        margin-bottom: 50px;
}
`

export const PaginationButton = styled(Button) <{ $curPage: number | undefined, $totalPages: number | undefined }>`
    display: ${info => info.$curPage == info.$totalPages && info.$curPage != undefined ? "none" : "block"};
`