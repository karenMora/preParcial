/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app=(function(){
    class datos{
        constructor(mensaje){
            this.mensaje=menaje;
        }
    }
    //lo demas 
    
    return {
        recolectarDatos: function(){
            var valor = document.getElementById("texto").value;
            var f = new Date();
            var dia =f.getDate();
            var mes =f.getMonth() +1;
            var año = f.getFullYear();
            alert(valor+" "+dia.toString()+"/"+mes.toString()+"/"+año.toString());
        }
    };
})();