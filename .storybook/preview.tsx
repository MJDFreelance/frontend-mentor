import type { Preview } from "@storybook/react";
import '../src/app/globals.css';

// Define the global HTML decorator
const withGlobalHTML = (Story:any, context:any) => {
  document.title = `Frontend Mentor | ${context.name}`;

  return (
      <div>
        <header>
        </header>
        <Story {...context} />
        <footer>
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">Michael Davies</a>.
          </div>
        </footer>
      </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withGlobalHTML], // Add the decorator here
};

export default preview;
