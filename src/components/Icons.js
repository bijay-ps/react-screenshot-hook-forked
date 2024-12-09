import React, { createRef } from "react";

import { PlusOne, BugReport } from "@material-ui/icons";
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
      <h1>Icons</h1>
      <PlusOne />
      <BugReport />
      🔥
    </div>
  );
}
