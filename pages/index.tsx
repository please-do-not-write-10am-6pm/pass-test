import type { NextPage } from "next";
import { Distance, IPINFO, PROPS, State } from "../src/types";
import Card from "../src/components/Card";
import { getAllStates, getAllStatesData, getIpinfoState } from "../api/api";
import haversine from "haversine";
import { Text } from "@chakra-ui/react";

export async function getServerSideProps() {
  const res = await getAllStates();
  const stateData = await getAllStatesData();
  const ipInfos = await getIpinfoState();
  let fars: number[] = [];

  const ipInfoData = ipInfos.data;
  const states = res.data;
  const distances = stateData.data;

  if (ipInfoData && ipInfoData.loc) {
    distances.map((distance: Distance) => {
      const loc = ipInfoData.loc.split(",");

      const start = { latitude: Number(loc[0]), longitude: Number(loc[1]) };
      const end = {
        latitude: distance.latitude,
        longitude: distance.longitude,
      };

      const far: number = haversine(start, end, { unit: "mile" });
      fars.push(far);
    });
  }

  fars.sort((a, b) => a - b);
  const nearState = fars[0];
  console.log("nearState", nearState);

  return { props: { states, nearState } };
}

const Home: NextPage<PROPS> = ({ states, nearState }) => {
  console.log("nea", nearState);
  console.log("states", states);
  return (
    <>
      <Text fontSize={"20px"}>
        Neighbor state is {nearState} miles away from you.
      </Text>
      {states.map((state: State, index: number) => {
        return <Card state={state} key={index}></Card>;
      })}
    </>
  );
};

export default Home;
