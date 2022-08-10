import { Box } from '@mantine/core';

export default function HoverBox({children,onClick}) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: 'white',
        textAlign: 'center',
        padding: theme.spacing.sm,
        borderRadius: theme.radius.md,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor:
            theme.colors.gray[1],
        },
      })}
      mb={15}
      onClick={onClick}
    >
      {children}
    </Box>
  );
}