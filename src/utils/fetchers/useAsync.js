import React, { useState, useEffect } from "react"


/* 
    Custom hook that handles multiples request with optional url params asyncronously 
*/
function useAsync(f, [param_0, param_1, param_2, param_3, param_4]) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [result, setResult] = useState(null)
    useEffect(param_ => {
        setLoading(true)
        Promise.resolve(f(param_0, param_1, param_2, param_3, param_4))
            .then(setResult, setError)
            .finally(param_ => setLoading(false))
    }, [f, param_0, param_1, param_2, param_3, param_4])
    return { loading, error, result }
}

export { useAsync }