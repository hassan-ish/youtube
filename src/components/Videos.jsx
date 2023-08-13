import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos?.map((item, idx) => (
        <>
          {item.id.videoId && <VideoCard video={item} key={idx} />}
          {/* check if its a vid or channel*/}
          {item.id.channelId && <ChannelCard Channel={item} key={idx} />}
        </>
      ))}
    </Stack>
  );
};

export default Videos;
