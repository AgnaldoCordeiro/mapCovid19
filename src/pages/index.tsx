import useIndex from "data/hooks/pages/useIndex.page";
import { NextPage } from "next";
import React from "react";
import { Box, CircularProgress, Container, TextField } from "@mui/material";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import { Button, Typography } from "@mui/material";
import { FormElementsContainer } from "@styles/pages/index.style";
import Board from "ui/components/UserInformation/Board";

const Home: NextPage = () => {
  const {
    buscaFeita,
    carregando,
    dadosRegiao,
    erro,
    country,
    setCountry,
    getCovidData,
  } = useIndex();

  return (
    <div>
      <PageTitle title={"Covid-19 Mapping System"} />
      <Container>
        <FormElementsContainer>
          <Box sx={{ textAlign: "center" }}>
            <div className="mb-2">
              <TextField
                label={"Digite o País que queira carregar os dados"}
                fullWidth
                variant={"outlined"}
                color={"secondary"}
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
              {erro && <Typography color={"error"}>{erro}</Typography>}
              <Button
                variant={"contained"}
                color={"secondary"}
                sx={{ width: "220px", margin: "0.75rem" }}
                type={"submit"}
                disabled={!country || carregando}
                onClick={() => getCovidData(country)}
              >
                {carregando ? <CircularProgress size={20} /> : "Buscar"}
              </Button>
            </div>
          </Box>
        </FormElementsContainer>
        {buscaFeita && dadosRegiao.values == null ? (
          // @ts-ignore
          <Board data={dadosRegiao} />
        ) : (
          <Typography align={"center"} color={"error"}></Typography>
        )}
      </Container>
    </div>
  );
};

export default Home;
