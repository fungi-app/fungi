import { Text } from "react-native";
import { trpc } from "../lib/trpc";
import { tunnel } from "../lib/tunnel";

export const Profile: React.FC = () => {
  const hello = trpc.example.hello.useQuery({ name: "Ivan" });

  return (
    <Text>
      profile {hello.data ?? "Loading"}, tunnel {tunnel}
    </Text>
  );
};
