import React, { createRef, useState, useEffect } from "react";
import Text from "./Text";

import { useScreenshot } from "use-react-screenshot";

export default () => {
  const ref = createRef(null);
  const [width, setWidth] = useState(300);
  const [image, takeScreenShot] = useScreenshot();

  const getImage = () => takeScreenShot(ref.current);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("getImage: ", getImage());
  //   }, 5000);
  // }, []);

  return (
    <div>
      <div>
        <button
          style={{ marginBottom: "10px" }}
          onClick={async () => {
            const resp = await getImage();
            console.log(resp);
          }}
        >
          Take screenshot
        </button>
        <label style={{ display: "block", margin: "10px 0" }}>
          Width:
          <input value={width} onChange={(e) => setWidth(e.target.value)} />
        </label>
      </div>
      <img width={width} src={image} alt={"ScreenShot"} />
      <div
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <Text />
      </div>
    </div>
  );
};
