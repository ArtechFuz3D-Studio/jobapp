import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch = () => {
    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, seterror] = useState(null)

}