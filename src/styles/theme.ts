export type Theme = {
  color: {
    themeColor: string;
    backgroundColor: string;
  };
  fontFamily: string;
  centerByFlex: string;
};

export const theme: Theme = {
  color: {
    themeColor: "#d4451f",
    backgroundColor: "#f2e07d",
  },
  fontFamily: "font-family: 'Nanum Gothic', sans-serif",
  centerByFlex:
    "display: flex; flex-direction: row; justify-content: center; align-items: center;",
};
