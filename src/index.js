import Magnifier from "/src/js/Magnifier.js";

import "./styles.css";

new Magnifier({
  origImgW: 720,
  origImgH: 720,

  viewImgW: 360,
  viewImgH: 360,
  
  magnifierW: 180,
  magnifierH: 180,

  wrapper: "magnifier-wrapper",
  img: "magnifier-img",
  el: "magnifier",
});
