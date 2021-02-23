import { Component, h } from '@stencil/core';

@Component({
  tag: 'challenge-component',
  styleUrl: 'challenge-component.scss',
  shadow: true,
  // Tried to use local image from assets folder with getAssetPath(),
  // but didn't manage to make it work
  // assetsDirs: ['assets'],
})
export class ChallengeComponent {
  // eslint-disable-next-line class-methods-use-this
  public render(): JSX.Element {
    return (
      <div class='component'>
        <header>CtA - Main conversion</header>
        <div class='container'>
          <div class='content'>
            <div class='text'>
              <h3>A wonderful serenity has taken possession</h3>
              <p>
                A wonderful serenity has taken possession of my entire soul, like these sweet...
              </p>
              <button>Link button</button>
            </div>
          </div>
          <img alt='serenity image' class='image' src='https://c4.wallpaperflare.com/wallpaper/588/367/704/nature-water-mountains-landscape-wallpaper-preview.jpg'/>
        </div>
      </div>
    );
  }
}
