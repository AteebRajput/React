import { NameContext } from "./componentA";
import { useContext } from "react";

function ComponentD() {
const username = useContext(NameContext);  
  return(
    <div className="box">
      <h2>Component D</h2>
      <h3>{`Bye Byee ${username}`}</h3>
    </div>
  );
}

export default ComponentD