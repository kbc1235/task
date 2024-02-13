type IconProps = {
  width: number | string;
  height: number | string;
  fill: string;
  stroke?: string;
};
export const Like = ({ width, height, stroke, fill }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
        d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
      />
    </svg>
  );
};
