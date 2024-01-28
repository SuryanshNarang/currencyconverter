import { useEffect, useState } from "react";
function useCurrencyinfo(currency) {
  const [data, setData] = useState({});
  //useEffect
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]); //dekh ab yaha kya hua we want ki jab bhi currency ke andar achange aayga we want to call this function again vo kaise hga? dependency array ki value se which is currency that is... ki jab bhi currency m change hga we want to call this function again so use effect kya krta hai ek callback leta hai and ek dependecy array leta hai
  console.log(data);
  return data;
}
export default  useCurrencyinfo;
