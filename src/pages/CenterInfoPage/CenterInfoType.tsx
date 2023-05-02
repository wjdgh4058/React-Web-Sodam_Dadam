export interface CenterInfoListDataType {
  listName: string;
  listItem: Array<string>;
  listImg: string;
  listImgAlt: string;
}

export interface SodaInfoType {
  title: string;
  headText: string;
  img: string;
  alt: string;
  content: Array<string>;
  detailImg: Array<string>;
}

export interface ReservationInfoType {
  title: string;
  reservation: Array<{
    img: string;
    step: number;
    stepName: string;
    stepInfo: string;
  }>;
}

export interface DirectionInfoType {
  title: string;
}
