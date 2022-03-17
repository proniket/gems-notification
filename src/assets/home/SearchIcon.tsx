import { FC } from "react";

export type SearchIconProps = {
  color: string;
};

const SearchIcon: FC<SearchIconProps> = ({ color }) => {
  return (
    <>
      <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7476 17.2242L15.496 13.5226L19.7476 17.2242ZM17.8521 8.5756C17.8521 10.4324 17.0034 12.2132 15.4926 13.5262C13.9819 14.8392 11.9328 15.5769 9.79627 15.5769C7.65973 15.5769 5.61069 14.8392 4.09992 13.5262C2.58916 12.2132 1.74042 10.4324 1.74042 8.5756C1.74042 6.71875 2.58916 4.93795 4.09992 3.62496C5.61069 2.31197 7.65973 1.57434 9.79627 1.57434C11.9328 1.57434 13.9819 2.31197 15.4926 3.62496C17.0034 4.93795 17.8521 6.71875 17.8521 8.5756V8.5756Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default SearchIcon;
