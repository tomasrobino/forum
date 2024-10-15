import {useLocation} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {category} from "../../types.ts";

export function WritePost() {
    const [categories, setCategories] = useState<category[]>([]);
    const [selected, setSelected] = useState<number>(0);
    const location = useLocation();
    let previousCategory = "";
    if (location.state && "category" in location.state && typeof location.state.category === "string") {
        previousCategory = location.state.category;
    }

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
        setSelected(parseInt(e.target.value));
    }

    const options = [];
    if (categories.length > 0) {
        const index = categories.findIndex(value => {
            if (value.urlName === previousCategory) return true;
        });

        for (let i = 0; i < categories.length; i++){
            const category = categories[i];
            options.push(<option value={i} key={category.urlName}>{category.title}</option>);
        }

        if (index > -1) {
           setSelected(index);
        }
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