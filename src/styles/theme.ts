export type Theme = {
  color: {
    themeColor: string;
    backgroundColor: string;
  };
  fontFamily: string;
  fontSize: {
    mobile: string;
    desktop: string;
  };
  centerByFlex: string;
};

export const theme: Theme = {
  color: {
    themeColor: "#d4451f",
    backgroundColor: "#f2e07d",
  },
  fontFamily: "font-family: 'Nanum Gothic', sans-serif",
  fontSize: {
    mobile: "100%",
    desktop: "150%",
  },
  centerByFlex:
    "display: flex; flex-direction: row; justify-content: center; align-items: center;",
};
