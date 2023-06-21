

const d = document;
const $formJaime = d.querySelector(".formcontato__form"),
      $inputsJaime = d.querySelectorAll(".formcontato__form [required]");


console.log($inputsJaime);

$inputsJaime.forEach(input=>{
    const $spanJaime = d.createElement("span");
    $spanJaime.id = input.name;
    $spanJaime.textContent = input.title;
    $spanJaime.classList.add("formcontato__span","noneJ")
    input.insertAdjacentElement("afterend",$spanJaime);
})


d.addEventListener("keyup",e=>{
    if(e.target.matches(".formcontato__form [required]")){
        let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
        // console.log($input,pattern);
        // primer caso de validacion con pattern
        if(pattern && $input.value !==""){
            console.log("el input tiene patron");
            let regex = new RegExp(pattern);
            return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is__active")
            : d.getElementById($input.name).classList.remove("is__active");
        }
        if(!pattern){
            console.log("el input NO tiene patron");
            return $input.value === ""
            ? d.getElementById($input.name).classList.add("is__active")
            : d.getElementById($input.name).classList.remove("is__active");
        }
    }
});

d.addEventListener("submit",(e)=>{
    // e.preventDefault();
    alert("Enviando Formulario")
    const $loader = d.querySelector(".formcontato__loader"),
        $response = d.querySelector(".formcontato__response");

    $loader.classList.remove("noneJ");

    setTimeout(()=>{
        $loader.classList.add("noneJ");
        $response.classList.remove("noneJ");
        $formJaime.reset();

        setTimeout(()=>$response.classList.add("noneJ"),3000);

    },3000);
});