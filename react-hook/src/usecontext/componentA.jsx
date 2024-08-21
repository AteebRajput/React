import ComponentB from "./componentB";
import { useState , createContext} from "react";

export const NameContext = createContext();

function ComponentA() {
  
    const [name,setName] = useState("Ateeb")

    return(
      <div className="box">
        <h2>Component A</h2>
        <h3>{`Hello ${name}`}</h3>
        <NameContext.Provider value={name}>
        <ComponentB user = {name}/>
        </NameContext.Provider>
      </div>
    );
  }
  
export default ComponentA
