import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'challenge-component',
  styleUrl: 'challenge-component.scss',
  shadow: true,
})
export class ChallengeComponent {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
