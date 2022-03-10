export class Pedidos{
    constructor(
        public id : string,
        public ordenPedido:string,
        public ordenVenta:string,
        public factura:number,
        public referenciaCompra:string,
        public canalOrigenCompra:string,
        public estadoPedido:string,
        public fechaCreacion: string
    ){}
    
}