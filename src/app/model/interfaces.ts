export interface Evento {
  idEventi: number;
  UrlFoto: string;
  Nome: string;
  Luogo: string;
  Longitudine: number;
  Latitudine: number;
  Formatted: number;
  Descrizione: string;
  Data: number;
}

export interface IPhoto {
  path_img: string

}

export interface IMapMarker {
  id: number;
  lat: number;
  lng: number;
  luogo: string
  regione: string
}

export interface IMessage {
  nome: string;
  cognome: string;
  email: string;
  testo: string;
}

export interface IVideoclip {
  idVideoclip: string;
  nome: string;
  prodotto: string
}