import { useAppStore } from "../stores/useAppStore"

export default function IndexPage() {
  const categories = useAppStore((state) => state.categories)
  
  return (
    <>
        <h1>Inicio</h1>
    </>
  )
}
