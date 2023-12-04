import { useEffect } from "react";

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | Carrito de compras`
  }, [title]);

  return null;
}
