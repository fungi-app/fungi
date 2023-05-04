import Svg, { SvgProps, Path } from "react-native-svg";
const EncyclopediaIcon = (props: SvgProps) => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="#000" {...props}>
    <Path
      fillRule="evenodd"
      d="M12 4h24c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4Zm6 4h4v10l-.8-.6a2 2 0 0 0-2.4 0l-.8.6V8Zm-6 32h24V8H26v14a2 2 0 0 1-3.2 1.6L20 21.5l-2.8 2.1A2 2 0 0 1 14 22V8h-2v32Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default EncyclopediaIcon;
