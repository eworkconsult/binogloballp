import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const useFetching = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState("");
    const [data, setData] = useState([]);
    const [mounted, setMounted] = useState(null);

    useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
        };
    }, [mounted]);

    const fetchData = useCallback(() => {
        axios
            .get(url)
            .then((res) => {
                if (mounted) {
                    if (res.status >= 200 && res.status <= 299) {
                        setTimeout(() => {
                            const results = res.data;
                            setIsLoading(false);
                            setData(results);
                            setIsError("");
                        }, 4000);
                    } else {
                        setIsLoading(false);
                        setIsError("Error 404");
                        setData([]);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
                setIsError("Aw snaps! Problem encountered loading the page.");
                setData([]);
            });
    }, [url, mounted]);

    useEffect(fetchData, [fetchData]);
    return [isLoading, isError, data];
};
export default useFetching;
