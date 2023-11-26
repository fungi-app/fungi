import { Text, View, ViewStyle } from "react-native";

import Markdown, {
  type RenderRules,
} from "@jonasmerlin/react-native-markdown-display";
import { useTheme, useThemedStyle } from "./theme";

type Props = {
  style?: ViewStyle;
};

export const FungiMarkdown: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  style,
}) => {
  const mdStyles = useThemedStyle((t) => ({
    heading1: {
      fontFamily: "Raleway_700Bold",
    },
    heading2: {
      fontFamily: "Raleway_700Bold",
    },
    heading3: {
      fontFamily: "Raleway_700Bold",
    },
    heading4: {
      fontFamily: "Raleway_700Bold",
    },
    heading5: {
      fontFamily: "Raleway_700Bold",
    },
    heading6: {
      fontFamily: "Raleway_700Bold",
    },
    strong: {
      fontFamily: "Raleway_700Bold",
    },
    em: {
      fontFamily: "Raleway_500Medium_Italic",
    },
    text: {
      fontFamily: "Raleway_500Medium",
      color: t.text,
    },
    hr: {
      width: "100%",
      height: 2,
      backgroundColor: t.separator,
      marginVertical: 8,
    },
    bullet_list_icon: {
      fontFamily: "Raleway_700Bold",
    },
    body: style ?? {},
  }));

  const rules: RenderRules = {
    text: (node, children, parent, styles, inhStyles) => (
      <Text key={node.key} style={[mdStyles.text, inhStyles, styles]}>
        {node.content}
      </Text>
    ),
    hr: (node, children, parent) => (
      <View key={node.key} style={[mdStyles.hr]} />
    ),
  };

  return (
    <Markdown rules={rules} style={mdStyles}>
      {children}
    </Markdown>
  );
};
