export const endpointNotFound = (req, res, next) => {
  res.status(404).json({ message: "endpoint not found" });
};
