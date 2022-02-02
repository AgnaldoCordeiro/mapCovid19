import { UserShartInterface } from "data/@types/useInterface";
import { useState } from "react";
import { ApiService } from "../../services/ApiService";

export default function useIndex() {
  const [dadosRegiao, setDadosRegiao] = useState([] as UserShartInterface[]),
    [country, setCountry] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [erro, setErro] = useState("");

  async function getCovidData(country: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");
    try {
      const { data } = await ApiService.get(`${country}`);
      setDadosRegiao(data);
      if (data === "Country not found") setErro("Pais informado não existe");
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setErro("Erro na requisição");
      setCarregando(false);
    }
  }
  return {
    country,
    setCountry,
    buscaFeita,
    carregando,
    dadosRegiao,
    erro,
    getCovidData,
  };
}
