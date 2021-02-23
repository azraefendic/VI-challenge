import { newSpecPage } from '@stencil/core/testing';
import { ChallengeComponent } from '../challenge-component';

describe('challenge-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChallengeComponent],
      html: '<challenge-component></challenge-component>',
    });
    expect(page.root).toEqualHtml(`
      <challenge-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </challenge-component>
    `);
  });
});
