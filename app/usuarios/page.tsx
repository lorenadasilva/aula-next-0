import Link from 'next/link';
export default function ListaUsuarios () {
    return(
        <>
         <h1> Usuarios </h1>

         <p> <Link href={'/usuarios/1'}>Usuarios 1 </Link></p>
         <p> <Link href={'/usuarios/2'}>Usuarios 2 </Link></p>
         <p> <Link href={'/usuarios/3'}>Usuarios 3 </Link></p>

          <p><Link href={'/'}> Voltar </Link></p>
        
        </>
    );
}