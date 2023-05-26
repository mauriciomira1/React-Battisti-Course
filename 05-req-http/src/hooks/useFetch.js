import { useState, useEffect } from "react";

// 4 - Custom hook
export function useFetch(url) {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null)

  // 5 - Refatorando o POST
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

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
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }

    fetchData();
  }, [url, callFetch])

  // 5 - refatorando POST
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const response = await fetch(...fetchOptions)
        const json = await response.json()
        setCallFetch(json)
      }
    }

    httpRequest();
  }, [config, method, url])

  return { data, httpConfig };
}