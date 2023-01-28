const template = document.createElement('template');
template.innerHTML = `
<style>
.waczWrapper {
    padding: 1rem;
    border-radius: 50px;
    background-color: white;
    height: 100%;
}
</style>
<div class="waczWrapper">
<replay-web-page source="" embed="replay-with-info"></replay-web-page>
</div>
`;

class contentWacz extends HTMLElement{
 constructor(){
     super();
     //Shadow DOM: APIs that enable encapsulation. Specific elements are separated from your main DOM, thus preventing issues such as document collision.
     this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
 }
 get url() {
    return this.getAttribute("sourceUrl");
  }
  set url(sourceUrl) {
    this.sourceUrl = sourceUrl;
   this.shadowRoot.querySelector("replay-web-page").source = sourceUrl;
   this.render();
  }
 connectedCallback(){ this.render();}

 render(){
   this.h3;
 }
}
window.customElements.define('content-wacz', contentWacz);