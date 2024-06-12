import { useAppStore } from "../stores/useAppStore"

export default function IndexPage() {

  const drinks = useAppStore((state) => state.drinks)
  console.log(drinks)
  
  return (
    <>
    </>
  )
}
