   //funcion aleatoria para savarun elemento del arreglode objetos
//getRandom funcion que me permite sacar un elemento aleatorio
export const getRandom = (list) =>{
  const randomIndex = Math.floor(Math.random() * list.length)
  return(list[randomIndex])
}