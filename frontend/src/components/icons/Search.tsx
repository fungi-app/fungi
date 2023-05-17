import Svg, { SvgProps, Path } from "react-native-svg";
const SearchIcon = (props: SvgProps) => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="#000" {...props}>
    <Path d="M31 28h-1.58l-.56-.54C30.82 25.18 32 22.22 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.22 0 6.18-1.18 8.46-3.14l.54.56V31l10 9.98L40.98 38 31 28Zm-12 0c-4.98 0-9-4.02-9-9s4.02-9 9-9 9 4.02 9 9-4.02 9-9 9Z" />
  </Svg>
);
export default SearchIcon;
