import { useState, useEffect } from "react";

// 4 - Custom hook
export function useFetch(url) {
  const [data, setData] = useState(null)

  // 5 - Refatorando o POST
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

  // 6 - Loading
  const [loading, setLoading] = useState(false);

  // 7 - Tratanto erros
  const [error, setError] = useState(null)

  // 8 - Desafio 6
  const [itemId, setItemId] = useState(null)

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      setMethod(method)
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
      })
      setItemId(data)
    }
  }



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // 7 - Tratando erros
      try {
        //6 - Loading
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setLoading(false);
      } catch (error) {
        setError('Erro ao carregar os dados!')
        console.log(error.message)
      }
    }

    fetchData();
  }, [url, callFetch])

  // 5 - refatorando POST
  useEffect(() => {
    const httpRequest = async () => {
      let json;
      let fetchOptions = [url, config];
      if (method === "POST") {
        const response = await fetch(...fetchOptions)
        json = await response.json()

      } else if (method === "DELETE") {
        const deletedUrl = `${url}/${itemId}`
        const response = await fetch(deletedUrl, config)
        json = await response.json()
      }
      setCallFetch(json)
    }

    httpRequest();
  }, [config, method, url, itemId])

  return { data, httpConfig, loading, error };
}