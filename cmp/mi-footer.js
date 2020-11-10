class MiFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = /* html */
    "Copyright &copy; 2020 Urban Becerra Luis David.";
    
  }
}
costomElements.define("mi-footer", MiFooter);
