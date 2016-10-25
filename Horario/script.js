function crearTabla(horario) {
    
        var div = document.getElementById('miDiv');

        div.innerHTML = '<table class= "fadeInDown animated" id="miTabla"></table>';
        
        var fila = 8;
        var columna = 6;
        var dias = [" ","Lunes","Martes","Miercoles","Jueves","Viernes"];
        var horarioMañana = [" ","8:00-9:00","9:00-10:00","10:00-11:00","11:00-11:30","11:30-12:30","12:30-13:30","13:30-14:30"];
        var horarioTarde = [" ","15:00-16:00","16:00-17:00","17:00-18:00","18:00-18:30","18:30-19:30","19:30-20:30","20:30-21:30"];
        var cellPrimeraFila = 0;
        var i,j;
        var tabla = document.getElementById("miTabla");
    
        if(horario == "mañana"){
            
            for(i = 0; i < fila; i++){
                var nuevaFila = tabla.insertRow(i);
                for (j = 0; j < columna; j++) {
                    var nuevaColumna = nuevaFila.insertCell(j);
                    if(cellPrimeraFila <= dias.length-1){
                        nuevaColumna.innerHTML = dias[j];
                        cellPrimeraFila++;
                    }
                    if(j == 0){
                        nuevaColumna.innerHTML = horarioMañana[i];
                    }
                }
            }
        }
        else if(horario == "tarde"){
            
            for(i = 0; i < fila; i++){
                var nuevaFila = tabla.insertRow(i);
                for (j = 0; j < columna; j++) {
                    var nuevaColumna = nuevaFila.insertCell(j);
                    if(cellPrimeraFila <= dias.length-1){
                        nuevaColumna.innerHTML = dias[j];
                        cellPrimeraFila++;
                    }
                    if(j == 0){
                        nuevaColumna.innerHTML = horarioTarde[i];
                    }
                }
            }
        }
        $('#miTabla').editableTableWidget();
    
    }