import {useLocation} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {category} from "../../types.ts";

export function WritePost() {
    const [categories, setCategories] = useState<category[]>([]);
    const location = useLocation();
    let previousCategory = undefined;
    if (location.state && "category" in location.state && typeof location.state.category === "string") {
        previousCategory = location.state.category;
    }
    const [selected, setSelected] = useState<string>(previousCategory);

    useEffect(() => {
        const url = import.meta.env.VITE_URL;
        //Fetching categories
        fetch(`${url}/forum/categories`)
            .then(data => data.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => console.error('Error:', error))
    }, []);

    function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
        setSelected(e.target.value);
    }

    const options = [];
    for (const category of categories) {
        options.push(<option value={category.urlName} key={category.urlName}>{category.title}</option>);
    }

    return (
        <div>
            <p>Write a post</p>
            <select name="categorySelect" value={selected} onChange={handleSelect}>
                {...options}
            </select>
        </div>
    );
}