import Svg, { SvgProps, Path } from "react-native-svg";
const CloseIcon = (props: SvgProps) => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="#000" {...props}>
    <Path d="M.504 2.927A1.714 1.714 0 0 1 1.718 0c.454 0 .89.179 1.214.498L12 9.57 21.068.5a1.728 1.728 0 0 1 2.428 0 1.715 1.715 0 0 1 0 2.428l-9.068 9.07 9.068 9.072a1.718 1.718 0 0 1-2.428 2.428L12 14.427l-9.068 9.07A1.716 1.716 0 1 1 .504 21.07l9.068-9.071L.504 2.927Z" />
  </Svg>
);

export default CloseIcon;
