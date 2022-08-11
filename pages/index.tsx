import type { NextPage } from "next";
import { State } from "../src/types";
import Card from "../src/components/Card";
import { getAllStates } from "../api/api";

export async function getServerSideProps() {
  const res = await getAllStates();
  const states = res.data;

  return { props: { states } };
}

const Home = (states: { states: any }) => {
  console.log("statesObject", states);
  return (
    <>
      {states.states.map((state: State, index: number) => {
        return <Card state={state} key={index}></Card>;
      })}
    </>
  );
};

export default Home;
