import react from "react";
import Envcard from "./components/Envcard";
import { QUERY_ENVELOPES } from "./utils/queries";

export default function Home() {
  const { loading, data } = useQuery(QUERY_ENVELOPES);
  const envelope = data?.envelopes || [];

  const handleClick = (event) => () => {
    console.log(event);
    return (
      <div>
        <Envcard name={event.name} envBalance={event.envBalance} />
      </div>
    );
  };
}
