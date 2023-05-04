import Svg, { SvgProps, Path } from "react-native-svg";
const NewsIcon = (props: SvgProps) => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="#000" {...props}>
    <Path
      fillRule="evenodd"
      d="M4 36c0 3.29 2.71 6 6 6h28c3.29 0 6-2.71 6-6V16a2 2 0 1 0-4 0v20c0 1.13-.87 2-2 2s-2-.87-2-2V10a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v26Zm28-26H8v26c0 1.13.87 2 2 2h22.832c-.274-.684-.832-1.223-.832-2V10Z"
      clipRule="evenodd"
    />
    <Path d="M26 18H14a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4ZM26 26H14a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4ZM26 34H14a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4Z" />
  </Svg>
);
export default NewsIcon;
