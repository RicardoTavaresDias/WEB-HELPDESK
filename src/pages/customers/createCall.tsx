import { IsProfile } from "../../components/profile";

export function CreateCall(){
  return (
    <>
      <IsProfile myProfile="customers" /> 
      <h1>Create Call</h1>
    </>
  )
}