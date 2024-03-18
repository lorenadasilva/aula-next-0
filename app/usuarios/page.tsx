import Link from 'next/link';
export default function ListaUsuarios () {
    return(
        <>
         <h1> Usuarios </h1>

         <p> Usuarios 1 </p>
         <p> Usuarios 2 </p>
         <p> Usuarios 3 </p>

          <p><Link href={'/'}> Voltar </Link></p>
        
        </>
    );
}