const e = document.getElementById("selector");
if (!e)
  throw new Error("cannot find selector document");
window.addEventListener(
    "message",
    t => {
        t.origin === window.origin &&
        (t.data.type !== "size" || !t.data.height ||
         (e.style.height = t.data.height + "px"))});
var n, o;
const i = (o = (n = e.contentDocument) == null ? void 0 : n.body) == null
    ? void 0
    : o.offsetHeight;
i && (e.style.height = `${i}px`);
