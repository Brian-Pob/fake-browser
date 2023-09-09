import './style.scss';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="browser">
  <div class="header-bar">
    <div class="header-bar__top">
      <ul class="window-btns">
        <li><button></li>
        <li><button></li>
        <li><button></li>
      </ul>
      <ul class="tabs">
        <li>New Tab <button class="close-tab-btn"><i class="ph ph-x"></i></button></li>
      </ul>
      <button class="new-tab-btn">+</button>
    </div>
    <div class="header-bar__bottom">
      <ul class="nav-btns">
        <li><button><i class="ph ph-arrow-left"></i></button></li>
        <li><button><i class="ph ph-arrow-right"></i></button></li>
        <li><button><i class="ph ph-arrow-counter-clockwise"></i></button></li>
        <li><button><i class="ph ph-house"></i></button></li>
      </ul>
      <div class="omni-bar">
        <button class="lock"><i class="ph ph-lock-key"></i></button>
        <input type="text" class="url-bar">
        <!--         <button class="share">S</button>
        <button class="add-to-bookmark">W</button> -->
      </div>
      <!--       <ul class="extensions">
        <li>
          <button>A</button>
        </li>
        <li>
          <button>B</button>
        </li>
        <li>
          <button>C</button>
        </li>
      </ul> -->
      <!--             <button class="profile">P</button> -->
      <button class="menu-btn"><span>

          <i class="ph ph-dots-three-vertical"></i>
        </span>

      </button>
    </div>
  </div>
  <div class="viewport">
    <h1>Fake Browser</h1>
    <p>(pls view on desktop or landscape)</p>
    <p>Icons by <a href="https://phosphoricons.com/">Phosphor Icons</a></p>
    <p>Styles from <a href="https://open-props.style">Open Props</a></p>
  </div>
</div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
