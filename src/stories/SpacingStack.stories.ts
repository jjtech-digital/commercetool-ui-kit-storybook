import SpacingsStack from "./SpacingStack";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/SpacingsStack",
  component: SpacingsStack,
} satisfies Meta<typeof SpacingsStack>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    label: "Spacing Stack",
  },
};
