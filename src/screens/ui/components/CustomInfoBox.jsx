import { Box, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

function CustomInfoBox({ data: e, onClick, title }) {
  const navigate = useNavigate();
  return (
    <Box
      py={15}
      px={10}
      onClick={() => {
        if (e?.link) {
          navigate(e.link);
        } else {
          onClick();
        }
      }}
      className="shadow-sm d-flex justify-content-between border align-items-center"
      key={e}
      sx={(theme) => ({
        transition: "100ms ease-in",
        borderRadius: "10px",
        backgroundColor: theme.colors.gray[0],
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.colors.blue[1],
        },
      })}
    >
      <ThemeIcon color="primary" variant="light" radius={"xl"} size={60}>
        <i style={{ fontSize: "30px" }} className="fas fa-male"></i>
      </ThemeIcon>
      <Text
        ml={10}
        size="sm"
        className="w-80"
       
      >
        {e ? e.data : title}
      </Text>
    </Box>
  );
}

export default CustomInfoBox;
