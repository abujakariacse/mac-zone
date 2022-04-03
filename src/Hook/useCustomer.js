import { useEffect, useState } from "react"

const useCustomer = () => {

    const [customers, setCustomer] = useState([]);

    useEffect(() => {
        fetch('Customer.json')
            .then(res => res.json())
            .then(data => setCustomer(data));
    }, []);

    return [customers, setCustomer];
}

export default useCustomer;