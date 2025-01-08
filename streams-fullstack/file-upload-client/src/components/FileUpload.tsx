import React, { useState, useCallback, FC } from "react";
import { FileUploadState, UploadResponse } from "../types/upload.types";

const FileUpload: FC = () => {
  const [uploadState, setUploadState] = useState<FileUploadState>({
    file: null,
    status: "",
    progress: 0,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadState({
        ...uploadState,
        file: e.target.files[0],
        status: "Arquivo selecionado",
      });
    }
  };

  const handleUpload = useCallback(async () => {
    if (!uploadState.file) {
      setUploadState((prev) => ({
        ...prev,
        status: "Por favor, selecione um arquivo",
      }));
      return;
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setUploadState({
          file: e.dataTransfer.files[0],
          status: "Arquivo selecionado",
          progress: 0,
        });
      }
    };

    const formData = new FormData();
    formData.append("file", uploadState.file);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      const progress = (event.loaded / event.total) * 100;
      setUploadState((prev) => ({
        ...prev,
        progress,
        status: `Enviando: ${Math.round(progress)}%`,
      }));
    };

    xhr.onload = () => {
      if (xhr.status === 201) {
        const response: UploadResponse = JSON.parse(xhr.response);
        setUploadState((prev) => ({
          ...prev,
          status: response.message,
          progress: 100,
        }));
      } else {
        setUploadState((prev) => ({
          ...prev,
          status: "Erro ao enviar arquivo",
          progress: 0,
        }));
      }
    };

    xhr.onerror = () => {
      setUploadState((prev) => ({
        ...prev,
        status: "Erro na conexão",
        progress: 0,
      }));
    };

    xhr.open("POST", "http://localhost:3000/upload");
    xhr.send(formData);
  }, [uploadState.file]);

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Upload de Arquivo
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Selecione um arquivo:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-gray-700 bg-gray-100 rounded-lg cursor-pointer"
          />
        </div>

        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full mb-4"
        >
          Enviar Arquivo
        </button>

        {uploadState.progress > 0 && (
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadState.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {uploadState.status && (
          <p
            className={`text-center ${
              uploadState.status.includes("sucesso")
                ? "text-green-600"
                : uploadState.status.includes("Erro")
                  ? "text-red-600"
                  : "text-blue-600"
            }`}
          >
            {uploadState.status}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
