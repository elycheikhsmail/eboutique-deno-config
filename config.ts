import nunjucks from "https://deno.land/x/nunjucks@3.2.3/mod.js";

//src/oak-private-eboutique/templates
nunjucks.configure("./oak-private-eboutique/templates");

export {
    nunjucks
}