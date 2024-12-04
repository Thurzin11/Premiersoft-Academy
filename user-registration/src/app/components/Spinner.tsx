export default function Spinner() {
    return (
      <div
        className="inline-block w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"
        role="status"
      >
        <span className="sr-only">Carregando...</span>
      </div>
    )
  }