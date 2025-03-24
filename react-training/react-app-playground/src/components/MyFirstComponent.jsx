import { useState } from "react";

function MyFirstComponent(props) {
    const { name, message } = props;
    // this is a hook
    const [isVisible, setIsVisible] = useState(true);  
  return (
    <div>
      <h1>The First Component has landed</h1>

      <button onClick={() => setIsVisible(!isVisible)}>
        Click me, if you dare, {name}
      </button>

      {isVisible ? <p>{message}</p> : null}
      {/* {isVisible && <p>Could have used && instead of ternary</p>} which means 'short-circuiting */}
    </div>
  );
}

export default MyFirstComponent;