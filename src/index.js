import Magnifier from "/src/js/Magnifier.js";

import "./styles.css";

new Magnifier({
  viewImgW: 360,
  viewImgH: 360,

  magnifierW: 180,
  magnifierH: 180,

  wrapper: "magnifier-wrapper",
  img: "magnifier-img",
  el: "magnifier"
});
