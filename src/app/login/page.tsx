import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function Login () {
  return (
    <section className='grid place-content-center min-h-screen text-center'>
      <h1 className='text-xl font-bolt mb-4'>Inicia Sesion en el nuevo twitter</h1>
      <AuthButtonServer/>
    </section>
  )
}
