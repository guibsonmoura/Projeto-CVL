var ajax = new XMLHttpRequest();
ajax.addEventListener("load",function(){
    console.log(this.responseText)
});
ajax.open("POST","http://localhost/projetos/projeto_cvl_terra2/php/formulario.php")
ajax.send()

//ajax jspuro

var id_antigo = null;
var idBotao   = null;
var valorBotao = null;
var idAgendar = document.getElementById('agendar')

//botoes manha
var idSeteHoras = document.getElementById('sete_horas'); 
var idSeteMeia  = document.getElementById('sete_meia'); 
var idOitoHoras = document.getElementById('oito'); 
var idOitoMeia  = document.getElementById('oito_meia'); 
var idNoveHoras = document.getElementById('nove'); 
var idNoveMeia  = document.getElementById('nove_meia'); 
var idDezHoras  = document.getElementById('dez'); 
var idDezMeia   = document.getElementById('dez_meia'); 
var idOnzeHoras = document.getElementById('onze'); 
var idOnzeMeia  = document.getElementById('onze_meia'); 
//botoes tarde
var idDuasHoras   = document.getElementById('duas'); 
var idDuasMeia    = document.getElementById('duas_meia'); 
var idTresHoras   = document.getElementById('tres'); 
var idTresMeia    = document.getElementById('tres_meia'); 
var idQuatroHoras = document.getElementById('quatro'); 
var idQuatroMeia  = document.getElementById('quatro_meia'); 
var idCincoHoras  = document.getElementById('cinco'); 
var idCincoMeia   = document.getElementById('cinco_meia'); 
var idSeisHoras   = document.getElementById('seis'); 
var idSeisMeia    = document.getElementById('seis_meia'); 
//funcoes botao manha
function mudarCor(id){
    idSeteHoras.addEventListener("click",function(){
        
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }
        }
        id_antigo = id;
        
        idBotao = id.id
        valorBotao = id.value
    })
   
}
function mudarCor2(id){
    idSeteMeia.addEventListener("click",function(){
        
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
        
        idBotao = id.id
        valorBotao = id.value
    })
   
}
function mudarCor3(id){
    idOitoHoras.addEventListener("click",function(){
        
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }
        }
        id_antigo = id;
        
        idBotao = id.id
        valorBotao = id.value
    })
   
}
function mudarCor4(id){
    idOitoMeia.addEventListener("click",function(){
        
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
       
        idBotao = id.id
        valorBotao = id.value
    })    
    
}
function mudarCor5(id){
    idNoveHoras.addEventListener("click",function(){
        
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
        
        idBotao = id.id
        valorBotao = id.value
    })
   
}
function mudarCor6(id){
    idNoveMeia.addEventListener("click",function(){
        
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
        
        idBotao = id.id
        valorBotao = id.value
    })
    
}
function mudarCor7(id){
    idDezHoras.addEventListener("click",function(){
        
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }
        }
        id_antigo = id;
       
        idBotao = id.id
        valorBotao = id.value
    })
    
}
function mudarCor8(id){
    idDezMeia.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }
        }
        id_antigo = id;
        
        idBotao = id.id
        valorBotao = id.value
        
    })
   
}
function mudarCor9(id){
    idOnzeHoras.addEventListener("click",function(){
        
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }    
        }
        id_antigo = id;
       
        idBotao = id.id
        valorBotao = id.value
        
    })
   
}
function mudarCor10(id){
    idOnzeMeia.addEventListener("click",function(){
        
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
       
        idBotao = id.id
        valorBotao = id.value
        
    })
    
}
//funcoes botao tarde
function mudarCor11(id){
    idDuasHoras.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
       
        idBotao = id.id
        valorBotao = id.value
        
    })
   
}
function mudarCor12(id){
    idDuasMeia.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
        
        idBotao = id.id
        valorBotao = id.value
        
    })
   
}
function mudarCor13(id){
    idTresHoras.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }
            
        }
        id_antigo = id;
       
        idBotao = id.id
        valorBotao = id.value
        
    })
   
}
function mudarCor14(id){
    idTresMeia.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
        
        idBotao = id.id
        valorBotao = id.value
        
    })
   
}
function mudarCor15(id){
    idQuatroHoras.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
        
        idBotao = id.id
        valorBotao = id.value
        
    })
    
}
function mudarCor16(id){
    idQuatroMeia.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
       
        idBotao = id.id
        valorBotao = id.value
        
    })
}
function mudarCor17(id){
    idCincoHoras.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
        
        valorBotao = id.value
        idBotao = id.id
    })    
   
}
function mudarCor18(id){
    idCincoMeia.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
       
        valorBotao = id.value
        idBotao = id.id
        
    })
   
}
function mudarCor19(id){
    idSeisHoras.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
        
        valorBotao = id.value
        idBotao = id.id
        
    })
    
}
function mudarCor20(id){
    idSeisMeia.addEventListener("click",function(){
       
        if(id != id_antigo || id_antigo == null){
            id.style.backgroundColor = 'green';
            if (id_antigo != null){
                id_antigo.style.backgroundColor = 'rgb(190, 190, 204)';
            }      
        }
        id_antigo = id;
        
        idBotao = id.id
        valorBotao = id.value
    })
   
}

//chamada botoes manha
mudarCor   (idSeteHoras);
mudarCor2  (idSeteMeia);
mudarCor3  (idOitoHoras);
mudarCor4  (idOitoMeia);
mudarCor5  (idNoveHoras);
mudarCor6  (idNoveMeia);
mudarCor7  (idDezHoras);
mudarCor8  (idDezMeia);
mudarCor9  (idOnzeHoras);
mudarCor10 (idOnzeMeia);
//chamada botoes tarde
mudarCor11 (idDuasHoras);
mudarCor12 (idDuasMeia);
mudarCor13 (idTresHoras);
mudarCor14 (idTresMeia);
mudarCor15 (idQuatroHoras);
mudarCor16 (idQuatroMeia);
mudarCor17 (idCincoHoras);
mudarCor18 (idCincoMeia);
mudarCor19 (idSeisHoras);
mudarCor20 (idSeisMeia);


