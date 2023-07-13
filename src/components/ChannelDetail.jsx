import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(9,109,121,1) 49%, rgba(255,0,228,1) 100%)",
            zIndex: "10",
            height: "300px",
          }}
        />
        <ChannelCard Channel={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
