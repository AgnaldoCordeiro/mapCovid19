import React, { memo, FC } from "react";
import { Card as CardUI } from "@mui/material";
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './UserInformation.style'

interface Props {
    color: any,
    value: any,
    label: any
}

const Card: FC<Props> =({children, ...props}) => {
    return (
        <CardUI>
            <CardContentStyled color={props.color}>
                <ValueStyled>{props.value}</ValueStyled>
                <LabelStyled>{props.label}</LabelStyled>
            </CardContentStyled>
        </CardUI>
    )
}

export default memo(Card)