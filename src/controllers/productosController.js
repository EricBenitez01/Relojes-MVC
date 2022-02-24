const db = require('../database/models');

module.exports ={
    listar: (req, res)=>{
      
        db.Productos.findAll()
          .then( productos =>{
            res.render('index', {productos});
            
          })

          .catch(err=>{
            res.send(err)
          })
      },  
};






























/* (1, "Reloj Negro", "5500", "Producto resistente al agua con detalles en dorado", "https://d2r9epyceweg5n.cloudfront.net/stores/104/481/products/reloj-qq-mujer-1477n-joyeria-andrea-11-c2aa94ab3c9721626615685784072221-1024-1024.jpg"),
(2, "Reloj Azul", "3400", "Producto Onix azul francia", "https://www.dhresource.com/0x0/f2/albu/g9/M01/97/64/rBVaVV3SR0SAE6HCAAqgsW5mUnA924.jpg/lige-fashion-mens-watches-top-brand-luxury.jpg"),
(3, "Reloj Amarillo", "6900", "Producto limitado, coleccion Onix", "https://m.media-amazon.com/images/I/912t0OV-45L._AC_UY500_.jpg"),
(4, "Reloj Rojo", "7000", "Producto resistente al agua", "https://image.dhgate.com/0x0s/f2-albu-g8-M00-38-34-rBVaVF1fjgCALi2XAAL2xLG-ZM0188.jpg/venta-al-por-mayor-de-moda-para-hombre-reloj.jpg"),
(5, "Reloj Plata", "8900", "Reloj Onix detalles en plata", "https://http2.mlstatic.com/D_NQ_NP_690095-MLU41309680271_042020-O.jpg"),
(6, "Reloj Oro", "12000", "Reloj Onix detalles en oro", "https://media.revistagq.com/photos/5f71b26a7458e06669aaa59a/master/w_1920,h_1344,c_limit/OMEGA_310.60.42.50.99.001_amb.jpg"); */