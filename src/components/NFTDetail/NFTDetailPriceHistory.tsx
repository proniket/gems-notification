import { useState } from "react";

// import { useMoralisWeb3Api, useTokenPrice } from "react-moralis";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ReactComponent as Exclude } from "../../assets/NFTDetail/Exclude.svg";

import { TableFakeData } from "./NFTtableFakeData";

type contentData = {
  id: number;
  title: string;
  active: boolean;
};
const NFTDetailPriceHistory = () => {
  const tokenTransferString: any = localStorage.getItem("transfer");
  const tokenTransfer: any = JSON.parse(tokenTransferString);
  const tradesString: any = localStorage.getItem("trades");
  const trades: any = JSON.parse(tradesString);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const [ispiceHistory, setIsPricehistory] = useState(1);
  // const [price, setprice] = useState("");
  const [content, setContent] = useState<contentData[]>([
    {
      id: 1,
      title: "Price history",
      active: true,
    },
    { id: 2, title: "Item activity", active: false },
  ]);
  const handleCheck = (item: contentData) => {
    const contentClone: contentData[] = content;
    contentClone.map((i) => (i.active = false));
    item.active = true;
    setContent(contentClone);
    setIsPricehistory(item.id);
  };
  return (
    <div className="nftDetailPriceHistory">
      <div className="nftDetailPriceHistory--content">
        {content.map((item: any) => (
          <div
            onClick={() => handleCheck(item)}
            style={{
              borderBottom: item.active ? "1px solid #fff" : "none",
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
      {ispiceHistory === 2 ? (
        <table className="nftDetailPriceHistory--table">
          <tr className="nftDetailPriceHistory--table--title">
            {TableFakeData.title.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
          {tokenTransfer !== null &&
            tokenTransfer.map((item: any) => (
              <tr>
                <td className="nftDetailPriceHistory--table--event">
                  Transfer
                </td>
                <td className="nftDetailPriceHistory--table--price">
                  ETH2.{item.price}
                </td>
                <td className="nftDetailPriceHistory--table--from">
                  {item.from_address}
                </td>
                <td className="nftDetailPriceHistory--table--to">
                  {item.to_address}
                </td>
                <td className="nftDetailPriceHistory--table--date">
                  {item.block_timestamp} <Exclude />
                </td>
              </tr>
            ))}
          {trades.result !== null &&
            trades.result.map((item: any) => {
              // price = item.price_token_address;
              return (
                <tr>
                  <td className="nftDetailPriceHistory--table--event">
                    Transfer
                  </td>
                  <td className="nftDetailPriceHistory--table--price">
                    ETH{item.price}
                  </td>
                  <td className="nftDetailPriceHistory--table--from">
                    {item.seller_address}
                  </td>
                  <td className="nftDetailPriceHistory--table--to">
                    {item.buyer_address}
                  </td>
                  <td className="nftDetailPriceHistory--table--date">
                    {item.block_timestamp} <Exclude />
                  </td>
                </tr>
              );
            })}
        </table>
      ) : ispiceHistory === 1 ? (
        <div className="rechart">
          <LineChart
            width={1000}
            height={400}
            data={data}
            margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#B1DFF7" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      ) : null}
    </div>
  );
};
export default NFTDetailPriceHistory;
