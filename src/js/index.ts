import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";

   // http://rest-pele-easj-dk.azurewebsites.net/api/Cars

   interface ICar 
   {
    model:string;
    vendor:string;
    price:number;
   }

   let divElement:HTMLDivElement = <HTMLDivElement> document.getElementById("content")
   let buttonElement:HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAllButton");
   buttonElement.addEventListener('click', showAllCars);

   function showAllCars():void {

    let uri:string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars"; //Viser stien til vores api

    axios.get<ICar[]>(uri) //Vi får et array af Icar
    .then(function (response:AxiosResponse<ICar[]>):void
    {
        let result:string = "<ol>";
        response.data.forEach((car:ICar) => {
            result += "<li>"+ "<b> model </b> : " + car.model + "</br> <b>mærke</b> : " + car.vendor + "</br> <b>pris</b>:  " + car.price.toString() +"</li>"
        } );

        result += "</ol>";

        divElement.innerHTML = result;

    }
    ) 
    .catch(function (error:AxiosError):void 
    {
        divElement.innerHTML = error.message;
    })
   }