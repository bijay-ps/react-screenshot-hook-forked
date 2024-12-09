import React, { createRef } from "react";

import { PieChart, Pie } from "recharts";
import { useScreenshot, createFileName } from "use-react-screenshot";

export default function Icons() {
  const ref = createRef(null);

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div ref={ref}>
      <button onClick={downloadScreenshot}>Download screenshot</button>
      <h1>Charts</h1>
      <PieChart width={730} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
}

const data01 = [
  {
    name: "Group A",
    value: 400
  },
  {
    name: "Group B",
    value: 300
  },
  {
    name: "Group C",
    value: 300
  },
  {
    name: "Group D",
    value: 200
  },
  {
    name: "Group E",
    value: 278
  },
  {
    name: "Group F",
    value: 189
  }
];
const data02 = [
  {
    name: "Group A",
    value: 2400
  },
  {
    name: "Group B",
    value: 4567
  },
  {
    name: "Group C",
    value: 1398
  },
  {
    name: "Group D",
    value: 9800
  },
  {
    name: "Group E",
    value: 3908
  },
  {
    name: "Group F",
    value: 4800
  }
];
