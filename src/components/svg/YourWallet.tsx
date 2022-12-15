import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  size?: string;
}
export default function YourWallet({ size = '24px', ...props }: Props) {
  return (
    <Box
      as='svg'
      {...props}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17 22.75H7C3.56 22.75 1.25 20.44 1.25 17V12C1.25 8.92 3.15 6.69001 6.1 6.32001C6.38 6.28001 6.69 6.25 7 6.25H17C17.24 6.25 17.55 6.26 17.87 6.31C20.82 6.65 22.75 8.89 22.75 12V17C22.75 20.44 20.44 22.75 17 22.75ZM7 7.75C6.76 7.75 6.53 7.76999 6.3 7.79999C4.1 8.07999 2.75 9.68 2.75 12V17C2.75 19.58 4.42 21.25 7 21.25H17C19.58 21.25 21.25 19.58 21.25 17V12C21.25 9.66 19.88 8.05001 17.66 7.79001C17.42 7.75001 17.21 7.75 17 7.75H7Z'
        fill='#343436'
      />
      <path
        d='M6.19005 7.80946C5.95005 7.80946 5.73005 7.69946 5.58005 7.49946C5.41005 7.26946 5.39005 6.96946 5.52005 6.71946C5.69005 6.37946 5.93005 6.04946 6.24005 5.74946L9.49005 2.48945C11.15 0.839453 13.85 0.839453 15.51 2.48945L17.26 4.25947C18 4.98947 18.45 5.96947 18.5 7.00947C18.51 7.23947 18.42 7.45945 18.25 7.60945C18.08 7.75945 17.85 7.82947 17.63 7.78947C17.43 7.75947 17.22 7.74946 17 7.74946H7.00005C6.76005 7.74946 6.53005 7.76945 6.30005 7.79945C6.27005 7.80945 6.23005 7.80946 6.19005 7.80946ZM7.86005 6.24946H16.82C16.69 5.90946 16.48 5.59947 16.2 5.31947L14.44 3.53947C13.37 2.47947 11.62 2.47947 10.54 3.53947L7.86005 6.24946Z'
        fill='#343436'
      />
      <path
        d='M22 17.25H19C17.48 17.25 16.25 16.02 16.25 14.5C16.25 12.98 17.48 11.75 19 11.75H22C22.41 11.75 22.75 12.09 22.75 12.5C22.75 12.91 22.41 13.25 22 13.25H19C18.31 13.25 17.75 13.81 17.75 14.5C17.75 15.19 18.31 15.75 19 15.75H22C22.41 15.75 22.75 16.09 22.75 16.5C22.75 16.91 22.41 17.25 22 17.25Z'
        fill='#343436'
      />
    </Box>
  );
}
