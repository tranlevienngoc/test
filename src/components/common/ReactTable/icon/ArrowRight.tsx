interface props {
  color: string;
}
export default function ArrowRight({ color }: props) {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.5 6L9.08997 7.41L13.67 12L9.08997 16.59L10.5 18L16.5 12L10.5 6Z'
        fill={color}
      />
    </svg>
  );
}
