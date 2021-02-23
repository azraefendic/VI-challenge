import { newE2EPage } from '@stencil/core/testing';

describe('challenge-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<challenge-component></challenge-component>');

    const element = await page.find('challenge-component');
    expect(element).toHaveClass('hydrated');
  });
});
