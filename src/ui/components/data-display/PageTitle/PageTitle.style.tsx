import { styled } from "@mui/material/styles";


export const PageTitleContainer = styled('div')`
margin:${({ theme }) => theme.spacing(3) + ' ' + 0}; //base 8 ou seja 5*8 =40px
text-align: center;

`;
export const PageTitleStyled = styled('h6')`
padding-top: 5rem;
margin: 0;
color: ${({ theme }) => theme.palette.secondary.main};
font-size: ${({ theme }) => theme.typography.h6.fontSize};
font-weight: 600;

${({ theme }) => theme.breakpoints.down('md')}{
    font-size: ${({ theme }) => theme.typography.body1.fontSize};    
}
`;