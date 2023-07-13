import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ Channel, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${Channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={Channel?.snippet?.thumbnails?.high?.url}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {Channel?.snippet?.title}{" "}
            <CheckCircle
              sx={{
                fontSize: 14,
                color: "gray",
                ml: "5px",
              }}
            />
          </Typography>
          {Channel?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(Channel?.statistics?.subscriberCount).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
