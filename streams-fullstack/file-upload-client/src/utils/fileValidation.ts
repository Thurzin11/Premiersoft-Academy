export interface FileValidation {
    isValid: boolean;
    message: string;
  }
  
  export const validateFile = (file: File): FileValidation => {
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];
  
    if (!ALLOWED_TYPES.includes(file.type)) {
      return {
        isValid: false,
        message: 'Tipo de arquivo não permitido'
      };
    }
  
    if (file.size > MAX_SIZE) {
      return {
        isValid: false,
        message: 'Arquivo muito grande (máximo 5MB)'
      };
    }
  
    return {
      isValid: true,
      message: 'Arquivo válido'
    };
  };