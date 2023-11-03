export default function throwGenericError(message: string, error: Error): void {
  console.error('Mensagem do erro:', error.message);
  console.error('Erro:', error.stack);
  throw new Error(message);
}