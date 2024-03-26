import SpacingsStack from "@commercetools-uikit/spacings-stack";
import { Button } from "./Button";
interface SpacingStackProps {
  label: string;
}

const SpacingStack = ({ label }: SpacingStackProps) => {
  return (
    <div>
      <h1>{label}</h1>
      <SpacingsStack scale="xl">
        {" "}
        <Button label="button1" /> <Button label="button2" />{" "}
        <Button label="button3" />{" "}
      </SpacingsStack>
    </div>
  );
};
export default SpacingStack;
