const sendStatus = {
  ok: 200, // OK La solicitud ha tenido éxito
  created: 201, // Created La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado
  noContent: 204, // No Content La solicitud ha tenido éxito pero su respuesta no tiene ningún contenido
  badRequest: 400, // Bad Request La solicitud no se pudo entender o no se pudo cumplir
  unauthorized: 401, // Unauthorized La solicitud requiere autenticación
  forbidden: 403, // Forbidden La solicitud se entendió, pero se rechazó
  notFound: 404, // Not Found No se encontró el recurso solicitado
  methodNotAllowed: 405, // Method Not Allowed El método de solicitud no está permitido para el recurso solicitado
  notAcceptable: 406, // Not Acceptable La solicitud no es aceptable
  conflict: 409, // Conflict La solicitud no se pudo completar debido a un conflicto con el estado actual del recurso
  gone: 410, // Gone El recurso solicitado ya no está disponible y no se volverá a proporcionar
  unprocessableEntity: 422, // Unprocessable Entity La solicitud no se pudo procesar
  tooManyRequests: 429, // Too Many Requests La solicitud no se pudo procesar debido a una sobrecarga del servidor
  internalServerError: 500, // Internal Server Error El servidor encontró una situación con la cual no sabe cómo manejarla
  notImplemented: 501, // Not Implemented El servidor no admite la capacidad para satisfacer la solicitud
  badGateway: 502, // Bad Gateway El servidor, mientras actuaba como puerta de enlace o proxy, recibió una respuesta inválida del servidor de origen
  serviceUnavailable: 503, // Service Unavailable El servidor no está disponible para atender la solicitud
  gatewayTimeout: 504, // Gateway Timeout El servidor, mientras actuaba como puente de enlace o proxy, no recibió a tiempo una respuesta del servidor de origen
  httpVersionNotSupported: 505, // HTTP Version Not Supported El servidor no admite, o no desea admitir, la versión del protocolo HTTP utilizada en la solicitud
  DUPLICATE_KEY_ERRROR: 11000, // Duplicate key
};

module.exports = sendStatus ;
