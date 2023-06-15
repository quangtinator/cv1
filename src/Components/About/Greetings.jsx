import React from "react";

import { TextLoop } from "react-text-loop-next";

export const Greetings = () => {
  return (
    <>
        <TextLoop springConfig={{ stiffness: 100, damping: 15 }}
            children={[
                "Xin chào",
                "Hi",
                "Hallo"
            ]}
        />
    </>
  );
};
