import { useEffect, useState } from "react";
import CQuote from "../models/Quote";
import CQuotes from "../models/Quotes";
import PleaseWait from "./PleaseWait";

const Quotes = (props: any) => {
  const [m_bShowPleaseWait, setm_bShowPleaseWait] = useState(true);

  const [m_cQuotes, setm_cQuotes] = useState(new CQuotes());

  useEffect(() => {
    fetch(
      "https://urobackend.azurewebsites.net/api/Quotes?code=-ThfzZ4qNiW_K79o7gBpCLo18Z3yrrm2gOb8GQqlIhX7AzFuLj6YbA=="
    )
      .then((res) => res.json())
      .then((res) => {
        setm_bShowPleaseWait(false);
        setm_cQuotes(res);
      });
  }, []);

  function RenderItems() {
    return m_cQuotes.quotes.map((v: CQuote) => (
      <tr key={v.name}>
        <a href={v.url}>{v.name}</a>
      </tr>
    ));
  }

  if (m_bShowPleaseWait)
    return <PleaseWait Show={m_bShowPleaseWait}></PleaseWait>;
  else
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Quotes </th>
            </tr>
          </thead>
          <tbody>{RenderItems()}</tbody>
        </table>
        {/* <pre>
          <code>{JSON.stringify(m_cQuotes, null, 4)}</code>
        </pre> */}
      </>
    );
};

export default Quotes;

// const quotes = (props: any) => {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th scope="col">  </th>
//           <th scope="col">Quotes</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//         Quote 1
//         </tr>
//         <tr>
//         Quote 2
//         </tr>
//         <tr>
//         Quote 3
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default quotes;
