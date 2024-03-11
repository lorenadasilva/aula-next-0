import Link from 'next/link';
export default function CadUsuario () {
    return(
        <>
           <h1> Cadastro </h1>
          <p> Insira as imformações do usuario </p>
          <p><Link href={'/'}> Voltar </Link></p>
          <p><Link href={'/sobre'}> Voltar para sobre </Link></p>
        
        
        </>
    );
}