import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";


export const FormElementsContainer = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
gap: ${({ theme }) => theme.spacing(5)};
max-width: 650px;
margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;


export const CasosCovidContainer = styled('div')`
display: grid;
grid-template-columns: 1fr;

${({ theme }) => theme.breakpoints.up('md')}{
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
}
${({ theme }) => theme.breakpoints.down('md')}{
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};
    > :nth-of-type(add) {
        background-color: ${({ theme }) => theme.palette.background.paper};
    }

}
`;