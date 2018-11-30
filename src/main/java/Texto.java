/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author 2092692
 */
import org.springframework.data.annotation.Id;

public class Texto {
    
    @Id
    public String id;
    public String mensaje;
    
    public Texto() {}
    
    public Texto(String msj) {
        
    }
    
    @Override
    public String toString() {
        return String.format(
                "texto[id=%s, mensaje='%s']",id, mensaje);
    }
}
