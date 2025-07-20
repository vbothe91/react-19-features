import { memo } from "react";
import Child from "./Child";

const Parent = ({count1, incrementCount1}) => {
  console.log('Parent render 👪');

  return (
    <div>
      <h2>Parent Component</h2>

      <button onClick={incrementCount1}>
        Counter 1 : {count1}
      </button>

      <Child />
    </div>
  );
}

export default memo(Parent);
