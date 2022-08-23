import React from "react";

function Footer(){ 
    return(
        <footer>      
        <div class="container">
          <div class="info-slide">
            <div class="img-container">
              <i class="fas fa-credit-card fa-3x" style="color: rgb(11, 11, 219);"></i>
            </div>
            <p class="titulo-footer">Pagá con tarjeta o en efectivo</p>
            <p class="descripcion-footer">
              <span>Con Mercado Liebre Cash, tenés cuotas sin interés con tarjeta o efectivo en
                puntos de pago. ¡Y siempre es seguro!</span>
            </p>
          </div>      
          <div class="info-slide">
            <div class="img-container">
              <i class="fas fa-gift fa-3x" style="color:rgb(11, 11, 219);"></i>
            </div>
            <p class="titulo-footer">Envío gratis desde $ 2.500</p>
            <p class="descripcion-footer">
              <span>Solo por estar registrad@ en Mercado Liebre tenés envíos gratis en miles de
                productos. Es un beneficio de Mercado Puntos.</span>
            </p>
          </div>      
          <div class="info-slide">
            <div class="img-container">
              <i class="fas fa-user-shield fa-3x" style="color:rgb(11, 11, 219);"></i>
            </div>
            <p class="titulo-footer">Seguridad, de principio a fin</p>
            <p class="descripcion-footer">
              <span>¿No te gusta? ¡Devolvelo! En Mercado Liebre, no hay nada que no puedas hacer,
                porque estás siempre protegid@.</span>
            </p>
          </div>
        </div>      
        <p class="final-footer">Copyringt @ 1999-2020 MercadoLibre S.R.L</p>
      </footer>

    )
}

export default Footer;