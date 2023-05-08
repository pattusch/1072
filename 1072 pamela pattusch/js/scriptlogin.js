var clave=''
var email=''


function confirmardatos(x,y) {
    
    var respuesta = document.getElementById('resultado');
    

    clave= (datoclave.value);
    email = (datoemail.value);
    
    
   if (clave != '' && email != '') // las comillas juntitas
   
      {  respuesta.innerHTML = 'perfecto, puede acceder';
    
 
      }else {  respuesta.innerHTML = 'rellene los datos';
            
        
    }
   
 
   
    
} 