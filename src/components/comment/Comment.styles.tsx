import styled from "styled-components"

export const CommentContainer = styled.div`
    display: grid;
    grid-template-areas: 
    "avatar name likes"
    "avatar time likes"
    "avatar text text"
    "div div div";
    width: 100%;
    box-sizing: border-box;
    grid-template-columns: 89px 1fr;
    padding-left: 25px;
    @media (max-width: 768px) {
        grid-template-columns: 62px 1fr;
        padding-left: 15px;
    }
    @media (max-width: 425px) {
        padding-left: 8px;
}
    
`

export const CommentAvatar = styled.img`
    width: 68px;
    height: 68px;
    border-radius: 50%;
    margin-right: 20px;
    grid-area: avatar;
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

export const CommentAuthorName = styled.div`
    color: white;
    grid-area: name;
    margin-top: 12.5px;
    font-family: Lato, sans-serif;
    font-weight: bold;
    font-size: 16px;
    @media (max-width: 768px) {
        font-size: 14px;
}
`

export const CommentCreatedTime = styled.div`
    grid-area: time;
    font-family: Lato, sans-serif;
    font-size: 16px;
    color: #8297AB;
    font-weight: 400;
    line-height: 19px;
    margin-top: 4px;
    margin-bottom: 12.5px;
    @media (max-width: 768px) {
        font-size: 14px;
    }


`

export const CommentText = styled.div`
    color: white;
    grid-area:text;
    font-family: Lato, sans-serif;
    word-wrap: break-word;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 14px;
}   
`
