import { IsProfile } from "../../components/profile"

export function Called(){
  return (
    <>
      <IsProfile myProfile="customers" /> 
      <h1>Customers</h1>
    </>
  )
}