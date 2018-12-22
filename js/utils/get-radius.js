const getRadius = (time, radius) => {
  const stroke = Math.round(2 * Math.PI * radius);
  const offset = (1 - time) * stroke;
  return {stroke, offset};
};

export default getRadius;
