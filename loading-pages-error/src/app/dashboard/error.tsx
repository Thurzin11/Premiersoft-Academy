"use client"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>
          {error.message}
          <button
            onClick={reset}
            className="mt-2 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Tentar Novamente
          </button>
        </AlertDescription>
      </Alert>
    </div>
  )
}