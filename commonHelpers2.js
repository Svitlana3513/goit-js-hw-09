import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l="feedback-form-state",e=document.querySelector(".feedback-form");e.querySelector("textarea");function n(t){t.preventDefault();const s=e.elements.email.value.trim(),o=e.elements.message.value.trim(),a=JSON.stringify({email:s,text:o});console.log(a),localStorage.setItem(l,a)}e.addEventListener("input",n);const m=localStorage.getItem(l)??"";try{const t=JSON.parse(m);console.log(t),e.elements.email.value=t.email,e.elements.message.value=t.text}catch{console.log("No saved data")}function r(t){t.preventDefault(),localStorage.removeItem(l),e.elements.email.value===""&&alert("Please,fill the form!"),e.elements.message.value===""?alert("Please,fill the form!"):console.log(e.elements.email.value,e.elements.message.value),e.reset()}e.addEventListener("submit",r);
//# sourceMappingURL=commonHelpers2.js.map
