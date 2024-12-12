import { useRef } from "react";

export const useText = () => {
  const ref = useRef({ Num: 0 });
  const Num = ref.current;

  const inc = () => {
    Num.Num = Num.Num + 2;
    console.log(Num.Num);
  };
  const dec = () => {
    Num.Num = Num.Num - 2;
    console.log(Num.Num);
  };

  return { inc, dec, Num };
};
