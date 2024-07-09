import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function AxiosPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/v1/products"
                );
                console.log(response);
                setPosts(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading ......</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.name}</h3>
                        {/* <img src={post.thumbnailUrl} alt={post.title} /> */}
                        <h5>{post.price}</h5>
                    </li>
                ))}
            </ul>
        </div>
    );
}
