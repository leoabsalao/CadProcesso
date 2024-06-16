export interface Processo {
   _id: string;
   npu: string;
   datCadastro: Date;
   datVisualizado: Date;
   municipio: string;
   uf: string;
   uploadArq: string;
   visualizado: boolean;
}
