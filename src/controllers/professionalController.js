import { getProfessionalList } from "../services/professionalService.js";

export function getProfessionals(req, res, next) {
  const professionals = getProfessionalList();
  res.send({
    error: false,
    data: professionals,
    message: "Professional data retrieved successfully",
  });
}
