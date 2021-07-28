export default class Magnifier {
  constructor(args) {
    // Chage width & height for elems
    this.wrapper = document.getElementById(args.wrapper);
    this.wrapper.style.width = args.viewImgW + "px";
    this.wrapper.style.height = args.viewImgH + "px";

    this.img = document.getElementById(args.img);
    this.img.style.width = args.viewImgW + "px";
    this.img.style.height = args.viewImgH + "px";

    this.elem = document.getElementById(args.el);
    this.elem.style.width = args.magnifierW + "px";
    this.elem.style.height = args.magnifierH + "px";

    // Change events
    this.wrapper.addEventListener(
      "mousemove",
      this.activateMagnifier.bind(this)
    );
  }

  activateMagnifier(e) {
    const mouseX = e.clientX - this.wrapper.getBoundingClientRect().x;
    const mouseY = e.clientY - this.wrapper.getBoundingClientRect().y;

    const magnifierX = mouseX - this.elem.clientWidth / 2;
    const magnifierY = mouseY - this.elem.clientHeight / 2;

    const naturalDiffX = this.img.naturalWidth / this.img.clientWidth;
    const naturalDiffY = this.img.naturalHeight / this.img.clientHeight;

    if (
      mouseX < 0 ||
      mouseX > this.wrapper.clientWidth ||
      mouseY < 0 ||
      mouseY > this.wrapper.clientHeight
    ) {
      this.disableMagnifier();

      return;
    }

    // Magnifier display
    this.elem.style.display = "block";

    // Magnifier pos
    this.elem.style.transform = `translate3d(${magnifierX}px, ${magnifierY}px, 0px)`;

    // Background pos
    this.elem.style.backgroundPosition = `
      ${-(mouseX * naturalDiffX - this.elem.clientWidth / 2)}px 
      ${-(mouseY * naturalDiffY - this.elem.clientHeight / 2)}px
    `;
  }

  disableMagnifier() {
    this.elem.style.display = "none";
  }
}
