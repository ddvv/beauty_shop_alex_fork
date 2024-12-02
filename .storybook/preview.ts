import type { Preview } from "@storybook/react";
import {MainStylesDecorator} from "../src/storybook/main-styles-decorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [MainStylesDecorator],
};

export default preview;
