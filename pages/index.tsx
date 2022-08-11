import type { NextPage } from "next";
import { State } from "../src/types";
import Card from "../src/components/Card";
import { getAllStates, getAllStatesData } from "../api/api";

export async function getServerSideProps() {
  const res = await getAllStates();

  const stateData = await getAllStatesData();

  const states = res.data;
  const distances = stateData.data;

  // const distance =  Haversine formula
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
