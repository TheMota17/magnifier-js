export default class Magnifier {
  constructor(args) {
    // Data
    this.origImg = { w: args.origImgW, h: args.origImgH };
    this.viewImg = { w: args.viewImgW, h: args.viewImgH };
    this.magnifier = { w: args.magnifierW, h: args.magnifierH };

    // Chage width & height for elems
    this.wrapper = document.getElementById(args.wrapper);
    this.wrapper.style.width = this.viewImg.w + "px";
    this.wrapper.style.height = this.viewImg.h + "px";

    this.img = document.getElementById(args.img);
    this.img.style.width = this.viewImg.w + "px";
    this.img.style.height = this.viewImg.h + "px";

    this.elem = document.getElementById(args.el);
    this.elem.style.width = this.magnifier.w + "px";
    this.elem.style.height = this.magnifier.h + "px";

    // Change events
    this.wrapper.addEventListener(
      "mousemove",
      this.activateMagnifier.bind(this)
    );
  }

  activateMagnifier(e) {
    const mouseX = e.clientX - this.wrapper.getBoundingClientRect().x;
    const mouseY = e.clientY - this.wrapper.getBoundingClientRect().y;

    const magnifierX = mouseX - this.magnifier.w / 2;
    const magnifierY = mouseY - this.magnifier.h / 2;

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
      ${-(mouseX * 2 - this.elem.clientWidth / 2)}px 
      ${-(mouseY * 2 - this.elem.clientHeight / 2)}px
    `;
  }

  disableMagnifier() {
    this.elem.style.display = "none";
  }
}
