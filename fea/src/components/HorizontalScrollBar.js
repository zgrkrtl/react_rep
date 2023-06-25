import { Box } from "@mui/material";
import React from "react";

import BodyPart from "./BodyPart";

const HorizontalScrollBar = ({ data, BodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px">
          <BodyPart item={item} BodyPart={BodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
