import React from "react";
import { PageTitleContainer, PageTitleStyled } from "./PageTitle.style";

interface PageTitleProps {
    title: String,
}

const PageTitle: React.FC<PageTitleProps> = ({
    title,
}) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{title}</PageTitleStyled>           
        </PageTitleContainer>
    )
}

export default PageTitle;