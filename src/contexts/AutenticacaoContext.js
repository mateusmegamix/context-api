import { createContext, useState } from 'react'

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider( {children} ) {
  const [usuario, setUsuario] = useState({})

  function login(email, senha){
    if(email == 'mateus@gmail.com' &&
      senha == 123
    ){
      setUsuario({
        nome: 'Mateus Megamix',
        email: email,
        endereco: 'Rua Santo Antonio, 626',
        telefone: '(24) 9 9999-9999'
      })
      return 'ok'
    }
    else {
      return 'Email ou senha incorretos'
    }
  }

  return (
    <AutenticacaoContext.Provider value={{
      login,
      usuario
    }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}