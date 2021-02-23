import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'challenge-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'challenge-component.spec.tsx',
      'challenge-component.e2e.ts',
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <challenge-component></challenge-component>
`;
