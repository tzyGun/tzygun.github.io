import { html, LitElement } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

export default class LinkComponent extends LitElement {
  
    render() {  
      return html`
      	<a class="regular-text" href="https://github.com/tzyGun/tech_3camp_training">
                <img class="github-logo" src="assets/qr_camp.svg" alt="">
								<p class="github-link">https://github.com/tzyGun/tech_3camp_training</p>
				</a>	
     ` ;    }
  }
  
