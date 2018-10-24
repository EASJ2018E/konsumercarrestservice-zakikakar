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

   let buttonElement:HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAllButton");
   buttonElement.addEventListener('click', showAllCars);

   function showAllCars():void {

    let uri:string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars"; //Viser stien til vores api

    axios.get<ICar[]>(uri) //Vi får et array af Icar
    .then(function (response:AxiosResponse<ICar[]>):void
    {
        let result:string = "<ol>";
        response.data.forEach((car:ICar) => {
            result += "<li>"+ car.model + car.vendor + car.price.toString() +"</li>"
        } );

        result += "</ol>";

    }
    ) 
    .catch()
   }