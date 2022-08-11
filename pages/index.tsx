import type { NextPage } from "next";
import { Distance, State } from "../src/types";
import Card from "../src/components/Card";
import { getAllStates, getAllStatesData } from "../api/api";
const haversine = require("haversine");

export async function getServerSideProps() {
  const res = await getAllStates();

  const stateData = await getAllStatesData();

  const states = res.data;
  const distances = stateData.data;

  if (process.env.IPINFO_TOKEN && process.env.IPINFO_TOKEN.loc()) {
    distances.map((distance: Distance) => {
      const start = [distance.latitude, distance.longitude];
      const end = process.env.IPINFO_TOKEN.loc;
    });
  }

  // const distance =  Haversine formula
  // distances.map((distance: Distance) => {
  //   const far = haversine(
  //     [distance.latitude, distance.longitude],
  //     process.env.IPINFO_TOKEN
  //   );
  //   console.log("far", far);
  //   return far;
  // });
  return { props: { states } };
}

const Home = (states: { states: any }) => {
  return (
    <>
      {states.states.map((state: State, index: number) => {
        return <Card state={state} key={index}></Card>;
      })}
    </>
  );
};

export default Home;
