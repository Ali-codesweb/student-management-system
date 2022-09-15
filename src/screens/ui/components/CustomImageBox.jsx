import { Box, Image } from "@mantine/core";

const CustomImageBox = ({src}) => {
    return (
      <Box
        py={10}
        className="border"
        sx={(theme) => ({
          transition: "100ms ease-in",
          borderRadius: "10px",
          backgroundColor: theme.colors.gray[0],
          cursor: "pointer",
          "&:hover": {
            backgroundColor: theme.colors.blue[0],
          },
        })}
      >
        <Image src={src} withPlaceholder height={150} fit="contain" />
      </Box>
    );
  };

export default CustomImageBox